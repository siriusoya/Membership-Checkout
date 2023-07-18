import React from "react";
import styled from "styled-components";

const TextAreaContainer = styled.div`
  position: relative;
  display: block;
  margin-bottom: 1em;
`;

const TextAreaInput = styled.textarea`
  font-size: 1em;
  font-weight: bold;
  padding-left: 0.75em;
  padding-right: 3.5em;
  border: ${(props) =>
    props.hasError ? "2px solid #FFA500" : "2px solid #00FF00"};
  ${(props) =>
    !props.isEmpty &&
    `
border: 2px solid #CCCCCC;
`}
  display: block;
  width: 87.75%;
  height: 7em;
  padding-top: 1.75em;
  padding-bottom: 1em;
  resize: none;
  font-family: "Inter", sans-serif;
  background-color: #555555;
  color: #F8F8F8;
  border-radius: 15px;

  &::placeholder {
    color: #F8F8F8;
  }

  @media only screen and (max-width: 768px) {
    width: 81%;
    height: 11em;
  }
`;

const TextAreaLabel = styled.label`
  font-size: 0.8em;
  position: absolute;
  margin-left: 1em;
  color: ${(props) => (props.hasError ? "#FFA500" : "#00FF00")};
  display: ${(props) => (props.isEmpty ? "initial" : "none")};
  top: 1em;
`;

const TextAreaCounter = styled.p`
  font-size: 0.8em;
  position: absolute;
  bottom: 0em;
  margin-left: 1em;
  color: #F8F8F8;
  visibility: ${(props) => (props.isEmpty ? "visible" : "hidden")};
`;

const TextAreaPassIcon = styled.span`
  position: absolute;
  right: 0em;
  color: #00FF00;
  bottom: 4em;

  display: ${(props) =>
    props.isEmpty && !props.hasError ? "initial" : "none"};

  @media only screen and (max-width: 768px) {
    bottom: 6em;
  }
`;

const TextAreaErrorIcon = styled.span`
  position: absolute;
  float: right;
  color: #FFA500;
  bottom: 7.5em;
  display: ${(props) => (props.isEmpty && props.hasError ? "initial" : "none")};
`;

const TextAreaErrorMessage = styled.p`
  position: absolute;
  font-size: 0.75em;
  left: 0.5em;
  bottom: 13em;
  color: #ffae00;

  @media only screen and (max-width: 768px) {
    bottom: 19.5em;
    font-size: 0.7em;
  }
`;

export {
  TextAreaContainer,
  TextAreaInput,
  TextAreaLabel,
  TextAreaCounter,
  TextAreaPassIcon,
  TextAreaErrorIcon,
  TextAreaErrorMessage
};
