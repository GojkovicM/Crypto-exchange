import React from "react";
import { StyledQuickTrade } from "./QuickTrade.styled";
import { Select, Space } from "antd";

function QuickTrade() {
  return (
    <StyledQuickTrade>
      <div className="wrapper">
        <h2>Quick Trade</h2>
        <Space wrap>
          <Select
            defaultValue={`BTC/USD`}
            options={[
              { value: "Marko", label: "Marko" },
              { value: "Darko", label: "Darko" },
              { value: "Zarko", label: "Zarko" },
            ]}
          />
        </Space>
      </div>
      <div className="input">
        <span>Amount BTC</span> <input type="number" />
      </div>
      <div className="text">
        <span>Price BPL</span> <p></p>
      </div>
      <div className="text">
        <span>Total BPL</span> <p></p>
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
