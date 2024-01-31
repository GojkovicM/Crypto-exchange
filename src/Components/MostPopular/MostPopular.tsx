import React from "react";
import { StyledMostPopular } from "./Mostpopular.styled";

function MostPopular() {
  return (
    <StyledMostPopular>
      <div className="card">
        <div className="wrap">
          <img src="" alt="" />
          <p>btc/usdt</p>
          <span>/</span>
        </div>
        <p>35000$</p>
        <p>+ 0.8 %</p>
      </div>
      <div className="card">
        <div className="wrap">
          <img src="" alt="" />
          <p>btc/usdt</p>
          <span>/</span>
        </div>
        <p>35000$</p>
        <p>+ 0.8 %</p>
      </div>
      <div className="card">
        <div className="wrap">
          <img src="" alt="" />
          <p>btc/usdt</p>
          <span>/</span>
        </div>
        <p>35000$</p>
        <p>+ 0.8 %</p>
      </div>
    </StyledMostPopular>
  );
}

export default MostPopular;
