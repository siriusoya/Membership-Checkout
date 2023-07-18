import React from 'react';
import styled from 'styled-components';

const BackSymbol = styled.div`
  position: relative;
  margin-right: 10px;
`;

const BackLink = styled.div`
  display: flex;
  width: fit-content;
  height: 1em;
  margin-bottom: 2.25em;

  &:hover {
    cursor: pointer;
    color: #ffae00;
  }
`;

export { BackSymbol, BackLink };
