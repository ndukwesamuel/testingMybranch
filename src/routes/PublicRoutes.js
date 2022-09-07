import React, {useState} from 'react';
import {BrowserRouter,  Route, Routes, Navigate  } from 'react-router-dom';
import Sidebar from '../components/Navigationbar/Sidebar';
import  Dashboard  from '../pages/Dashboard';
import Navbar from '../components/Navigationbar/Navbar';
import Dashboardall from '../components/dashboard/dashboard';
import Pricing from '../components/dashboard/dashboardpricing';
import PricingShipped from '../components/dashboard/dashboardpricingshipped';
import PricingCar from '../components/dashboard/dashboardpricingcar';
import Sidebartoggle from '../components/Navigationbar/Sidebartoggle';
import PrivateRoutes from './PrivateRoutes';
import Dashprice from '../components/dashboard/dashboard3ship';
import Draft from '../pages/Draft/Draft';
import Account from '../pages/Draft/Account';
import Transaction from '../pages/Transaction/Transaction';



export const PublicRoutes = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = (e) =>{
    e.preventDefault();
    setSidebar(!sidebar)
    console.log('clicked')
  } 
  return (
    <div className='cover'>
         
            <div className='cover__left' >
            <Sidebar />
           {sidebar ? <Sidebartoggle sidebar={sidebar} showSidebar={showSidebar} /> : ''} 
            </div>
            <div className='cover__right' >
              <Navbar showSidebar={showSidebar} />
               <Routes > 
                 <Route element={<PrivateRoutes />}> 
                    <Route path='/dashboard' element={<Dashboardall />}  />
                    {/* <Route path='/dashboard/pricing' element={<Pricing />} />
                    <Route path='/dashboard/pricingshipped' element={<PricingShipped />} />
                    <Route path='/dashboard/pricingcar' element={<PricingCar />} /> */}
                    <Route path='/dashboard/form' element={<Dashprice />} />
                    <Route path='/dashboard/draft' element={<Draft />} />
                    <Route path='/dashboard/accountofficer' element={<Account />} />
                    <Route path='/dashboard/tracker' element={<Transaction />} />
                </Route> 
                 </Routes> 
              
                </div>
                {/* </Fragment>  */}
           
        {/* </BrowserRouter> */}

    </div>
  )
}
