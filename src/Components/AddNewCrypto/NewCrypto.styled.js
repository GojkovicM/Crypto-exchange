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

export const StyledNewCrypto = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: ${theme.colors.text};

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.background};
    padding: 0.5rem;
    width: 100%;
    text-wrap: nowrap;
    border-radius: 5px;
  }

  .ant-space {
    width: 5rem;
    margin-right: 1rem;
  }

  .ant-select {
    width: 6rem;
  }

  .wrapper .ant-select-selector {
    background-color: transparent;
    border: none;
    color: white;
    width: 6rem;
  }

  .wrapper .ant-select .ant-select-arrow {
    color: ${theme.colors.text};
  }

  .wrapper h3 {
    font-style: italic;
    font-size: 1.6rem;
  }

  .wrapper .orange {
    color: ${theme.colors.primary};
  }

  .wrapper .plane {
    background-color: rgba(128, 128, 128, 0.2);
  }

  .wrapper .coin,
  .wrapper .fuse,
  .wrapper .plane {
    height: 3rem;
  }

  .button {
    display: flex;
    flex-direction: row;
  }

  .button button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    border: none;
    border-radius: 5px;
    padding: 0.7rem 1.5rem 0.7rem 1.5rem;
    margin-left: 3rem;
    text-wrap: nowrap;
  }
`;
