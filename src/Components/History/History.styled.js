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
  padding: 1.5rem 1rem 1.5rem 1rem;
  background-color: ${theme.colors.background};
  border-radius: 5px;
  color: ${theme.colors.text};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .coin {
    display: flex;
    flex-direction: row;
    align-items: start;
  }

  .coin .info {
    display: flex;
    flex-direction: column;
    

    padding: 0 1.5rem 0 1rem;
    width: 25rem;
  }

  .coin .info span {
    padding: 1rem 0;
  }

  .coin .info .coin-name {
    font-size: 1.5rem;
  }

  .coin img {
    height: 2rem;
  }

  span {
    font-size: 0.8rem;
  }

  .coin .text {
    text-wrap: wrap;
    font-size: 0.7rem;
  }
`;
