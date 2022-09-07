import vector from "../../assets/images/Vector.svg";
import yellowbox from "../../assets/images/yellowbox.svg";
import harddisk from "../../assets/images/harddisk.svg";
import redcar from "../../assets/images/car.svg";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const Draft = () => {
    return(
        <div className="pricing">
            <div className="pricingflex">
            <Link to="/dashboard"><button className="return_but" ><img src={vector} alt="back" /></button></Link>
            <div className="pricingholder">
                <div className="draft_details">
                    <p className="draftsaved"> Draft - Saved Items</p>
                    <div>
                        <div className="boughtitem">
                            <p className="draft_top">Saved Items in # Ship for me > Buy Carpart</p>
                            <p  className="draft_top2">june 20th, 2022 at 10AM</p>
                        </div>
                        <div className="draft_items">
                            <div className="item_del">
                                <p className="item_name">ITEM NAME</p>
                                <div className="edit_del">
                                    <MdEdit />
                                    <AiFillDelete className="delete_draft"/>
                                </div>
                            </div>
                            <ul >
                                <li className="draft_list">Car Exhaust 2 / www.amazon.com</li>
                                <li className="draft_list">Engine Part / www.KK12.com</li>
                                <li className="draft_list">Side Mirror / www.KK12.com</li>
                                <li className="draft_list">Tier / www.KK12.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Draft;