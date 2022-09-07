import vector from "../../assets/images/Vector.svg";
import yellowbox from "../../assets/images/yellowbox.svg";
import harddisk from "../../assets/images/harddisk.svg";
import redcar from "../../assets/images/car.svg";
import { Link } from "react-router-dom";


const Car= ({handleform1, handleform2}) => {
    return(
        <div className="pricing">
            <div className="pricingflex">
            <Link to="/dashboard"><button className="return_but"><img src={vector} alt="back" /></button></Link>
            <div className="pricingholder">
            <p className="dashboard_welcome">CHECK PRICING</p>
            <hr className="dashboard_hr"/>
            <div className="pricing_details">
                <p className="pricingcalc">CALCULATE SHIPPING COST</p>
                <p className="detailsabout">Tell Us About Your Shipment:</p>
                <div className="allthree">
                    <div className="details_sec" onClick={handleform1}>
                        <img src={yellowbox} alt="yellowbox" className="pricing_img"/>
                        <div className="weightshift">
                        <p className="details_secwel">Weight & Dimensions</p>
                        <p className="details_secsmaller">For smaller businesses, with simple salaries and pay schedules.</p>
                        </div>
                        <div className="empty_sec"></div>
                    </div>
                    <div className="details_sec" onClick={handleform2}>
                        <img src={harddisk} alt="yellowbox" className="pricing_img"/>
                        <div className="weightshift">
                        <p className="details_secwel">Commonly shipped items</p>
                        <p className="details_secsmaller">For smaller businesses, with simple salaries and pay schedules.</p>
                        </div>
                        <div className="empty_sec"></div>
                    </div>
                    <div className="details_sec" >
                        <img src={redcar} alt="yellowbox" className="pricing_img"/>
                        <div className="weightshift">
                        <p className="details_secwel">Cars</p>
                        <p className="details_secsmaller">For smaller businesses, with simple salaries and pay schedules.</p>
                        </div>
                        <div className="empty_sec"><span className="empty_secemp"></span></div>
                    </div>
                </div>
                <form className="pricing_input">
                <label className="country1">FROM ZIP</label>
                <input className="country_select3" type="text" placeholder="ZIP CODE"/>
                <div className="pricing_inputfill">
                    <div className="select_design">
                        <label className="country">FROM COUNTRY</label>
                        <select className="country_select">
                            <option>NIGERIA</option>
                        </select>
                        <label className="country1">FROM STATE</label>
                        <select className="country_select">
                            <option>NIGERIA</option>
                        </select>
                        <label className="country1">FROM CITY</label>
                        <select className="country_select">
                            <option>NIGERIA</option>
                        </select>
                        
                    </div>
                    <div className="select_design">
                        <label className="country">TO COUNTRY</label>
                        <select className="country_select">
                            <option>NIGERIA</option>
                        </select>
                        <label className="country1">TO STATE</label>
                        <select className="country_select">
                            <option>NIGERIA</option>
                        </select>
                        <label className="country1">TO CITY</label>
                        <select className="country_select">
                            <option>NIGERIA</option>
                        </select>
                    </div>
                    </div>

                    <p className="pricingcalc1">CAR DETAILS</p>
                    <div className="pricing_inputfill1">
                    <div className="select_design">
                        <label className="country">MAKE</label>
                        <select className="country_select">
                            <option>Select</option>
                        </select>
                        <label className="country1">YEAR</label>
                        <select className="country_select">
                            <option>Select</option>
                        </select>                        
                        
                    </div>
                    <div className="select_design">
                        <label className="country">MODEL</label>
                        <select className="country_select">
                            <option>NIGERIA</option>
                        </select>
                        
                    </div>
                    </div>
                    

                  
                    <div className="bottomfill">
                        <div>
                    <p className="country1">Viewing Price In: Currency</p>
                        <select className="country_select">
                            <option>USD - US Dollar</option>
                        </select>
                        </div>
                        <div>
                        <p className="country1">Select Closest Warehouse</p>
                        <select className="country_select">
                            <option>Select Warehouse</option>
                        </select>
                        </div>
                    </div>
                    <button className="pricing_button">SUBMIT <i class="fa-solid fa-paper-plane fa-xl"></i></button>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Car;