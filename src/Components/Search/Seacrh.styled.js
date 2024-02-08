import styled from "styled-components";

const theme = {
  colors: {
    background: "#202022", //komponente
    primary: "#ff971d", //naranadzassta
    text: "#f1f3f4",
  },
  transition: {
    tran02: "all 0.2s ease",
    tran03: "all 0.3s ease",
    tran04: "all 0.4s ease",
    tran05: "all 0.5s ease",
  },
};

export const StyledSearch = styled.div`
  
  display: flex;
  flex-direction: column;
  padding: 1.3rem 1rem 1.3rem 1rem;
  background-color: ${theme.colors.background};
  border-radius: 5px;
  height: 100%;
  
  
  
 

  input {
    border: none;
    background-color: rgba(128, 128, 128, 0.2);
    color: ${theme.colors.text};
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  img{
    max-height: 30rem;
  }
 
`;
