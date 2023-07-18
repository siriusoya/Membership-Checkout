import React from "react";
import {
  RadioContainer,
  RadioErrorMessage,
} from "../stylingComponents/RadioButton";

import { DetailHead, TextStyleOne } from "../stylingComponents/TextStyling";
import {
  DetailHeadContainer,
  DetailHeadUL,
  PaymentContainer,
} from "../stylingComponents/MainContent";
import { BackSymbol, BackLink } from "../stylingComponents/BackIcon";

import RadioOptionOne from "../reusableComponents/RadioOptionOne";
import RadioOptionTwo from "../reusableComponents/RadioOptionTwo";

import rupiahFormat from "../helpers/rupiahFormat";

function Payment(props) {
  const {
    page,
    handleBackToUserDetails,
    errors,
    register,
    pricingPlan,
    weeklyPrice,
    monthlyPrice,
    annualPrice,
    payment,
  } = props;

  return (
    <>
      <PaymentContainer page={page}>
        <BackLink onClick={handleBackToUserDetails}>
          <BackSymbol>
            <span className="material-symbols-outlined">arrow_back</span>
          </BackSymbol>
          <TextStyleOne>Back to user details</TextStyleOne>
        </BackLink>
        <DetailHeadContainer>
          <DetailHead>Pricing Plan</DetailHead>
          <DetailHeadUL />
        </DetailHeadContainer>
        <RadioContainer>
          <RadioErrorMessage>{errors.pricingPlan?.message}</RadioErrorMessage>

          <RadioOptionOne
            id="Weekly"
            name="pricingPlan"
            value="Weekly"
            register={register}
            validationRules={{
              required: "Please select a pricing plan",
            }}
            label="Weekly"
            price={rupiahFormat(weeklyPrice)}
            isSelected={pricingPlan === "Weekly"}
            passIcon={<span className="material-symbols-outlined">check</span>}
          />

          <RadioOptionOne
            id="Monthly"
            name="pricingPlan"
            value="Monthly"
            register={register}
            validationRules={{
              required: "Please select a pricing plan",
            }}
            label="Monthly"
            price={rupiahFormat(monthlyPrice)}
            isSelected={pricingPlan === "Monthly"}
            passIcon={<span className="material-symbols-outlined">check</span>}
          />

          <RadioOptionOne
            id="Annual"
            name="pricingPlan"
            value="Annual"
            register={register}
            validationRules={{
              required: "Please select a pricing plan",
            }}
            label="Annual"
            price={rupiahFormat(annualPrice)}
            isSelected={pricingPlan === "Annual"}
            passIcon={<span className="material-symbols-outlined">check</span>}
          />
        </RadioContainer>
        <DetailHeadContainer>
          <DetailHead>Payment</DetailHead>
          <DetailHeadUL />
        </DetailHeadContainer>
        <RadioContainer>
          <RadioErrorMessage>{errors.payment?.message}</RadioErrorMessage>

          <RadioOptionTwo
            id="Paypal"
            name="payment"
            value="Paypal"
            register={register}
            validationRules={{
              required: "Please select a payment option",
            }}
            label="Paypal"
            isSelected={payment === "Paypal"}
            passIcon={<span className="material-symbols-outlined">check</span>}
          />

          <RadioOptionTwo
            id="Bank Transfer"
            name="payment"
            value="Bank Transfer"
            register={register}
            validationRules={{
              required: "Please select a payment option",
            }}
            label="Bank Transfer"
            isSelected={payment === "Bank Transfer"}
            passIcon={<span className="material-symbols-outlined">check</span>}
          />

          <RadioOptionTwo
            id="Virtual Account"
            name="payment"
            value="Virtual Account"
            register={register}
            validationRules={{
              required: "Please select a payment option",
            }}
            label="Virtual Account"
            isSelected={payment === "Virtual Account"}
            passIcon={<span className="material-symbols-outlined">check</span>}
          />
        </RadioContainer>
      </PaymentContainer>
    </>
  );
}

export default Payment;
