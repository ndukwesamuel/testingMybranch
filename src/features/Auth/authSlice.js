
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { toast } from "react-toastify";


export const RegisterAuth = createAsyncThunk('auth/register', 
async (register, {rejectWithValue}) => {
     const instance = axios.create({

        baseURL: 'https://ship-to-9ja.herokuapp.com/api/users/',
        timeout: 20000,

        headers:{
            'Content-Type': 'application/json',
            "Accept":'application/json'
        }
    });
    return await instance.post('signup', register)
    .then(response =>{
        console.log('register', response.data)
        return response.data
    }).catch(error => {
        
        if(error.message === "Network Error"){
            return rejectWithValue(error.response)
        }
        else {
            return rejectWithValue(error.response)
          }
        })
}
);


// login ation

export const LoginAuth = createAsyncThunk('auth/login', 
async (login, { rejectWithValue }) => {
     const instance = axios.create({

        baseURL: 'https://ship-to-9ja.herokuapp.com/api/users/',
        timeout: 20000,

        headers:{
            'Content-Type': 'application/json',
            "Accept":'application/json'
        }
    });
    return await instance.post('login', login)
    .then(response =>{
        return response.data
    }).catch(error => {
        
        if(error.message === "Network Error"){
            return rejectWithValue(error.response)
        }

        else {
            return rejectWithValue(error.response)
          } 
       
        
        }
    )
}
);


const initialState ={
    loading: false,
    register: null,
    authtoken: null,
    success:false, 
    registersuccess: false,
    error: null,
    registerror: null

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:{
        [RegisterAuth.pending] : () => {
            console.log('pending');
          },
          [RegisterAuth.fulfilled] : (state,  action) => {
            console.log(' registration fetched successfully', action.payload);
             
            toast.success("Registration sucessful!",
            {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'newTest',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar'
            });
            return{...state, register: action.payload,
                authtoken: action.payload.token, registersuccess: true}
          },
          [RegisterAuth.rejected] : (state, action) => {
            console.log('rejected', action.payload);
            toast.error(action.payload.status === 0 ? "Network error" : "An error occurred",
            {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'newTest',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar'
            });

            return{...state, registererror: action.payload}
          },

        //   login extra reducer

        [LoginAuth.pending] : () => {
            console.log('pending');
          },
          [LoginAuth.fulfilled] : (state, action) => {
            
            localStorage.setItem('token', action.payload.token)
            toast.success("Registration sucessful!",
            {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'newTest',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar'
            });
            return{...state, authtoken: action.payload.token,
                 loggedInUser: action.payload.user, success:true}
          },
          [LoginAuth.rejected] : (state, action) => {
            
            toast.error(action.payload.status === 0 ? "Network error" : "Incorrect email or password",
            {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'newTest',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar'
            });

            return{...state, error: action.payload}
          },
    }
})


export const authtoken = (state) => state.auth.authtoken

export default authSlice.reducer;