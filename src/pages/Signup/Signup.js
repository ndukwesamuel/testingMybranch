import React, {useRef, useState} from "react";
import ship from "../../assets/images/shipplane.png";
import logo from "../../assets/images/shiplogos.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import ReCAPTCHA from "react-google-recaptcha";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Circles } from  'react-loader-spinner';
import Modal from '@mui/material/Modal';
// import { Registerauth } from "../store/actions/authAction/register";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { RegisterAuth } from "../../features/Auth/authSlice";
import { useEffect } from "react";

const Signup= () => {
  const {registersuccess, error} = useSelector(state => state.auth);
    const captchaRef = useRef(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = useState(false);

  const [register, setRegister] = useState([]);
  const dispatch= useDispatch();
    const navigate= useNavigate();

  const handleChange= (e) => {
    setRegister({...register, [e.target.name] : e.target.value})
  }

  const [password, setPassword]= useState(false)
  const [password1, setPassword1]= useState(false)

    const passwordicon= ()=>{
        setPassword(!password)
    }
    const passwordicon1= ()=>{
      setPassword1(!password1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register)
    setLoading(true)
     await dispatch(RegisterAuth(register))
    setLoading(false)
  }

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (registersuccess) navigate('/dashboard')
  
  }, [navigate, registersuccess])

    return (
        <div className="whole">
            
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className="entiremodal"
>
  <Box className="modal">
    <p id="modal-modal-title" variant="h5" component="h2" className="modaltext">
      Text in a modal
    </p>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  </Box>
</Modal>
            <div className="loginside1">
            <img src={logo} alt="ship to naija logo" className="shiptonaijalogo" width="110px" height="80px"/>
            <div className="logininfo1">
                <p className="loginword1">Sign Up</p>
                <div className="socialmedia1">
                    <img src={google} alt="google"className="sociallogin1"/>
                    <img src={facebook} alt="google"className="sociallogin1"/>
                    <img src={linkedin} alt="google"className="sociallogin1"/>
                    {/* <span className="horsocial"></span> */}
                </div>
                <p className="or">or</p>
                <form onSubmit={handleSubmit}>
                <div className="names">
                    <div>
                <p className="loginemail">First Name</p>
                <input type="text" className="firstname" name="firstname" onChange={handleChange} placeholder=""/>
                </div>
                <div>
                <p className="loginemail">Last Name</p>
                <input type="text" className="firstname" name="lastname" onChange={handleChange} placeholder=""/>
                </div>
                </div>
                <div className="names">
                    <div>
                <p className="loginemail">Email</p>
                <input type="text" className="firstname" name="email" onChange={handleChange} placeholder=""/>
                </div>
                <div>
                <p className="loginemail">Phone Number</p>
                <div className="phone_no">
                    <select className="country_code">
                        <option>+234</option>
                    </select>
                <input type="text" className="no_input" name="phone_number" onChange={handleChange} placeholder=""/>
                </div>
                </div>
                </div>
                <div className="names">
                    <div>
                <p className="loginemail">Password</p>
                <div className="passwordhidden1">
                <input type={password? "text":"password"} className="firstname1" name="password" onChange={handleChange} placeholder=""/>
                <div className="divhidden" onClick={passwordicon}>
                    {password? <AiFillEye className="hiddenpassword"/>: <AiFillEyeInvisible className="hiddenpassword"/>}
                {/* <AiFillEyeInvisible className="hiddenpassword"/> */}
                </div>
                </div>
                </div>
                <div>
                <p className="loginemail">Confirm Password</p>
                <div className="passwordhidden1">
                <input type={password1? "text":"password"} className="firstname1" name="password" onChange={handleChange} placeholder=""/>
                <div className="divhidden" onClick={passwordicon1}>
                    {password1? <AiFillEye className="hiddenpassword"/>: <AiFillEyeInvisible className="hiddenpassword"/>}
                {/* <AiFillEyeInvisible className="hiddenpassword"/> */}
                </div>
                </div>
                </div>
                </div>
                <p className="loginemail">How did you hear about us?</p>
                <select className="reference">
                    <option className="ref_option">Friend</option>
                </select>
                <div className="rem_me">
                    <input type="checkbox" id="remember" className="radio"/>
                    <label htmlFor="remember" className="agree">I agree to Shiptonaija's <button onClick={handleOpen} className="privacy">Terms </button>and <button onClick={handleOpen} className="privacy">Privacy policy</button></label>
                </div>
                
                <button type="submit" className="loginbut1"> {
                loading ?
                <Circles
                height="25"
                width="25"
                color='white'
                /> :null} Create Account</button>
                </form>
                <div className="recaptha">
                <ReCAPTCHA sitekey="YOUR-SITE-KEY"/>
                </div>
                <div className="membercolon">                    
                        <p>Already a shiptonaija member?<Link to="/" className="links">Login</Link></p>
                   </div>
            </div>
        </div>
        <div className="plane1">
        <img src={ship} alt="login page" width="650px" className="cargo1"/>
        </div>
        
        </div>
    )
}

export default Signup;