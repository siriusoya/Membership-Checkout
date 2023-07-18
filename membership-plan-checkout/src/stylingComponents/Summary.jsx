import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  display: flex;
  margin: 0.15em;
`;

const SummaryTop = styled.div`
  position: relative;
  top: 0;
`;

const SummaryBottom = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2em;
`;

const SummaryDetailContainer = styled.div``;

const SummaryContent = styled.div`
  position: relative;
  padding-top: 2em;
  left: 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 88%;
  
  padding-bottom: 1.25em;
`;



const VerticalLine = styled.div`
  background-color: #FFA500;
  height: 86.5%;
  width: 2px;
  margin-right: 0.15em;
  position: relative;
  left: 3%;
  top: 3.5em;
`;


const SubmitButton = styled.input`
  background-color: #FFA500;
  color: #F8F8F8;
  border: none;
  display: block;
  width: 100%;
  min-width: 100%;
  padding: 1em 0;
  font-size: large;
  border-radius: 15px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #ffae00;
  }
`;

const CostContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2em;
  justify-content: space-between;
`;

const TotalCostContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2em;
  justify-content: space-between;
  margin-bottom: 3em;
`;

export {
    SummaryContainer,
    SummaryTop,
    SummaryBottom,
    SummaryDetailContainer,
    SummaryContent,
    VerticalLine,
    SubmitButton,
    CostContainer,
    TotalCostContainer
  };