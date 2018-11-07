import styled from "styled-components";

const SetupButton = styled.a`
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(191, 191, 191, 0.4);
  color: #888;
  font-family: "Roboto", sans-serif;
  font-size: 42px;
  font-weight: 500;
  letter-spacing: 2.5px;
  outline: none;
  padding: 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #d3d;
    box-shadow: 0px 8px 15px rgba(240, 50, 240, 0.4);
    color: #000;
    transform: translateY(-8px);
  }
`;

export default SetupButton;
