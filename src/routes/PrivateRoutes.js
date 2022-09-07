import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authtoken } from "../features/Auth/authSlice";


const PrivateRoutes = () => {
  const token = useSelector(authtoken);
  console.log('my token', token)
  return token ? <Outlet /> : <Navigate  to ='/' />
  
}


export default PrivateRoutes;