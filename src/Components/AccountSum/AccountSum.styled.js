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
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  padding: 1.3rem 1rem 1.3rem 1rem;
  color: ${theme.colors.text};
  border-radius: 5px;
  height: 100%;
  
  
  
 

  h2 {
    padding-bottom: 1rem;
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
      justify-content: space-around;
      background-color: ${theme.colors.buttonBackground};
      width: 32%;

      p {
        padding: 1rem;
        font-size: 1rem;
      }

      span {
        padding: 1rem;
      }

      span:nth-child(3) {
        font-size: 1.6rem;
      }

      span:nth-child(4) {
        font-size: 1rem;
      }
    }

    img {
      height: 5rem;
      background-color: ${theme.colors.buttonBackground};
      margin-top: 1rem;
    }
  }
`;
