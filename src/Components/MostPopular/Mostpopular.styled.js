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
    border: 1px solid black;
    background-color: ${theme.colors.background};
    border: none;
    border-radius: 5px;
    /* margin-right: 5rem; */
    padding: 1.7rem 2rem 1.7rem 2rem;
    width: 30%;
  }

  .card .wrap {
    display: flex;
    flex-direction: row;

    align-items: center;
    padding: 1rem;
  }

  .card .wrap img {
    height: 2.5rem;
    padding-right: 1.5rem;
  }

  .card p {
    font-size: 2rem;
    padding: 1rem;
  }

  .card .percent {
    padding: 1rem;
  }

  .card h3 {
    padding-right: 1.5rem;
  }
`;
