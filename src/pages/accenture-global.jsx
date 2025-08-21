import React from "react";
import "./accenture-global.css"
const Accenture = () => {
    return (
        <div className="page-container">
        <div className="background">
            <h1 className="global-recognition-text col-9 mx-auto">Global recognition and awards</h1>
        </div>
            <div className="cards-container">
                <div className="card leader-in-reinvention">
                    <h2 className="card-text">A Leader in Reinvention</h2>
                    <p className="card-description">Our Chair and CEO, Julie Sweet, is No. 11 on Fortune's 2025 Most Powerful People in Business; one of the TIME100 Most Influential People of 2024; and received the Anti-Defamation League's highest honor, the Courage Against Hate Award.</p>
                    <p className="card-para-2">Every day, Julie and our people demonstrate why Accenture is our clients’ reinvention partner of choice, with innovation and people at the center.​</p>
                </div>
                <div className="card great-place-to-work">
                    <h2 className="card-text">A Great Place to Work®</h2>
                    <p className="card-description">Ranked No. 6 on the Great Place To Work® World's Best Workplaces™ list.</p>
                    <p className="card-para-2">This recognition is based on feedback from our people—measuring their level of trust, pride and camaraderie at work.</p>
                </div>
                <div className="card top-consulting-firm">
                    <h2 className="card-text">The Top Consulting Firm</h2>
                    <h4 className="card-description">Earned the top spot among the World’s Best Management Consulting Firms.</h4>
                    <p className="card-para-2">Forbes recognized Accenture as the management consulting firm most recommended by consultants and clients, across industries and functional areas, around the world.</p>
                </div>
            </div>
        </div>
    )
}

export default Accenture;