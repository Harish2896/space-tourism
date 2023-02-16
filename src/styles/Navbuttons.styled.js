import styled from "styled-components";

export const DestinationNavbutton = styled.button`
  font-family: Barlow Condensed;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  color: ${({ theme }) => theme.colors.grayishBlue};
  margin-right: 10px;
  padding-bottom: 5px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  transition: border 0.5s ease-out;
  &.button-active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.grayishBlue};
  }
  &:hover {
    color: white;
  }
  @media (min-width: 450px) {
    font-size: 22px;
  }
`;
export const CrewNavbutton = styled.button`
  border-radius: 50%;
  padding: 5px;
  border: none;
  background: gray;
  margin-right: 15px;
  cursor: pointer;
  transition: transform 0.3s ease-out;
  &.button-active {
    background: white;
    transform: scale(1.2);
  }
  &:hover {
    background: white;
  }
  @media (min-width: 769px) {
    padding: 7px;
    margin-right: 30px;
  }
`;
export const TechnologyNavbutton = styled.button`
  margin-right: 15px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-family: Bellefair, sans-serif;
  font-size: 20px;
  color: white;
  border: 1px solid gray;
  background: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &.button-active {
    background: white;
    color: ${({ theme }) => theme.colors.darkBlue};
    border-color: white;
  }
  &:hover {
    border-color: white;
  }
  @media (min-width: 450px) {
    height: 60px;
    width: 60px;
  }
`;
