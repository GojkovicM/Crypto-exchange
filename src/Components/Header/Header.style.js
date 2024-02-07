import styled from "styled-components";

const theme = {
  colors: {
    header: "#202022",
    primary: "#ff971d", //naranadzassta
    menu: "##f1f3f4",
    text: "#f1f3f4",
  },
};

export const StyledHeader = styled.div`
  background-color: ${theme.colors.header};

  
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.03rem;

  h2 {
    padding-left: 1rem;
    color: ${theme.colors.text};
    font-size: 2rem;
  }

  .admin {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .admin img {
    width: 2rem;
  }

  .admin img:nth-child(2) {
    margin-left: 0.7rem;
  }

  .admin img:nth-child(3) {
    background-color: #fff;
    border-radius: 1.2rem;
    margin-left: 1.3rem;
  }

  .admin .user {
    padding: 0 1rem 0 0.7rem;
  }

  .admin .user p {
    color: ${theme.colors.text};
  }

  .admin .user span {
    color: ${theme.colors.primary};
  }
`;
