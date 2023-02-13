import styled from "styled-components";

export const CrewStyled = styled.div`
  margin: 0 30px;
  .crew-section-head {
    text-align: center;
  }

  .crew-section-content {
    margin-top: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    .crew-image {
      height: 350px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .crew-nav-tab {
      margin-top: 20px;
    }
    .crew-info {
      animation: transitionIn 0.5s ease-out;
      .crew-name {
        padding: 10px 0;
      }
      .crew-bio {
        margin: 0;
      }
    }
  }

  @media (min-width: 450px) {
    .crew-section-head {
      text-align: left;
    }
    .crew-section-content {
      flex-direction: column-reverse;
      .crew-nav-tab {
        margin: 0;
        margin-bottom: 10px;
      }
      .crew-role {
        padding-top: 20px;
      }
      .crew-name {
        font-size: 28px;
      }
    }
  }

  @media (min-width: 769px) {
    padding: 35px 65px 0;
    .crew-section-content {
      text-align: left;
      display: grid;
      grid-template-columns: 0.8fr 1fr;
      .crew-image {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 3;
        text-align: center;
      }
      .crew-info {
        grid-column-start: 1;
        grid-row-start: 1;
        padding-top: 25px;
        .crew-role {
          font-size: 18px;
        }
        .crew-name {
          font-size: 32px;
        }
      }
      .crew-nav-tab {
        padding-left: 10px;
      }
    }
  }
`;
