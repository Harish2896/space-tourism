import styled from "styled-components";
export const TechnologyStyled = styled.div`
  text-align: center;
  margin-top: 10px;
  .technology-section-head {
    margin-bottom: 20px;
  }
  .technology-section-content {
    .technology-image {
      margin-top: 10px;
      .portrait {
        display: none;
      }
    }
    .technology-nav-tab {
      display: flex;
      justify-content: center;
      margin: 30px 0;
    }
    .technology-title {
      font-size: 16px;
      padding: 0;
    }
    .vehicle-name {
      font-size: 28px;
      padding: 10px 0;
    }
  }
  @media (min-width: 450px) {
    margin-top: 30px;
    .technology-section-head {
      margin-left: 20px;
      text-align: left;
      font-size: 22px;
    }
    .technology-section-content {
      .technology-image {
        margin-top: 30px;
        .portrait {
          display: none;
        }
        .landscape {
          display: block;
          min-width: 100%;
          margin: auto;
        }
      }
      .technology-info {
        animation: transitionIn 0.5s ease-out;
        .technology-title {
          font-size: 16px;
        }
        .vehicle-name {
          font-size: 40px;
        }
        .vehicle-description {
          font-size: 14px;
          line-height: 25px;
          margin: 0 50px;
          padding: 0 50px;
        }
      }
    }
  }
  @media (min-width: 769px) {
    .technology-section-head {
      margin-left: 100px;
      text-align: left;
      font-size: 20px;
    }
    .technology-section-content {
      display: flex;
      justify-content: center;
      text-align: left;
      .technology-image {
        .landscape {
          display: none;
        }
        .portrait {
          display: block;
        }
      }
      .technology-nav-tab {
        flex-direction: column;
        align-items: flex-end;
        padding-right: 30px;
        gap: 20px;
        flex: 1.5;
        order: 1;
      }
      .technology-info {
        order: 2;
        flex: 3;
        margin: auto;
        padding: 0 50px;
        .vehicle-description {
          margin: 0;
          padding: 0;
        }
      }
      .technology-image {
        order: 3;
        flex: 2;
        margin: 0 30px;
      }
    }
  }
`;
