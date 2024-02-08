import React from "react";
import { StyledNewCrypto } from "./NewCrypto.styled";
import fuse from "../../images/fuse.svg";
import plane from "../../images/plane.svg"
import coin from "../../assets/Bitcoin-3.svg"

import { Select, Space } from "antd";



function NewCrypto() {
  return (
    <StyledNewCrypto>
      <div className="wrapper">
        <img
          className="coin"
          src={coin}
          alt="coin"
        />

        <Space wrap >
          <Select 
            defaultValue="BTC/USD"
            options={[
              { value: "Marko", label: "Marko" },
              { value: "Darko", label: "Darko" },
              { value: "Zarko", label: "Zarko" },
            ]}
          />
        </Space>

        <Space wrap >
          <Select 
            defaultValue="BTC/USD"
            options={[
              { value: "Marko", label: "Marko" },
              { value: "Darko", label: "Darko" },
              { value: "Zarko", label: "Zarko" },
            ]}
          />
        </Space>

        <div className="data">
          <p className="orange">30000.2781</p>
          <p>25000</p>
        </div>
        <div className="data">
          <p className="orange">122222220%</p>
          <p>30 changes</p>
        </div>
        <div className="data">
          <p>37000.01</p>
          <p>24 high</p>
        </div>
        <div className="data">
          <p>36000</p>
          <p>24 high low</p>
        </div>
        <div className="data">
          <p>37000</p>
          <p>24h volume atc</p>
        </div>
        <h3>fx</h3>
        <img className="fuse" src={fuse} alt="" />
        <img className="plane" src={plane} alt="" />
      </div>
      <div className="button">
        <button>Buy/Sell</button>
        <button>+ Add New Crypto</button>
      </div>
    </StyledNewCrypto>
  );
}

export default NewCrypto;
