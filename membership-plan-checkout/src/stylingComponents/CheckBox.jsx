import React from 'react';
import styled from 'styled-components';

const DropshipperInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  position: relative;
  width: 1.75em;
  height: 1.75em;
  border: 2px solid #BBBBBB;
  background-color: #555555;
  top: 1.6em;
  transform: translate(-50%, -50%);
  z-index: 3;

  &:checked {
    border: 2px solid #00FF00;
  }

  &:hover + :checked {
    cursor: pointer;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CheckIconWrapper = styled.div`
  font-size: 2em;
  position: absolute;
  top: 4.05em;
  transform: translate(-34%, -50%);
  color: #00FF00;
  z-index: 3;

  @media only screen and (max-width: 768px) {
    top: 24.65em;
  }
`;

const CheckboxLabel = styled.label`
  font-weight: bold;
  font-size: 0.85em;

  &:hover {
    cursor: pointer;
  }
`;

const CheckboxContainer = styled.div`
  margin-bottom: 2.4em;
  float: right;
  display: block;
`;

export { DropshipperInput, CheckIconWrapper, CheckboxLabel, CheckboxContainer };
