import styled from "styled-components";

const theme = {
  colors: {
    background: "#202022",
    primary: "#ff971d", //naranadzassta
    text: "#f1f3f4",
    buttonBackground: "rgba(128, 128, 128, 0.4)",
  },
};

export const StyledRecentTrading = styled.div`
 
  background-color: ${theme.colors.background};
  padding: 1.5rem 1rem 0 1rem;
  color: ${theme.colors.text};
  border-radius: 5px;
  font-size: 1rem;
  
  

  .wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  

  .wrap span {
    font-size: 0.7rem;
  }
  .wrap .buttons button {
    padding: 0.4rem 1rem;
    font-size: 1rem;
    border: none;
    background-color: ${theme.colors.buttonBackground};
    color: ${theme.colors.text};
  }

  .wrap .buttons button:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }

  .wrap .buttons .isActive {
    background-color: rgba(128, 128, 128, 0.1);
  }

  .table {
    overflow-y: auto;
    scrollbar-width: thin;
    padding-top: 1rem;
    text-align: center;
    text-wrap: nowrap;
  }
  .table img {
    height: 1rem;
  }

  .table tr {
    width: 100%;
    border-bottom: 1px solid white;
  }

  .table tr th,
  .table tr td {
    padding: 1rem 7rem 1rem 0;
    border-bottom: 1px solid white;
  }

  .table .last {
    border: none;
  }

  .table td button {
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: 0.3rem;
    color: ${theme.colors.text};
    padding: 0.2rem;
  }
`;
