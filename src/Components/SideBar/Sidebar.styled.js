import styled from "styled-components";

const theme = {
  colors: {
    sidebar: "#202022",
    primary: "#ff971d", //naranadzassta
    text: "#f1f3f4",
    background: "rgba(128, 128, 128, 0.2)",
  },
  transition: {
    tran02: "all 0.2s ease",
    tran03: "all 0.3s ease",
    tran04: "all 0.4s ease",
    tran05: "all 0.5s ease",
  },
};

export const StyledSidebar = styled.div`
  .sidebar {
    min-height: 100%;
    padding: 10px;
    width: 250px;
    transition: ${theme.transition.tran05};
    background-color: ${theme.colors.sidebar};
  }

  .sidebar.close {
    width: 80px;
  }

  .sidebar.close .text {
    opacity: 0;
  }

  .sidebar.close .sidebar-feature {
    opacity: 0;
    transition: ${theme.colors.tran05};
  }

  .sidebar .sidebar-feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.background};
    margin-top: 1rem;
    min-width:14.4rem;
    transition: ${theme.colors.tran05};
    padding: 0.5rem 0.2rem 0.5rem 0.2rem;
    
  }

  .sidebar .sidebar-feature p {
    font-size: 1.8rem;
    text-align: center;
    color: ${theme.colors.text};
    padding: 1rem 0 1rem 0;
    
  }

  .sidebar .sidebar-feature button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    padding: 0.7rem;
    border: none;
    border-radius: 1rem;
  }

  .sidebar .text {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.text};
    transition: ${theme.transition.tran03};
    opacity: 1;
  }

  .sidebar .image {
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar .header {
    position: relative;
    border-bottom: 1px solid #19191a;
  }

  .sidebar .menu {
    margin-top: 20px;
  }
  .sidebar li {
    height: 50px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
  }

  .sidebar li .icon {
    font-size: 20px;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar li .icon,
  .sidebar li .text {
    color: ${theme.colors.text};
    transition: ${theme.transition.tran02};
  }

  .sidebar .header .image-text {
    display: flex;
    align-items: center;
  }

  .sidebar .header .image-text img {
    width: 50px;
  }

  .sidebar .header .image-text .name {
    color: ${theme.colors.text};
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .sidebar .header .toggle {
    position: absolute;
    top: 0.76rem;
    right: -25px;
    height: 30px;
    width: 30px;
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(0) rotate(180deg);
    transition: ${theme.transition.tran03};
    border-radius: 20px;
  }

  .sidebar.close .header .toggle {
    transform: translateY(0);
  }

  .sidebar li a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 6px;
    width: 100%;
    transition: ${theme.transition.tran04};
  }

  .sidebar li a:hover {
    background-color: ${theme.colors.primary};
  }

  .sidebar li a:hover .icon,
  .sidebar li a:hover .text {
    color: ${theme.colors.sidebar};
  }

  .sidebar .menu-bar {
    height: calc(100% - 50px);
  }

  .menu-bar .mode {
    border-radius: 6px;
    transition: ${theme.transition.tran03};
  }

  .menu-bar .mode i {
    position: absolute;
  }
`;
