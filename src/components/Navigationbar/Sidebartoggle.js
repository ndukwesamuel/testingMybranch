import React from 'react';
import shiplogo from '../../assets/images/Logo.png';
import dashboard from '../../assets/images/dashboard.png';
import asset1 from '../../assets/images/asset1.png';
import asset2 from '../../assets/images/asset2.png';
import asset3 from '../../assets/images/asset3.png';
import asset4 from '../../assets/images/asset4.png';
import asset5 from '../../assets/images/asset5.png';
import bulkicon from '../../assets/images/bulkicon.png';
import car from '../../assets/images/car.png';
import forklift from '../../assets/images/forklift.png';
import warehouse from '../../assets/images/Warehouse.png'
import { NavLink } from 'react-router-dom';
import {IoMdClose} from 'react-icons/io';


const Sidebartoggle = ({sidebar, showSidebar}) => {
  return (
    <div className={sidebar ? 'sidebartoggle active' : 'sidebartoggle' }>
      <button onClick={showSidebar}>
      <IoMdClose />
       </button>
      <div className='sidebartoggle__logo'>
      <div className='sidebartoggle__logocontainer'>
        <img  src={shiplogo} alt='shipment-logo'/>
      </div>
    </div>

    <nav className='sidebartoggle__content'>
        <div className='sidebartoggle__sectionone'>
          <ul  onClick={showSidebar}>
            <div className='sidebartoggle__listcover'>
            
            <li className='sidebartoggle__item'>
              <NavLink to='/dashboard'  className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
              <img src={dashboard} alt='dashboard'/>
              <span className='sidebartoggle__item--text'>my dashboard</span>
              </NavLink>
            </li>
            </div>
          </ul>
        </div>

        <div className='sidebartoggle__sectiontwo'>
          <ul onClick={showSidebar}>
            <div className='sidebartoggle__listcover'>
          <p className='list-heading'>Shipping</p>

            <li className='sidebartoggle__item'>
              <NavLink to='/shipment' className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
            <img src={asset3} alt='shipment' />
            <span className='sidebartoggle__item--text'>shipment</span>
            </NavLink>
            </li>

            <li className='sidebartoggle__item'>
              <NavLink  to='/auto' 
              className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
            <img src={car} alt='auto' />
            <span className='sidebartoggle__item--text'>Auto</span>
            </NavLink>
            </li>

            <li className='sidebartoggle__item'>
              <NavLink to='/pickup'
              className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')} >
            <img src={asset2} alt='pick-up' />
            <span className='sidebartoggle__item--text'>pick up</span>
            </NavLink>
            </li>

            <li className='sidebartoggle__item'>
              <NavLink  to='/bulkshipping'
               className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
            <img src={bulkicon} alt='bulk-shipping' />
            <span className='sidebartoggle__item--text'>bulk shipping</span>
            </NavLink>
            </li>

            <li className='sidebartoggle__item'>
              <NavLink  to ='/customclearing'
              className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')} >
            <img src={forklift} alt='forklift' />
            <span className='sidebartoggle__item--text'>customs clearing</span>
            </NavLink>
            </li>

            <li className='sidebartoggle__item'>
            <NavLink to ='/warehousing' className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
            <img src={warehouse} alt='ware-house' />
            <span className='sidebartoggle__item--text'>warehousing</span>
            </NavLink>
            </li>

            </div>
            </ul>
        </div>

        <div className='sidebartoggle__sectionthree'>
          <ul onClick={showSidebar}>
            <div className='sidebartoggle__listcover'>
          <p className='list-heading'>Asset aquisition</p>
              
          <li className='sidebartoggle__item'>
            <NavLink to='/shop'
            className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
            <img src={asset4} alt='shop' />
            <span className='sidebartoggle__item--text'>shop for me</span>
            </NavLink>
          </li>

          <li className='sidebartoggle__item'>
            <NavLink to='/fillnship'
            className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
            <img src={asset1} alt='fill-n-ship' />
            <span className='sidebartoggle__item--text'>fill and ship</span>
            </NavLink>
          </li>
          </div>  
        </ul>
        </div>

        <div className='sidebartoggle__sectionfour'>
          <ul onClick={showSidebar}>
            <div className='sidebartoggle__listcover'>
            <li className='sidebartoggle__item'>
              <NavLink to='/transaction'
              className={({ isActive }) => (isActive ? 'active' : 'sidebartoggle__linking')}>
             <img src={asset5} alt='transaction' />
              <span className='sidebartoggle__item--text'>transaction</span>
              </NavLink>
            </li>
            </div>
          </ul>
        </div>
    </nav>
</div>
  )
}

export default Sidebartoggle