import React from "react";

import {
  SummaryContainer,
  SummaryTop,
  SummaryBottom,
  SummaryDetailContainer,
  SummaryContent,
  VerticalLine,
  SubmitButton,
  CostContainer,
  TotalCostContainer,
} from "../stylingComponents/Summary";

import {
  Description,
  DescriptionTitle,
  SummaryHead,
  HorizontalLine,
  TotalCost,
  TextStyleTwo,
  BoldText,
  Price,
} from "../stylingComponents/TextStyling";

import addCommas from "../helpers/addCommas";
import rupiahFormat from "../helpers/rupiahFormat";

function Summary(props) {
  const {
    page,
    pricingPlan,
    membershipPeriod,
    payment,
    studentDiscount,
    membershipCost,
    handleNextPage,
    activeUntil,
    checked,
  } = props;

  return (
    <>
      <SummaryContainer>
        <VerticalLine />
        <SummaryContent>
          <SummaryTop>
            <SummaryHead>Summary</SummaryHead>
            <TextStyleTwo>
              Premium membership subscription checkout
            </TextStyleTwo>
            {pricingPlan && (
              <SummaryDetailContainer>
                <HorizontalLine />
                <DescriptionTitle>Membership period</DescriptionTitle>
                <Description>{`${membershipPeriod} days with ${pricingPlan} plan`}</Description>
              </SummaryDetailContainer>
            )}
            {page == 3 && (
              <SummaryDetailContainer>
                <HorizontalLine />
                <DescriptionTitle>Payment method</DescriptionTitle>
                <Description>{payment}</Description>
              </SummaryDetailContainer>
            )}
          </SummaryTop>
          <SummaryBottom>
            {pricingPlan && (
              <CostContainer>
                <TextStyleTwo>
                  <BoldText>{pricingPlan}</BoldText> plan
                </TextStyleTwo>
                <Price>{rupiahFormat(membershipCost)}</Price>
              </CostContainer>
            )}
            {checked && pricingPlan && (
              <CostContainer>
                <TextStyleTwo>Student discount (10%)</TextStyleTwo>
                <Price>- {rupiahFormat(studentDiscount * membershipCost)}</Price>
              </CostContainer>
            )}
            <TotalCostContainer>
              <SummaryHead>Total</SummaryHead>
              <TotalCost>
                {rupiahFormat(membershipCost - studentDiscount * membershipCost)}
              </TotalCost>
            </TotalCostContainer>
            {page == 1 && (
              <SubmitButton
                type="button"
                value="Continue to Payment"
                onClick={handleNextPage}
              ></SubmitButton>
            )}
            {page == 2 && (
              <SubmitButton
                type="submit"
                value={`Pay with ${payment ? payment : ""}`}
              ></SubmitButton>
            )}
          </SummaryBottom>
        </SummaryContent>
      </SummaryContainer>
    </>
  );
}

export default Summary;
