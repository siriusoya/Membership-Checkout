import React from "react";

import {
  RadioOptionContainer,
  RadioInput,
  RadioLabel,
  RadioName,
  RadioPrice,
  RadioPassIcon,
} from "../stylingComponents/RadioButton";

import { BoldText } from "../stylingComponents/TextStyling";

function RadioOptionOne(props) {
  const {
    id,
    name,
    value,
    register,
    validationRules,
    label,
    price,
    isSelected,
    passIcon,
  } = props;

  return <>
    <RadioOptionContainer>
      <RadioInput
        type="radio"
        id={id}
        {...register(name, validationRules)}
        value={value}
      />
      <RadioLabel htmlFor={id}>
        <RadioName>{label}</RadioName>
        <RadioPrice>
          <BoldText>{price}</BoldText>
        </RadioPrice>
        <RadioPassIcon isSelected={isSelected}>
          {passIcon}
        </RadioPassIcon>
      </RadioLabel>
    </RadioOptionContainer>
  </>;
}

export default RadioOptionOne;
