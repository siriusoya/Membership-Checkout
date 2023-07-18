import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #202124;
  border-radius: 85px;
  width: 42%;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFA500;
  font-size: 1em;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 3px solid #FFA500;
  border-bottom-width: 50%;
`;

const PageNumber = styled.div`
  background-color: ${(props) =>
    props.page >= props.pageNumber ? "#FFA500" : "#555555"};
  color: ${(props) => (props.page >= props.pageNumber ? "#F8F8F8" : "#FFA500")};
  width: 35px;
  height: 35px;
  text-align: center;
  border-radius: 50%;
  margin-right: 1em;
`;

const PageName = styled.div`
  color: #FFA500;
  font-weight: bold;
  margin: auto;
`;

const PageDisplay = styled.div`
  display: flex;

  @media only screen and (max-width: 915px) {
    display: ${(props) => (props.page == props.pageNumber ? "flex" : "none")};
  }
`;

const PageContent = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0%;
`;

const TheNumber = styled.p`
  margin: 6px;
  font-weight: bold;
`;

const RightSymbol = styled.div`
  font-weight: bold;
  position: relative;
  bottom: -0.45em;
  margin-left: 1em;

  @media only screen and (max-width: 915px) {
    display: none;
  }
`;

export {
    PageContainer,
    PageNumber,
    PageName,
    PageDisplay,
    PageContent,
    TheNumber,
    RightSymbol
  };