import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  font-weight: bold;
  color: #00FF00;
  margin: 0;
`;

const DescriptionTitle = styled.p`
  font-size: 0.85em;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.25em;
`;

const SummaryHead = styled.h2`
  color: #FFA500;
  margin-top: 1em;
  font-family: 'Orbitron';
  font-size: 1.45em;
`;

const HorizontalLine = styled.hr`
  margin: 1.5em 0;
  border: none;
  height: 2px;
  background-color: #d8d8d8;
  width: 25%;
`;

const TotalCost = styled.h2`
  color: #FFA500;
  margin-top: 1em;
  font-family: 'Orbitron';
  font-size: 1.45em;
  margin-left: auto;
`;

const DetailHead = styled.h1`
  color: #FFA500;
  margin-top: 0;
  font-family: 'Orbitron';
  font-size: 2.5em;
  position: relative;
  z-index: 3;

  @media only screen and (max-width: 768px) {
    font-size: 1.75em;
    margin-bottom: 1.5em;
  }
`;



const TextStyleOne = styled.p`
  position: relative;
  margin-top: 0.1em;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TextStyleTwo = styled.p`
  font-size: 0.85em;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const Price = styled.p`
  color: #F8F8F8;
  font-weight: bold;
  margin-left: auto;
`;

export {
    Description,
    DescriptionTitle,
    SummaryHead,
    HorizontalLine,
    TotalCost,
    DetailHead,
    TextStyleOne,
    TextStyleTwo,
    BoldText,
    Price
  };