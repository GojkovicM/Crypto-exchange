import React from "react";
import { StyledHeader } from "./Header.style";
import bell from "../../images/bell.svg"
import letter from "../../images/letter.svg"
import user from "../../assets/person.svg"


function Header() {
    return ( 
        <StyledHeader>
            
                <h2>Dashboard</h2>
                    <div className="admin">
                        <img src={bell} alt="notification" />
                        <img src={letter} alt="inbox" />
                        <img src={user} alt="user" />
                          <div className="user">
                              <p>Pera Detlic</p>
                              <span>super admin</span>
                          </div>
                    </div>
            
        </StyledHeader>
     );
}

export default Header;