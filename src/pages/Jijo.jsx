import React from "react";
import Card from "../components/Card";
import "../components/Card.css"
import "./jijo.css"

const Jijo = () => {
    return (
        <div>
            <h1 className="title">Why Choose Jijo’s ?</h1>
            <div className="container cards">
            <Card className="card-animate-0 shadow-sm" >
                    <img src="/Pictures/PremiumQuantity.svg" alt="" style={{height:"50px", width:"50px" }} />
                    <h2 className="card-head">Premium Quality Ingredients</h2>
                    <p className="card-desc">At JIJO, we source only the finest ingredients to ensure our Snack is of the highest quality.</p>
            </Card>

            <Card className="card-animate-1 shadow-sm" >
                    <img src="/Pictures/WideVariety.svg" alt="" style={{ height: "40px", width: "40px" }} />
                    <h2 className="card-head">Wide Variety</h2>
                    <p className="card-desc">From spicy to sweet, our wide range of Snack offers something for every palate.</p>
            </Card>   
            
            <Card className="card-animate-2 shadow-sm" >
                    <img src="/Pictures/CustomerSatisfaction.svg" alt="" style={{ height: "40px", width: "40px" }} />
                    <h2 className="card-head">Customer Satisfaction</h2>
                    <p className="card-desc">At JIJO, we source only the finest ingredients to ensure our Snack is of the highest quality.</p>
            </Card>    

            </div>
        </div>
    )
}

export default Jijo