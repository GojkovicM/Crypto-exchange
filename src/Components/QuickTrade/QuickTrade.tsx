import React from "react";
import { StyledQuickTrade } from "./QuickTrade.styled";

function QuickTrade() {
  return (
    <StyledQuickTrade>
      <div className="wrapper">
        <h3>Quick Trade</h3>
        <ul>
          {" "}
          Izaberi:
          <img src="" alt="" />
          <div className="content">
            <li>marko</li>
            <li>branko</li>
            <li>darko</li>
          </div>
        </ul>
      </div>
      <div className="input">
        <span >Amount BTC</span> <input type="text" />
      </div>
      <div className="input">
        <span>Amount BTC</span> <input type="text" />
      </div>
      <div className="input">
        <span>Amount BTC</span> <input type="text" />
      </div>
      <div className="button">
        <button>
          Buy
          <img src="" alt="" />
        </button>
        <button>
          Sell
          <img src="" alt="" />
        </button>
      </div>
    </StyledQuickTrade>
  );
}

export default QuickTrade;
