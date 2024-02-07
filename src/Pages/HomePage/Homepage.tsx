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
import RecentTrading from "../../Components/RecentTrading/RecentTrading.tsx";
import History from "../../Components/History/History.jsx";

function HomePage() {
  return (
    <StyledHomepage>
      <SideBar></SideBar>
      <div className="main">
        <Header></Header>
        <div className="container-wrapper">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div className="container-fluid">
                <Row gutter={[16, 16]}>
                  <Col offset={1} span={23}>
                    <NewCrypto></NewCrypto>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col offset={1} span={17}>
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
                <Row gutter={[16, 16]}>
                  <Col offset={1} span={17}>
                    <RecentTrading></RecentTrading>
                  </Col>
                  <Col span={6}>
                    <History></History>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </StyledHomepage>
  );
}

export default HomePage;
