import React from "react";
import { StyledMostPopular } from "./Mostpopular.styled";
import bitcoin from "../../assets/Bitcoins/Bitcoin-3.svg";
import etherium from "../../assets/Bitcoins/Etherium-1.svg";
import litecoin from "../../assets/Bitcoins/LiteCoin-3.svg";
import arrow from "../../assets/UpArrow.png";

function MostPopular() {
  return (
    <StyledMostPopular>
      <div className="card">
        <div className="wrap">
          <img src={bitcoin} alt="bitcoin" />
          <p>BTC/USDT</p>
          <img src={arrow} alt="arrow" />
        </div>
        <p className="amount">35000$</p>
        <span className="percent">+ 0.8 %</span>
      </div>
      <div className="card">
        <div className="wrap">
          <img src={etherium} alt="etherium" />
          <p>ETH/USDT</p>
          <img src={arrow} alt="arrow" />
        </div>
        <p className="amount">35000$</p>
        <span className="percent">+ 0.8 %</span>
      </div>
      <div className="card">
        <div className="wrap">
          <img src={litecoin} alt="" />
          <p>LTC/USDT</p>
          <img src={arrow} alt="arrow" />
        </div>
        <p className="amount">35000$</p>
        <span className="percent">+ 0.8 %</span>
      </div>
    </StyledMostPopular>
  );
}

export default MostPopular;
