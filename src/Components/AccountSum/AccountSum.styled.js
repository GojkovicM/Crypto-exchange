import styled from "styled-components";

const theme = {
  colors: {
    background: "#202022",
    primary: "#ff971d", //naranadzassta
    text: "#f1f3f4",
    buttonBackground: "rgba(128, 128, 128, 0.2)",
  },
};

export const StyledAccountSum = styled.div`
  background-color: ${theme.colors.background};
  width: 47%;
  padding: 1.3rem 1rem 1.3rem 1rem;
  margin-top: 1.3rem;
  color: ${theme.colors.text};

  h3{
    padding-bottom: 1.3rem;
  }

  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* padding-top: 1rem; */
    

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around ;
      background-color: ${theme.colors.buttonBackground};
      width:30%;
      
     
      
      p, span {
        padding: 1rem;
      }
      
    }

    img {
      height: 5rem;
      background-color: ${theme.colors.buttonBackground};
      margin-top: 1rem;
    }
  }
`;
