import React, {useState, useEffect} from "react";
import ship from "../../assets/images/Shiptonaija.svg";
import logo from "../../assets/images/shiplogos.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {Circles } from  'react-loader-spinner';
// import { Loginauth } from "../store/actions/authAction/login";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { LoginAuth } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";


const Login= () => {
   
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const [logindata, setLogindata] = useState([]);
    const [loading, setLoading] = useState(false);
    const {success, error} = useSelector(state => state.auth);
     console.log('success and error', error)

    const handleChange= (e) => {
        setLogindata({...logindata, [e.target.name]: e.target.value})
    }

    const handleSubmit= async (e) => {
        e.preventDefault();
        setLoading(true)
        await dispatch(LoginAuth(logindata))
        
        setLoading(false)
    }

    const [password, setPassword]= useState(false)

    const passwordicon= ()=>{
        setPassword(!password)
    }

    const responseGoogle = (response) => {
        console.log(response);
      }

      const responseFacebook = (response) => {
        console.log(response);
      }

    useEffect(() => {
        // redirect user to login page if registration was successful
        if (success) navigate('/dashboard')
      
      }, [navigate, success])
    return (
        <div className="whole">
            <div className="loginside">
            <img src={logo} alt="ship to naija logo" className="shiptonaijalogo" width="110px" height="80px"/>
            <div className="logininfo">
                <form className="loginform" onSubmit={handleSubmit}>
                <p className="loginword">Login</p>
                <div className="inputlogindet">
                <p className="loginemail">Email</p>
                <input type="text" className="emailinput" name="email" onChange={handleChange} placeholder="abc@mail.com"/>
                </div>
                <div className="inputlogindet">
                <p className="loginemail">Password</p>
                <div className="passwordhidden">
                <input type={password? "text":"password"} name="password" onChange={handleChange} className="emailinput1"/>
                <div className="divhidden" onClick={passwordicon}>
                    {password? <AiFillEye className="hiddenpassword"/>: <AiFillEyeInvisible className="hiddenpassword"/>}
                {/* <AiFillEyeInvisible className="hiddenpassword"/> */}
                </div>
                </div>
                </div>
                <div className="rememberme">
                <div>
                    <input type="checkbox" id="remember" className="radio"/>
                    <label htmlFor="remember" className="remember">Remember me</label>
                </div>
                <p className="forgot">Forgot Password</p>
                </div>


                <button type="submit" className="loginbut">{
                loading ?
                <Circles
                height="25"
                width="25"
                color='white'
                /> :null} Login</button>
                </form>
                <div className="rememberme1">
                <p className="notyet">Not yet a ship Naija Member?</p>
                <Link to="/signup" className="forgot">Sign Up</Link>
                </div>
                {/* <div className="socialmedia">
                    <span className="horsocial"></span>
                    <img src={google} alt="google"className="sociallogin"/>
                    <img src={facebook} alt="google"className="sociallogin"/>
                    <img src={linkedin} alt="google"className="sociallogin"/>
                    <span className="horsocial"></span>
                </div> */}
                <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    render={renderProps => (
      <button className="googlelogin" onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={google} alt="google"className="sociallogin"/> <span className="loginwithgoogle">Login with Google</span></button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <FacebookLogin
            appId="542844437010923"
            // autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            render={renderProps => (
                <button type="button" onClick={renderProps.onClick} className="googlelogin">
                <img src={facebook} alt="facebookImage" className="sociallogin"/>
                <span className="loginwithgoogle">Login with Facebook</span>
                </button>
                    )}
            />
            </div>
        </div>
        <div className="plane">
        <img src={ship} alt="login page" className="cargo1" width="650px"/>
        </div>
        
        </div>
    )
}

export default Login;