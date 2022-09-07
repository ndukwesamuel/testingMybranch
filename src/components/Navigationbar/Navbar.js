import React, {useState} from "react";
import searchIcon from "../../assets/images/Search-Icon.svg";
import plusIcon from "../../assets/images/plusicon_topNav.svg";
import profileImg from "../../assets/images/profileImg1.svg";
import arrow from "../../assets/images/Arrow.svg";
import {IoMenuOutline} from 'react-icons/io5';


const Navbar = ({ showSidebar}) => {
  
  return (
    <>
    <nav className="topNav">
      <div className="topNav_c-container">
        <div className="topnav__toggle">
        <button onClick={ showSidebar}><IoMenuOutline /></button>
        </div>
        
        <div className="topNav_search-container flex align-center">
          <input type="search" name="" id="search-field" placeholder="Search shipment" aria-label="Search" />
          <button aria-label="submit"><img src={searchIcon} alt="search" srcset="" /></button>
        </div>

        <div className="topNav_new-container flex">
          <h3>
            What is New ?
          </h3>
        </div>

        <div className="topNav_acct-detail flex">
          <div className="divv">
            <div className="topNav_acct flex">
              <p> ₦0.00</p>
              <img src={plusIcon} alt="" srcset="" />
            </div>
            <p className="wb" >wallet balance</p>
          </div>
        </div>

        <div className="topNav_profile flex">
          <img
            src={profileImg}
            alt="imgplaceholder"
            srcset=""
            className="topNav_img"
          />
          <div className="profile_Details">
            <p>
              Clement{" "}
              <span>
              <svg  viewBox="0 0 20 14"  xmlns="http://www.w3.org/2000/svg" className="top_arrow">
<path d="M10.0565 13.062L0.509766 3.51524L3.69352 0.33374L10.0565 6.69899L16.4195 0.33374L19.6033 3.51524L10.0565 13.062Z" />
</svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
    {/* {sidebar ? <Sidebartoggle /> : ''} */}
    </>
  );
};

export default Navbar;
