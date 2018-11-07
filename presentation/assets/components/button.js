import styled from "styled-components";

const SetupButton = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 42px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #888;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  text-decoration: none;
  padding: 16px;
  outline: none;

  &:hover {
    background-color: #d3d;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    color: #000;
    transform: translateY(-7px);
  }
`;

export default SetupButton;
