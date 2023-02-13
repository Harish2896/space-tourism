import styled from "styled-components";

export const H = styled.div`
  font-family: Bellefair;
  text-transform: uppercase;
  padding: 20px 0;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "50px")};
  color: ${({ theme }) => theme.colors.white};
`;

export const P = styled.p`
  font-family: Barlow;
  margin: 0 20px;
  padding-bottom: 15px;
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const SubH1 = styled.div`
  font-family: Bellefair;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "28px")};
  color: ${({ theme }) => theme.colors.white};
`;

export const SubH2 = styled.div`
  font-family: Barlow Condensed;
  padding-top: 20px;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  color: ${({ theme }) => theme.colors.grayishBlue};
  letter-spacing: 2.7px;
  span {
    opacity: 0.5;
  }
  @media (min-width: 450px) {
    font-size: 26px;
    letter-spacing: 4px;
  }
`;
