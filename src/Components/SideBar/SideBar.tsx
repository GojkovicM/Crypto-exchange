/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { StyledSidebar } from "./Sidebar.styled";
import logo from "../../assets/logo.svg";
import sidebarImg from "../../assets/sidebar-image.svg";

function SideBar() {
  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(false);

  const closeSidebar = () => {
    setIsActiveSidebar(!isActiveSidebar);
  };

  return (
    <StyledSidebar>
      <div className={isActiveSidebar ? "sidebar" : "sidebar close"}>
        <div className="header">
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>

            <div className="text header-text">
              <span className="name">oinExchangeX</span>
            </div>
          </div>
          <i
            className="bx bxs-right-arrow-square toggle"
            onClick={() => closeSidebar()}
          ></i>
        </div>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-user icon"></i>
                  <span className="text nav-text">User</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-check-shield icon"></i>
                  <span className="text nav-text">Authentication</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-cog icon"></i>
                  <span className="text nav-text">Table</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-info-circle icon"></i>
                  <span className="text nav-text">Icons</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-alarm-exclamation icon"></i>
                  <span className="text nav-text">Error</span>
                </a>
              </li>
            </ul>
            <div className="sidebar-feature">
              <img className="sidebar-img" src={sidebarImg} alt="" />
              <p>Be more secure with Pro Features </p>

              <button>Upgrade Now!</button>
            </div>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
}

export default SideBar;
