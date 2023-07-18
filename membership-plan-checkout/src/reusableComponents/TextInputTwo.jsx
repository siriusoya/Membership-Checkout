import React from "react";

import {
    TextInputContainer,
    ErrorMessage,
    TextInput,
    TextInputLabel,
    TextInputPassIcon,
    TextInputErrorIcon,
  } from "../stylingComponents/TextInput";


function TextInputTwo(props) {
    const {
        name,
        label,
        value,
        error,
        register,
        validationRules,
        placeholder,
        hasError,
        isEmpty,
        passIcon,
        errorIcon,
        checked
      } = props;

    return(
    <>
    <TextInputContainer>
      {hasError && <ErrorMessage>{error?.message}</ErrorMessage>}
      <TextInput
        {...register(name, validationRules)}
        type="text"
        placeholder={placeholder}
        hasError={hasError}
        isEmpty={isEmpty}
        value={value}
        disabled={!checked}
      />
      <TextInputLabel hasError={hasError} isEmpty={isEmpty}>
        {label}
      </TextInputLabel>
      <TextInputPassIcon hasError={hasError} isEmpty={isEmpty}>
        {passIcon}
      </TextInputPassIcon>
      <TextInputErrorIcon hasError={hasError} isEmpty={isEmpty}>
        {errorIcon}
      </TextInputErrorIcon>
    </TextInputContainer>
    </>
    )
}

export default TextInputTwo;