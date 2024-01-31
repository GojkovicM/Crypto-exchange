import React from "react";
import SideBar from "../../Components/SideBar/SideBar.tsx";
import Header from "../../Components/Header/Header.tsx";
import NewCrypto from "../../Components/AddNewCrypto/NewCrypto.tsx";
import { Row, Col } from "antd";
import { StyledHomepage } from "./Homepage.styled.js";
import MostPopular from "../../Components/MostPopular/MostPopular.tsx";
import QuickTrade from "../../Components/QuickTrade/QuickTrade.tsx";
import AccountSum from "../../Components/AccountSum/AccountSum.tsx";
import Search from "../../Components/Search/Search.jsx";

function HomePage() {
  return (
    <StyledHomepage>
      <SideBar></SideBar>
      <div className="main">
        <Header></Header>
        <NewCrypto></NewCrypto>

        <div className="container-fluid">
          <Row gutter={[16, 16]}>
            <Col offset={3} span={15}>
              <MostPopular></MostPopular>
              <div className="wraper">
                <QuickTrade></QuickTrade>
                <AccountSum></AccountSum>
              </div>
            </Col>
            <Col span={6}>
              <Search></Search>
            </Col>
          </Row>
        </div>
      </div>
    </StyledHomepage>
  );
}

export default HomePage;
