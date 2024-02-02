import styled from "styled-components";


const theme = {
    colors: {
      header: "#202022",
      primary: "#ff971d", //naranadzassta
      menu: "##f1f3f4",
      text: "#f1f3f4",
  
    }
}

export const StyledHeader = styled.div`
    
    background-color: ${theme.colors.header};
    
    width: 100%;
    
    .wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 13px;
    }

    .wrapper h2{
      padding-left: 15px;
      color: ${theme.colors.text};
    }

    .wrapper .admin{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
   
    .wrapper .admin img {
        width: 30px;
    }

    .wrapper .admin img:nth-child(2){
      margin-left: 10px;
    }

   

    .wrapper .admin img:nth-child(3){
      background-color: #fff;
      border-radius: 20px;
      margin-left: 20px;
      
    }
    
    .wrapper .admin .user{
      padding: 0 15px 0 10px;
    }

    .wrapper .admin .user h5{
      color: ${theme.colors.text};
    }

    .wrapper .admin .user p{
      color: ${theme.colors.primary}
    }
`