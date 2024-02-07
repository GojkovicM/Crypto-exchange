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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
  padding: 1.3rem 1rem 1.3rem 1rem;
  /* margin-top: 1.5rem; */
  border-radius: 5px;
  height: 100%;

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  .wrapper .ant-select-selector {
    background-color: rgba(128, 128, 128, 0.4);
    padding: 0 2rem;
    color: ${theme.colors.text};
    border: none;
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
    padding: 0.5rem;
  }
  button:nth-child(2) {
    background-color: red;
    color: white;
    width: 48%;
    border: none;
  }

  .input,
  .text {
    width: 100%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    text-wrap: nowrap;
    border-radius: 0.6rem;
  }

  .input span {
    border-right: 1px solid white;
    font-size: 1.3rem;
    padding: 0.3rem;
    text-align: center;
    width: 12rem;
    background-color: rgba(128, 128, 128, 0.2);
  }

  .text p {
    width: 100%;
    padding: 0.7rem;
  }

  .text span {
    border-right: 1px solid white;
    font-size: 1.3rem;
    padding: 0.3rem;
    width: 12rem;
    text-align: center;
  }

  .input input {
    width: 100%;
    background-color: rgba(128, 128, 128, 0.2);
    border: none;
    color: white;
    padding: 0.7rem;
    font-size: 1rem;
  }
`;
