import React from "react";
import { StyledFooter } from "./Footer.styled";

function Footer() {
    return ( 
            <StyledFooter>
                    <div className="wrap">
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>

                    <div>
                        <p>2024 Made by Marko Gojkovic <span>Zentrix Lab</span></p>
                    </div>
            </StyledFooter>
     );
}

export default Footer;