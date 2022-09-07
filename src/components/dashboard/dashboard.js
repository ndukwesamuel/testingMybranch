import {FaCalculator} from "react-icons/fa";
import {AiFillFile} from "react-icons/ai";
import Box from "../../assets/images/box.svg";
import {BsPersonCircle} from "react-icons/bs";
import { Link } from "react-router-dom";

const Dashboardall = () => {
    return(
        <div className="dashboard">
            <p className="dashboard_welcome">Welcome Clement</p>
            <hr className="dashboard_hr"/>
            <p className="dashboard_tools">Tools</p>
            <div className="dashboard_sec">
            <div className="dashboard_comp1">
            <Link to="/dashboard/form" className="Link"><div className="dashboard_pricing">
                    <div>
                    <p className="dashboard_check">Check Pricing</p>
                    <p className="dashboard_shopping">Check Shipping Cost</p>
                    </div>
                    <p className="dashboard_calc"><FaCalculator/></p>
                </div></Link>
                <Link to="/dashboard/tracker" className="Link"><div className="dashboard_pricing">
                    <div>
                    <p className="dashboard_check">Tracker</p>
                    <p className="dashboard_shopping">Track all items here</p>
                    </div>
                    <p className="dashboard_calc"><img src={Box}/></p>
                </div></Link>
                <Link to="/dashboard/draft" className="Link"><div className="dashboard_pricing">
                    <div>
                    <p className="dashboard_check">Drafts</p>
                    <p className="dashboard_shopping">Saved for later items</p>
                    </div>
                    <p className="dashboard_calc"><AiFillFile/></p>
                </div>
                </Link>
            </div>
            <Link to="/dashboard/accountofficer" className="Link"><div className="dashboard_pricing1">
                    <div>
                    <p className="dashboard_check">Account Officer</p>
                    </div>
                    <p className="dashboard_calc"><BsPersonCircle/></p>
                </div></Link>
            </div>
            <div className="dashboard_sec2">
                <div className="sec2_firstrow">
                <div className="sec2_partone">
                    <p className="sec2_rowaddress">Your US address</p>
                    <p className="sec2_information">Use the information below as your shipping address when shopping online. We would receive and process the package in your name.</p>
                </div>
                <div>
                    <p className="sec2_rowaddress">SELECT MY WAREHOUSE ADDRESS</p>
                    <select className="sec2_select">
                        <option>Edinburgh Unied states</option>
                    </select>
                </div>
                </div>
                <div className="wholespace">
                <p className="dashboard_fullname">Full Name</p>
                <input type="text" className="fullname_input" placeholder="Your Name"/>
                </div>
                <div className="sec3">
                    <div>
                    <p className="dashboard_fullname">ADDRESS LINE 1</p>
                <input type="text" className="sec3_input" placeholder="Address"/>
                <p className="dashboard_fullname">CITY</p>
                <input type="text" className="sec3_input" placeholder="City"/>
                <p className="dashboard_fullname">COUNTRY</p>
                <input type="text" className="sec3_input" placeholder="Country"/>
                <p className="dashboard_fullname">PHONE NUMBER</p>
                <input type="text" className="sec3_input" placeholder="Phone number"/>
                    </div>
                    <div>
                    <p className="dashboard_fullname">UNIT NUMBER</p>
                <input type="text" className="sec3_input" placeholder="Value"/>
                <p className="dashboard_fullname">STATE/PROVINCE/REGION</p>
                <input type="text" className="sec3_input" placeholder="Region"/>
                <p className="dashboard_fullname">ZIP CODE</p>
                <input type="text" className="sec3_input" placeholder="Zip code"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardall;