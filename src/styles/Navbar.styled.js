import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 0 50px;

  .nav-links {
    display: flex;
    order: 3;
    justify-content: center;
    padding: 20px 0px 2px 120px;
    background: hsl(0, 0%, 100%, 0.1);
    backdrop-filter: blur(5px);

    li a {
      display: flex;
      gap: 3px;
      font-size: 16px;
      padding-bottom: 15px;
      margin-right: 80px;
      color: ${({ theme }) => theme.colors.grayishBlue};
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: border 0.3s ease-in;
      .link-num {
        letter-spacing: 1px;
        font-size: 16px;
      }
      .link-name {
        letter-spacing: 2px;
      }
      &:hover {
        border-color: gray;
      }
      &.active {
        color: ${({ theme }) => theme.colors.white};
        border-color: white;
      }
    }
  }
  .menu-button {
    display: none;
  }
  .close-button {
    display: none;
  }
  &::after {
    content: "";
    position: relative;
    background: gray;
    right: -5%;
    height: 1px;
    width: 33%;
    order: 2;
    margin-right: -10px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    .logo {
      img {
        width: 90%;
      }
    }
    &::after {
      display: none;
    }
    .nav-links {
      padding: 20px 30px 2px;
      padding-right: 0;
      li a {
        .link-num {
          display: none;
        }
        .link-name {
          font-size: 19px;
          letter-spacing: 4px;
        }
      }
    }
  }

  @media (max-width: 420px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px 0;
    .menu-button {
      display: block;
      position: relative;
      cursor: pointer;
    }

    .nav-links {
      position: fixed;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      top: 0;
      right: 0;
      z-index: -1;
      width: 70%;
      min-height: 100vh;
      backdrop-filter: blur(20px);
      transform: translateX(100%);
      transition: all 0.3s ease-in-out;

      &.open {
        transform: translateX(0);
        z-index: 1;
      }

      .close-button {
        display: block;
        fill: #d0d6f9;
        padding-top: 20%;
        padding-left: 85%;
        cursor: pointer;
      }
      li a {
        padding-left: 10%;
        padding-bottom: 20%;
        border: none;
        .link-num {
          display: inline-block;
        }
      }
    }
  }
`;
