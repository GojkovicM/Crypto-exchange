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
  align-items: center; 
  justify-content: space-between;
  color: ${theme.colors.text};
  
  
 
  


  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.colors.background};
    padding: 5px;
    margin-right: 20px;
    text-wrap: nowrap;
  }

  .wrapper ul .content {
    display: none;
    position: absolute;
    bottom: -95px;
    right: 1295px;
  }

  .wrapper ul .content-two {
    display: none;
    position: absolute;
    bottom: -95px;
    right: 1175px;
  }

  .wrapper ul:hover .content-two {
    display: block;
    z-index: 1;
  }

  .wrapper ul .content-two li {
    background-color: ${theme.colors.background};
    list-style: none;
    padding: 7px 40px 7px 40px;
    text-align: center;
    border-bottom: 1px solid black;

  }

  .wrapper ul .content li {
    background-color: ${theme.colors.background};
    list-style: none;
    padding: 7px 40px 7px 40px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  .wrapper ul:hover .content {
    display: block;
    z-index: 1;
  }

  .wrapper h3 {
    font-style: italic;
    font-size: 18px;
  }

  .wrapper ul img {
    height: 7px;
    margin-left: 3px;
  }

  .wrapper div .orange {
    color: ${theme.colors.primary};
  }

  .wrapper ul,
  .wrapper div,
  .wrapper h3 {
    padding: 5px;
    padding-right: 50px;
  }

  .wrapper .coin,
  .wrapper .fuse {
    padding-right: 50px;
  }

  .wrapper .plane {
    background-color: rgba(128, 128, 128, 0.2);
  }

  .wrapper .coin,
  .wrapper .fuse,
  .wrapper .plane {
    height: 40px;
  }

  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .button button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    border: none;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    text-wrap: nowrap;
    margin-left: 40px;
  }
`;
