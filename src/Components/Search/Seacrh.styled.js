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
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    height: calc(100% - 1.5rem);
    padding: 1rem;
    background-color: ${theme.colors.background};
   

   
    
    input{
        margin-bottom: 2rem;
    }
    
    img{
       height: 30rem ;
    }
`;
