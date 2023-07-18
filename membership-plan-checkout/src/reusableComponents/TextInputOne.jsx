import React from "react";
import {
    TextInputContainer,
    TextInputLabel,
    TextInputPassIcon,
    TextInputErrorIcon,
    TextInput,
    ErrorMessage,
  } from "../stylingComponents/TextInput";


function TextInputOne(props) {
  const {
    name,
    label,
    error,
    register,
    validationRules,
    placeholder,
    hasError,
    isEmpty,
    passIcon,
    errorIcon,
  } = props;

    return(
    <>
    <TextInputContainer>
      <ErrorMessage>{error?.message}</ErrorMessage>
      <TextInput
        {...register(name, validationRules)}
        type="text"
        placeholder={placeholder}
        hasError={hasError}
        isEmpty={isEmpty}
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

export default TextInputOne;