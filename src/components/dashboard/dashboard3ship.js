import React, {useState} from "react";
import Pricing from "./dashboardpricing";
import Car from "./dashboardpricingcar";
import Shipped from "./dashboardpricingshipped";

const Dashprice = () =>{

    const [step, setStep] = useState("Pricing");

    const handleform1 =() => {
        setStep("Pricing")
    }

    const handleform2 = () =>{
        setStep("Pricingshipped")
    }

    const handleform3 = () =>{
        setStep("Pricingcar")
    }

    switch(step){
        case "Pricing":
            return (<Pricing handleform2={handleform2} handleform3={handleform3} />)
        case "Pricingshipped":
            return (<Shipped handleform1={handleform1} handleform3={handleform3} />)
        case "Pricingcar":
            return (<Car handleform2={handleform2} handleform1={handleform1} />)
    }
}

export default Dashprice;