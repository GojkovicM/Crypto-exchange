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
  /* justify-content: space-between; */
  
  color: ${theme.colors.text};

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.colors.background};
    padding: 0.5rem 1rem 0.5rem 1rem;
    /* margin-right: 20px; */
    text-wrap: nowrap;
    border-radius: 5px;
  }

  .ant-space {
    width: 7rem;
    margin-right: 0.5rem;
  }

  .wrapper .ant-select-selector {
    background-color: transparent;
    border: none;
    color: white;
  }

  .wrapper h3 {
    font-style: italic;
    font-size: 1.6rem;
  }

  .wrapper div .orange {
    color: ${theme.colors.primary};
  }

  .wrapper div,
  .wrapper h3 {
    padding-right: 3rem;
  }

  .wrapper .fuse {
    padding-right: 2rem;
  }

  .wrapper .plane {
    background-color: rgba(128, 128, 128, 0.2);
  }

  .wrapper .coin {
    padding-right: 3rem;
  }

  .wrapper .coin,
  .wrapper .fuse,
  .wrapper .plane {
    height: 3rem;
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
    padding: 0.7rem 1.5rem 0.7rem 2rem;
    text-wrap: nowrap;
    margin-left: 3rem;
    
  }
    

 
`;
