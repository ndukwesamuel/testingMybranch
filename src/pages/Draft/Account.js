import vector from "../../assets/images/Vector.svg";
import accountofficer from "../../assets/images/accountofficer.png";
import { Link } from "react-router-dom";
import {HiMail} from "react-icons/hi";
import {BsFillTelephoneFill} from "react-icons/bs";



const Account= ({handleform2, handleform3}) => {
    return(
        <div className="pricing">
            <div className="pricingflex">
            <Link to="/dashboard"><button className="return_but"><img src={vector} alt="back" /></button></Link>
            <div className="pricingholder">
            <p className="dashboard_welcome">Account Officer</p>
            <hr className="dashboard_hr"/>
            <div className="draft_details1">
                <div className="accountdetails">
                    <img src={accountofficer} alt="Account officer" className="accountofficer"/>
                    <div className="accountnames">
                        <p className="accountfull">Folashade Koyejo</p>
                        <div className="accountmail">
                            <HiMail className="officermail"/>
                            <p className="officer_email">folashadekuti@gmail.com</p>
                        </div>
                        <div className="accountmail">
                            <BsFillTelephoneFill className="officermail"/>
                            <p className="officer_email">+234 813 547 4671</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Account;