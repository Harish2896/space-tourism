import styled from "styled-components";

export const DestinationStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 30px;

  .section-heading {
    margin-bottom: 10px;
  }

  .section-main-content {
    display: flex;
    flex-direction: column;
    .planet-image {
      img {
        animation: transitionIn 0.5s ease-out;
        width: 50%;
      }
    }
    .inner-nav-tab {
      display: flex;
      justify-content: center;
      padding-top: 15px;
    }
  }
  footer {
    .distance-heading {
      padding: 10px 0;
    }
    .distance {
      padding: 0;
    }
  }
  @media (min-width: 450px) {
    .p-heading {
      font-size: 80px;
    }
    .destination-pgh {
      font-size: 20px;
    }
    .distance-heading {
      font-size: 20px;
    }
    .distance {
      font-size: 30px;
    }
  }

  @media (min-width: 769px) {
    flex-direction: column;
    text-align: left;
    margin: 0 95px;
    margin-top: 35px;
    .section-heading {
      text-align: left;
      margin-bottom: 15px;
      span {
        opacity: 0.5;
      }
    }
    .section-main-content {
      display: flex;
      flex-direction: row;
      .planet-image {
        flex: 55%;
        margin: 20px 0;
        text-align: center;
        img {
          width: 60%;
        }
      }
      .destination-content {
        flex: 40%;
        .inner-nav-tab {
          justify-content: flex-start;
        }
        .p-heading {
          font-size: 80px;
          padding-bottom: 0;
        }
        .destination-pgh {
          text-align: left;
          margin: 0;
          padding: 0;
          padding-bottom: 15px;
          font-size: 13px;
          border-bottom: 1px solid gray;
        }
        footer {
          display: flex;
          justify-content: space-between;
          .distance-heading {
            font-size: 20px;
            padding: 10px 0 5px;
          }
          .distance {
            font-size: 24px;
            padding: 0;
          }
        }
      }
    }
  }
`;
