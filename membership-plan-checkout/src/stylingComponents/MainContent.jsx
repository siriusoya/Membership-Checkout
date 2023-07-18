import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #202124;
  margin: 5vh 3vw 2vh 3vw;
  height: fit-content;
  display: grid;
  grid-template-columns: 5fr 2fr;
  border-radius: 15px;
  border: 3px solid #FFA500;

  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 3em;
    padding-right: 1em;
    margin-top: 10vh;
  }
`;

const DetailContainer = styled.div`
  padding: 1.5em 2em 2em 2em;
`;

const DetailHeadContainer = styled.div`
  position: relative;
`;

const DetailHeadUL = styled.div`
  background-color: #eeeeee;
  height: 0.7em;
  width: 21.25em;
  top: 65%;
  position: absolute;
  z-index: 1;
  display: none;

  @media only screen and (max-width: 768px) {
    width: 15em;
  }
`;

const ProfileContainer = styled.div`
  display: ${(props) => (props.page == 1 ? "grid" : "none")};
  grid-template-columns: 4fr 3fr;
  gap: 1em;

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.page == 1 ? "block" : "none")};
  }
`;

const ProfileLeft = styled.div`
  max-width: 27em;
`;

const ProfileRight = styled.div`
  margin-top: 3.5em;
`;

const PaymentContainer = styled.div`
  display: ${(props) => (props.page == 2 ? "block" : "none")};
  width: 100%;
  height: 100%;
`;

const FinishContainer = styled.div`
  display: ${(props) => (props.page == 3 ? "grid" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    position: relative;
    transform: translate(-50%, 40%);
  }
`;

const FinishText = styled.div`
  position: relative;
  margin-top: 0.1em;

  @media only screen and (max-width: 768px) {
    font-size: 0.75em;
  }
`;

export {
    ContentContainer,
    DetailContainer,
    DetailHeadContainer,
    DetailHeadUL,
    ProfileContainer,
    ProfileLeft,
    ProfileRight,
    PaymentContainer,
    FinishContainer,
    FinishText
  };
  