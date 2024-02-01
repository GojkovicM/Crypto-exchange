import React, { useState } from "react";
import { StyledSidebar } from "./Sidebar.styled";



function SideBar() {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false);

  const closeSidebar = () => {
    setIsActiveSidebar(!isActiveSidebar);
  };



  return (
    <StyledSidebar >
      <div className={isActiveSidebar? "sidebar" : "sidebar close"}>
        <div className="header">
          <div className="image-text">
            <span className="image">
              <img
                src="https://www.svgrepo.com/show/474519/orange.svg"
                alt="logo"
              />
            </span>

            <div className="text header-text">
              <span className="name">BitExchangeX</span>
            </div>
          </div>
          <i className="bx bxs-right-arrow-square toggle" onClick={() => closeSidebar()} ></i>
        </div>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                    <i className='bx bx-home-alt icon' ></i>
                    <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                    <i className='bx bx-user icon'></i>
                    <span className="text nav-text">User</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <i className='bx bx-check-shield icon' ></i>
                    <span className="text nav-text">Authentication</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                    <i className='bx bx-cog icon' ></i>
                    <span className="text nav-text">Table</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <i className='bx bx-info-circle icon' ></i>
                    <span className="text nav-text">Icons</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <i className='bx bx-alarm-exclamation icon' ></i>
                    <span className="text nav-text">Error</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
}

export default SideBar;
