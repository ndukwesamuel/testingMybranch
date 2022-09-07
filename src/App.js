import { PublicRoutes } from './routes/PublicRoutes';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Fragment } from 'react';
function App() {
  return (
 
   
    <BrowserRouter>
          <ToastContainer />
          <Fragment>
              <Routes>
              <Route path='/' exact element={<Login />}/>
              <Route path='/signup' exact element={<Signup />}/>
               <Route path='*' element={< PublicRoutes />} />
               
              </Routes> 
               

                </Fragment>
      </BrowserRouter>
                
  
  );
}

export default App;
