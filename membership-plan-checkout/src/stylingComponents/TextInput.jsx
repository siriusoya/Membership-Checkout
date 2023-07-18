import React from "react";
import styled from "styled-components";

const TextInputContainer = styled.div`
  position: relative;
  display: block;
  margin-bottom: 0.5em;

  @media only screen and (max-width: 768px) {
    margin-bottom: 0.5em;
  }
`;

const TextInputLabel = styled.label`
  font-size: 0.8em;
  position: relative;
  bottom: 5.25em;
  margin-left: 1em;
  color: ${(props) => (props.hasError ? "#FFA500" : "#00FF00")};
  visibility: ${(props) => (props.isEmpty ? "visible" : "hidden")};
`;

const TextInputPassIcon = styled.span`
  position: relative;
  float: right;
  bottom: 3.25em;
  color: #00ff00;
  display: ${(props) =>
    props.isEmpty && !props.hasError ? "initial" : "none"};
`;
const TextInputErrorIcon = styled.span`
  position: relative;
  float: right;
  bottom: 3.25em;
  color: #ffa500;
  display: ${(props) => (props.isEmpty && props.hasError ? "initial" : "none")};
`;

const TextInput = styled.input`
  background-color: #555555;
  height: 3em;
  color: #f8f8f8;
  font-size: 1em;
  font-weight: bold;
  padding-left: 0.75em;
  padding-top: ${(props) => (!props.isEmpty ? "0.65em" : "1em")};
  padding-bottom: ${(props) => (!props.isEmpty ? "0.35em" : "0")};
  border: ${(props) =>
    props.hasError ? "2px solid #FFA500" : "2px solid #00FF00"};
  ${(props) =>
    !props.isEmpty &&
    `
  border: 2px solid #BBBBBB;
`}
  background-color: ${(props) =>
    props.hasError ? "2px solid #FFA500" : "2px solid #00FF00"};
  ${(props) =>
    !props.isEmpty &&
    `
    background-color: 2px solid #BBBBBB;
`}
  border-radius: 15px;
  display: block;
  width: 100%;
  min-width: 100%;
  margin-bottom: 0.5em;

  &:disabled {
    background-color: #888888;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #f8f8f8;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  font-size: 0.75em;
  left: 0.5em;
  bottom: 7.5em;
  color: #ffae00;

  @media only screen and (max-width: 768px) {
    font-size: 0.7em;
    bottom: 8em;
  }
`;

export {
  TextInputContainer,
  TextInputLabel,
  TextInputPassIcon,
  TextInputErrorIcon,
  TextInput,
  ErrorMessage,
};
