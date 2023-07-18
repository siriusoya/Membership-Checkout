import React from "react";

import {
  RadioOptionContainer,
  RadioInput,
  RadioLabel,
  RadioPassIcon,
} from "../stylingComponents/RadioButton";

import { BoldText } from "../stylingComponents/TextStyling";

function RadioOptionTwo(props) {
  const {
    id,
    name,
    value,
    register,
    validationRules,
    label,
    isSelected,
    passIcon,
  } = props;

  return (
    <>
      <RadioOptionContainer>
        <RadioInput
          type="radio"
          id={id}
          {...register(name, validationRules)}
          value={value}
        />
        <RadioLabel htmlFor={id}>
          <BoldText>{label}</BoldText>
          <RadioPassIcon isSelected={isSelected}>{passIcon}</RadioPassIcon>
        </RadioLabel>
      </RadioOptionContainer>
    </>
  );
}

export default RadioOptionTwo;
