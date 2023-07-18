import React from "react";
import styled from "styled-components";

const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  justify-items: left;
  grid-gap: 1em;
  margin-bottom: 3.75em;
  position: relative;
  width: 80%;

  @media only screen and (max-width: 768px) {
    margin-bottom: 3.75em;
  }
`;

const RadioOptionContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  margin: 0;
`;

const RadioInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;
`;

const RadioLabel = styled.label`
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.5em 0.75em 0.5em 0.75em;
  border: 2px solid #BBBBBB;
  background-color: #555555;
  width: 12em;
  height: 3.25em;
  transition: background-color 0.3s;
  color: #F8F8F8;
  border-radius: 15px;

  ${RadioInput}:checked + & {
    background-color: rgba(0, 255, 0, 0.2);
    border: 2px solid #00FF00;
  }
`;

const RadioPassIcon = styled.span`
  position: absolute;
  left: 11em;
  color: #00FF00;
  bottom: 1.25em;

  display: ${(props) => (props.isSelected ? "initial" : "none")};
`;

const RadioName = styled.p`
  position: absolute;
  top: 1em;
  font-weight: bold;
`;

const RadioPrice = styled.p`
  position: absolute;
  bottom: 0.65em;
  margin-bottom: 0;
  font-size: 1.25em;
`;

const RadioErrorMessage = styled.p`
  position: absolute;
  font-size: 0.75em;
  left: 0.5em;
  bottom: 5.5em;
  color: #ffae00;

  @media only screen and (max-width: 768px) {
    font-size: 0.7em;
    bottom: 25.2em;
  }
`;

export {
    RadioContainer,
    RadioOptionContainer,
    RadioInput,
    RadioLabel,
    RadioPassIcon,
    RadioName,
    RadioPrice,
    RadioErrorMessage
  };
  