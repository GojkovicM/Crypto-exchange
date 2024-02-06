import React from "react";
import { StyledMostPopular } from "./Mostpopular.styled";

function MostPopular() {
  return (
    <StyledMostPopular>
      <div className="card">
        <div className="wrap">
        <img src="https://www.svgrepo.com/show/484569/coin.svg" alt="" />
          <p>BTC/USDT</p>
          <span>-</span>
        </div>
        <p className="amount">35000$</p>
        <span className="percent">+ 0.8 %</span>
      </div>
      <div className="card">
        <div className="wrap">
        <img src="https://www.svgrepo.com/show/484569/coin.svg" alt="" />
          <p>BTC/USDT</p>
          <span>-</span>
        </div>
        <p className="amount">35000$</p>
        <span className="percent">+ 0.8 %</span>
      </div>
      <div className="card">
        <div className="wrap">
        <img src="https://www.svgrepo.com/show/484569/coin.svg" alt="" />
          <p>BTC/USDT</p>
          <span>-</span>
        </div>
        <p className="amount">35000$</p>
        <span className="percent">+ 0.8 %</span>
      </div>
    </StyledMostPopular>
  );
}

export default MostPopular;
