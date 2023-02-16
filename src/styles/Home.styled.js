import styled from "styled-components";

export const HomeStyled = styled.div`
  @keyframes transitionIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-top: 20px;
  color: white;

  .home-main-content {
    animation: transitionIn 0.5s ease-out;
    .home-sub-heading {
      margin: 0px auto;
      text-align: center;
    }
    .home-main-heading {
      font-size: 80px;
      text-align: center;
    }
    .home-pgh {
      margin: 0 0 20px;
      text-align: center;
    }
  }
  .landing-page-button {
    display: block;
    text-align: center;
    font-family: Bellefair, sans-serif;
    font-size: 20px;
    height: 140px;
    width: 140px;
    border-radius: 50%;
    border: none;
    margin: 40px auto;
    color: ${({ theme }) => theme.colors.darkBlue};
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: box-shadow 0.3s ease-out;
    &:hover {
      box-shadow: 0 0 1px 35px rgba(255, 255, 255, 0.2);
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    margin: 50px 90px 0;
    .home-main-content {
      flex: 1.5;
      padding-left: 10px;
      .home-sub-heading {
        font-size: 28px;
        text-align: left;
      }
      .home-main-heading {
        font-size: 150px;
        text-align: left;
      }
      .home-pgh {
        font-size: 18px;
        padding-right: 25px;
        text-align: left;
      }
    }

    .home-button {
      flex: 2;
      margin-top: 90px;

      .landing-page-button {
        font-size: 24px;
        height: 180px;
        width: 180px;
        margin-right: 100px;
      }
    }
  }
`;
