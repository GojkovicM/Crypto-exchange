import React from "react";
import { StyledAccountSum } from "./AccountSum.styled";
import thunder from "../../images/thunder.svg";
import arrow from "../../images/left-up.svg";

function AccountSum() {
  return (
    <StyledAccountSum>
      <h3>Account Summary</h3>
      <div className="wrap">
        <div className="card">
          <img src={thunder} alt="" />
          <p>This Week</p>
          <span>$3.45K</span>
          <span>+64%</span>
        </div>
        <div className="card">
          <img src={arrow} alt="" />
          <p>This Month</p>
          <span>$3.45K</span>
          <span>+64%</span>
        </div>
        <div className="card">
          <img src={thunder} alt="" />
          <p>This Year</p>
          <span>$3.45K</span>
          <span>+64%</span>
        </div>
      </div>
    </StyledAccountSum>
  );
}

export default AccountSum;
