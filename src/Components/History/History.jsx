import React from "react";
import { StyledHistory } from "./History.styled";
import bitcoin from "../../assets/Bitcoins/Bitcoin-3.svg";
import etherium from "../../assets/Bitcoins/Etherium-1.svg";
import litecoin from "../../assets/Bitcoins/LiteCoin-3.svg";


function History() {
    return (  
        <StyledHistory>
            <h2>History</h2>
            
                <div className="coin">
                    <img src={bitcoin} alt="" />
                    <div className="info">
                        <p className="coin-name">Bitcoin</p>
                        <span>+10.00%</span>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <p>11/02/2024</p>
                </div>
                <div className="coin">
                    <img src={etherium} alt="" />
                    <div className="info">
                        <p className="coin-name">Bitcoin</p>
                        <span>+10.00%</span>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <p>11/02/2024</p>
                </div>
                <div className="coin">
                    <img src={litecoin} alt="" />
                    <div className="info">
                        <p className="coin-name">Bitcoin</p>
                        <span>+10.00%</span>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <p>11/02/2024</p>
                </div>
           

        </StyledHistory>
    );
}

export default History;