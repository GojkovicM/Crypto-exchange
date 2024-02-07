import React from "react";
import { StyledAccountSum } from "./AccountSum.styled";
import thunder from "../../assets/thunder.svg";
import arrow from "../../assets/Arrow.svg";

function AccountSum() {
  return (
    <StyledAccountSum>
      <p>Account Summary</p>
      <div className="wrap">
        <div className="card">
          <img src={thunder} alt="this week" />
          <p>This Week</p>
          <span>$3.45K</span>
          <span>+64%</span>
        </div>
        <div className="card">
          <img src={arrow} alt="whis month" />
          <p>This Month</p>
          <span>$3.45K</span>
          <span>+64%</span>
        </div>
        <div className="card">
          <img src={thunder} alt="this year" />
          <p>This Year</p>
          <span>$3.45K</span>
          <span>+64%</span>
        </div>
      </div>
    </StyledAccountSum>
  );
}

export default AccountSum;
