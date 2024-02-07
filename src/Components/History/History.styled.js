import styled from "styled-components";

const theme = {
  colors: {
    background: "#202022",
    primary: "#ff971d", //naranadzassta
    text: "#f1f3f4",
    buttonBackground: "rgba(128, 128, 128)",
  },
};

export const StyledHistory = styled.div`
  padding: 1.5rem 1rem 0 1rem;
  background-color: ${theme.colors.background};
  border-radius: 5px;
  color: ${theme.colors.text};
  margin-top: 1.5rem;
  min-height: 535px;
  max-height: 535px;
  
  

  .wrapper .coin {
    display: flex;
    flex-direction: row;
    align-items: top;
    padding: 0.7rem 0.5rem;
    
  }

  .wrapper .coin .info {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  .wrapper .coin .info span{
    padding: 1rem 0;
  }
  
  .wrapper .coin .info .coin-name{
    font-size: 1.5rem;
  }

  .wrapper .coin img {
    height: 3rem;
  }
`;
