import React from "react";
import { StyledHeader } from "./Header.style";
import bell from "../../images/bell.svg"
import letter from "../../images/letter.svg"


function Header() {
    return ( 
        <StyledHeader>
            <div className="wrapper">
                <h2>Dashboard</h2>
                    <div className="admin">
                        <img src={bell} alt="" />
                        <img src={letter} alt="" />
                        <img src="https://www.svgrepo.com/show/532363/user-alt-1.svg" alt="" />
                          <div className="user">
                              <h5>Pera Detlic</h5>
                              <p>super admin</p>
                          </div>
                    </div>
            </div>
        </StyledHeader>
     );
}

export default Header;