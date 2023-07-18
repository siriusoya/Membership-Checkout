import React from "react";

import {
  DetailHead,
  TextStyleOne,
  BoldText,
} from "../stylingComponents/TextStyling";
import {
  DetailHeadContainer,
  DetailHeadUL,
  FinishContainer,
  FinishText,
} from "../stylingComponents/MainContent";
import { BackSymbol, BackLink } from "../stylingComponents/BackIcon";

function Finish(props) {
  const {
    page,
    activationCode,
    membershipPeriod,
    pricingPlan,
    handleGoToHomepage,
    activeUntil,
  } = props;

  return (
    <>
      <FinishContainer page={page}>
        <DetailHeadContainer>
          <DetailHead>Thank you</DetailHead>
          <DetailHeadUL />
        </DetailHeadContainer>
        <FinishText>
          <BoldText>Activation code : {activationCode}</BoldText>
        </FinishText>
        <FinishText>
          Your {pricingPlan} premium membership will be active until {activeUntil}
        </FinishText>
        <br />
        <br />
        <BackLink onClick={handleGoToHomepage}>
          <BackSymbol>
            <span className="material-symbols-outlined">arrow_back</span>
          </BackSymbol>
          <TextStyleOne>Go to homepage</TextStyleOne>
        </BackLink>
      </FinishContainer>
    </>
  );
}

export default Finish;
