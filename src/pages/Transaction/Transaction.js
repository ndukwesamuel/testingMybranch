import vector from "../../assets/images/Vector.svg";
import accountofficer from "../../assets/images/accountofficer.png";
import { Link } from "react-router-dom";
import {BiSearch} from "react-icons/bi";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from "react";



const Transaction= () => {

    const [more, setMore] = useState(false)

    const handleClick = () => {
        setMore(!more)
    }

    return(
        <div className="pricing">
            <div className="pricingflex">
            <Link to="/dashboard"><button className="return_but"><img src={vector} alt="back" /></button></Link>
            <div className="pricingholder">
            <p className="trans_topic">Track My Shipment</p>
            <form className="trans_formsearch">
                <div className="transact_search">
                    <BiSearch className="trans_search"/>
                    <input placeholder="Enter your Shipment ID/ Unit number" className="trans_input"/>
                </div>
                <button className="trans_but">Track</button>
            </form>
            <div className="trans_track">
                <div className="tracker_marks">
                    <div className="tracker_whole">
                    <div className="tracker_quantity">
                        <p className="tracker_bolder">Shipment ID: 003443</p>
                        <p>Items: <span className="tracker_bolder">2 Nike Shoes, 3 Wrist Watches, 1 Handbag<span className="trans_innerquan">Qty:23</span></span></p>
                    </div>
                    <div className="tracker_cont">
                    <div className="tracker_emptydiv"><span className="tracker_coloreddiv"></span></div>
                    <div className="tracker_path">
                        <div className="tracker_check">
                            <div className="track_flow">
                            <IoIosCheckmarkCircle className="checked"/><span className="track_hor"></span>
                            </div>
                            <p className="track_movement2">In Ware house</p>
                        </div>
                        <div className="tracker_check">
                            <div className="track_flow">
                            <IoIosCheckmarkCircle className="checked"/><span className="track_hor"></span>
                            </div>
                            <p className="track_movement">In Transit</p>
                        </div>
                        <div className="tracker_check">
                            <div className="track_flow">
                            <IoIosCheckmarkCircle className="checked"/><span className="track_hor"></span>
                            </div>
                            <p className="track_movement">Custom Clearing</p>
                        </div>
                        <div className="tracker_check">
                            <div className="track_flow">
                            <IoIosCheckmarkCircle className="checked"/><span className="track_hor"></span>
                            </div>
                            <p className="track_movement">In destination Warehouse</p>
                        </div>
                        <div className="tracker_check">
                            <div className="track_flow">
                            <IoIosCheckmarkCircle className="checked"/><span className="track_hor"></span>
                            </div>
                            <p className="track_movement">Out for delivery</p>
                        </div>
                        <div className="tracker_check1">
                            <div className="track_flow">
                            <IoIosCheckmarkCircle className="checked"/>
                            </div>
                            <p className="track_movement1">Delivered</p>
                        </div>
                    </div>
                    {more ? <>
                    <div className="track_received">
                        <p>Received: <span className="tracker_bolder">22/06/2022</span></p>
                        <p>Lagos, Nigeria --> New York, United States</p>
                        <p>Expected Arrival: <span className="tracker_bolder">27/06/2022</span></p>
                    </div>
                    <div className="track_lastpos">
                    <p className="tracker_itemsqty">Items: <span className="tracker_bolder">2 Nike Shoes, 3 Wrist Watches, 1 Handbag<span className="trans_innerquan">Qty:23</span></span></p>
                    </div></>: null
}
                    </div>
                    </div>
                    <div className="tracker_arrow">
                    {more? <FiChevronUp className="trans_seemore" onClick={handleClick}/> :<FiChevronDown className="trans_seemore" onClick={handleClick}/>}
                    </div>
                </div>
               
               
            </div>
            </div>
            </div>
        </div>
    )
}

export default Transaction;