// import React from 'react';
// import Dashboardhome from '../components/dashboard/dashboard';

// export const Dashboard = () => {
//   return (
//     <div>
//     <Dashboardhome/>
//     </div>
//   )
// }
import React from "react";
import {BrowserRouter as Router,  Route, Routes, Navigate  } from 'react-router-dom';
import Dashboardall from "../components/dashboard/dashboard";

const Dashboard= () => {
    return (
        <div>
        <Router>
            <Routes>
                <Route exact path="/dashboard" element={<Dashboardall/>}/>
            </Routes>
        </Router>
        </div>
    )
}

export default Dashboard;