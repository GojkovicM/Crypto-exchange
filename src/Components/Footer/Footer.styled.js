import styled from "styled-components";

const theme = {
  colors: {
    header: "#202022",
    primary: "#ff971d", //naranadzassta
    menu: "##f1f3f4",
    text: "#f1f3f4",
  },
};

export const StyledFooter = styled.div`

background-color: ${theme.colors.header};
color: ${theme.colors.text};
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 1.3rem 1rem;
border-left: 1px solid #19191a ;

  
.wrap{
  width: 13%;
  display: flex;
  justify-content: space-between;
}

span{
  color: ${theme.colors.primary};
}
`