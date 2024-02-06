import styled from "styled-components";

const theme = {
  colors: {
    background: "#202022",
    primary: "#ff971d", //naranadzassta
    text: "#f1f3f4",
  },
};

export const StyledMostPopular = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.colors.text};
  margin-top: 1.5rem;

  .card {
    background-color: ${theme.colors.background};
    border: none;
    border-radius: 5px;
    padding: 1.5rem;
    width: 30%;
  }

  .card .wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 1rem;
  }

  .card .wrap img {
    height: 2rem;
    padding-right: 1.5rem;
  }

  .card .wrap p {
    font-size: 1.2rem;
    padding-right: 1.5em;
    
  }

  .card .amount {
    font-size: 2rem;
    padding-bottom: 1rem;
  }

  .card .percent{
    font-size: 1rem;
  }
`;
