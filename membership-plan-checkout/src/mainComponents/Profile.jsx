import React from "react";
import {
  DetailHeadContainer,
  DetailHeadUL,
  ProfileContainer,
  ProfileLeft,
  ProfileRight,
} from "../stylingComponents/MainContent";
import { BackSymbol, BackLink } from "../stylingComponents/BackIcon";
import {
  DropshipperInput,
  CheckIconWrapper,
  CheckboxLabel,
  CheckboxContainer,
} from "../stylingComponents/CheckBox";
import {
  TextAreaContainer,
  TextAreaInput,
  TextAreaLabel,
  TextAreaCounter,
  TextAreaPassIcon,
  TextAreaErrorIcon,
  TextAreaErrorMessage,
} from "../stylingComponents/TextArea";
import { DetailHead, TextStyleOne } from "../stylingComponents/TextStyling";

import TextInputOne from "../reusableComponents/TextInputOne";
import TextInputTwo from "../reusableComponents/TextInputTwo";

import validatePhoneNumber from "../customValidations/validatePhoneNumber";

function Profile(props) {
  const {
    page,
    errors,
    checked,
    email,
    phoneNumber,
    address,
    handleCheckboxChange,
    institutionName,
    studentEmail,
    register,
  } = props;

  return (
    <>
      <ProfileContainer page={page}>
        <ProfileLeft>
          <BackLink>
            <BackSymbol>
              <span className="material-symbols-outlined">arrow_back</span>
            </BackSymbol>
            <TextStyleOne>Back to homepage</TextStyleOne>
          </BackLink>
          <DetailHeadContainer>
            <DetailHead>Profile</DetailHead>
            <DetailHeadUL />
          </DetailHeadContainer>

          <TextInputOne
            name="email"
            label="Email"
            error={errors.email}
            register={register}
            validationRules={{
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email format",
              },
            }}
            placeholder="Email"
            hasError={errors.email}
            isEmpty={email?.length}
            passIcon={<span className="material-symbols-outlined">check</span>}
            errorIcon={<span className="material-symbols-outlined">close</span>}
          />

          <TextInputOne
            name="phoneNumber"
            label="Phone Number"
            error={errors.phoneNumber}
            register={register}
            validationRules={{
              validate: validatePhoneNumber,
            }}
            placeholder="Phone Number"
            hasError={errors.phoneNumber}
            isEmpty={phoneNumber?.length}
            passIcon={<span className="material-symbols-outlined">check</span>}
            errorIcon={<span className="material-symbols-outlined">close</span>}
          />

          <TextAreaContainer>
            <TextAreaErrorMessage>
              {errors.address?.message}
            </TextAreaErrorMessage>
            <TextAreaInput
              {...register("address", {
                required: "Address is required",
              })}
              rows="5"
              maxLength="120"
              placeholder="Address"
              hasError={errors.address}
              isEmpty={address?.length}
            ></TextAreaInput>
            <TextAreaLabel
              hasError={errors.address}
              isEmpty={address?.length}
            >
              Address
            </TextAreaLabel>
            <TextAreaCounter
              hasError={errors.address}
              isEmpty={address?.length}
            >
              {address?.length}/120
            </TextAreaCounter>
            <TextAreaPassIcon
              hasError={errors.address}
              isEmpty={address?.length}
            >
              <span className="material-symbols-outlined">check</span>
            </TextAreaPassIcon>
            <TextAreaErrorIcon
              hasError={errors.address}
              isEmpty={address?.length}
            >
              <span className="material-symbols-outlined">close</span>
            </TextAreaErrorIcon>
          </TextAreaContainer>
        </ProfileLeft>
        <ProfileRight>
          <CheckboxContainer>
            <DropshipperInput
              type="checkbox"
              id="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <CheckboxLabel htmlFor="checkbox">
              {checked && (
                <CheckIconWrapper>
                  <span className="material-symbols-outlined">check</span>
                </CheckIconWrapper>
              )}
              Get student discount
            </CheckboxLabel>
          </CheckboxContainer>
          <TextInputTwo
            name="institutionName"
            label="Institution Name"
            checked={checked}
            value={!checked ? "" : institutionName}
            error={errors.institutionName}
            register={register}
            validationRules={{
              required: checked ? "Institution name is required" : false,
            }}
            placeholder="Institution Name"
            hasError={errors.institutionName}
            isEmpty={institutionName?.length}
            passIcon={<span className="material-symbols-outlined">check</span>}
            errorIcon={<span className="material-symbols-outlined">close</span>}
          />

          <TextInputTwo
            name="studentEmail"
            label="Student Email"
            checked={checked}
            value={!checked ? "" : studentEmail}
            error={errors.studentEmail}
            register={register}
            validationRules={{
              required: checked ? "Student email is required" : false,
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email format",
              },
            }}
            placeholder="Student Email"
            hasError={errors.studentEmail}
            isEmpty={studentEmail?.length}
            passIcon={<span className="material-symbols-outlined">check</span>}
            errorIcon={<span className="material-symbols-outlined">close</span>}
          />
        </ProfileRight>
      </ProfileContainer>
    </>
  );
}

export default Profile;
