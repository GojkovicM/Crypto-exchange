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
import Footer from "../../Components/Footer/Footer.tsx";

function HomePage() {
  return (
    <StyledHomepage>
      <SideBar></SideBar>
        <div className="middle">
         <Header></Header>
         <div className="main">

        <Row className="first-row" gutter={[16, 16]}>
          <Col offset={1} span={23}>
            <NewCrypto></NewCrypto>
          </Col>
        </Row>
        <Row className="second-row" gutter={[16, 16]}>
          <Col offset={1} span={17}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <MostPopular></MostPopular>
              </Col>
            </Row>
            <Row className="subrow" gutter={[16, 16]}>
              <Col span={12}>
                <QuickTrade></QuickTrade>
              </Col>
              <Col span={12}>
                <AccountSum></AccountSum>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Search></Search>
          </Col>
        </Row>

        <Row className="third-row" gutter={[16, 16]}>
          <Col offset={1} span={17}>
            <RecentTrading></RecentTrading>
          </Col>
          <Col span={6}>
            <History></History>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
    </StyledHomepage>
  );
}

export default HomePage;
