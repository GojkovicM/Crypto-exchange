import styled from "styled-components";

const theme = {
  colors: {
    background: "#202022",
    primary: "#ff971d", //naranadzassta
    text: "#f1f3f4",
    buttonBackground: "rgba(128, 128, 128)",
  },
};

export const StyledQuickTrade = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.text};
  padding: 1.3rem 1rem 1.3rem 1rem;
  margin-top: 1.3rem;
  height: 18rem;

  div {
    padding: 0.7rem 0 0.7rem 0;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ul {
      background-color: ${theme.colors.buttonBackground};
      padding: 0.7rem;

      .content {
        position: absolute;
      }
    }

    li {
      display: none;
    }
    ul:hover li {
      display: block;
      background-color: ${theme.colors.buttonBackground};
      z-index: 1;
    }
  }
  .button {
    display: flex;
    justify-content: space-between;
  }
  button:first-child {
    background-color: green;
    color: white;
    width: 48%;
    border: none;
    padding: 0.3rem;
  }
  button:nth-child(2) {
    background-color: red;
    color: white;
    width: 48%;
    border: none;
  }
`;
