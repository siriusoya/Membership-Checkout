import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalStyle, MainContainer } from "./stylingComponents/Global";

import {
  ContentContainer,
  DetailContainer,
} from "./stylingComponents/MainContent";

import Profile from "./mainComponents/Profile";
import PageInfo from "./mainComponents/PageInfo";
import Payment from "./mainComponents/Payment";
import Finish from "./mainComponents/Finish";
import Summary from "./mainComponents/Summary";

import generateRandomDigits from "./helpers/randomDigits";
import delay from "./helpers/delay";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
      phoneNumber: localStorage.getItem("phoneNumber")
        ? localStorage.getItem("phoneNumber")
        : "",
      address: localStorage.getItem("address")
        ? localStorage.getItem("address")
        : "",
      institutionName:
        localStorage.getItem("institutionName") != "undefined"
          ? localStorage.getItem("institutionName")
          : "",
      studentEmail:
        localStorage.getItem("studentEmail") != "undefined"
          ? localStorage.getItem("studentEmail")
          : "",
      pricingPlan:
        localStorage.getItem("pricingPlan") != "null"
          ? localStorage.getItem("pricingPlan")
          : "",
      payment:
        localStorage.getItem("payment") != "null"
          ? localStorage.getItem("payment")
          : "",
    },
  });

  let initialChecked;

  if (localStorage.getItem("checked")) {
    if (localStorage.getItem("checked") == "true") {
      initialChecked = true;
    } else {
      initialChecked = false;
    }
  } else {
    initialChecked = false;
  }

  const [checked, setChecked] = useState(initialChecked);
  const [page, setPage] = useState(
    localStorage.getItem("page") ? +localStorage.getItem("page") : 1
  );
  const [activationCode, setActivationCode] = useState(
    localStorage.getItem("activationCode")
      ? localStorage.getItem("activationCode")
      : ""
  );

  const [studentDiscount, setStudentDiscount] = useState(checked ? 0.1 : 0);
  const [membershipCost, setMembershipCost] = useState(0);
  const [membershipPeriod, setMembershipPeriod] = useState();
  const [activeUntil, setActiveUntil] = useState();

  const email = watch("email");
  const phoneNumber = watch("phoneNumber");
  const address = watch("address");
  const institutionName = checked ? watch("institutionName") : "";
  const studentEmail = checked ? watch("studentEmail") : "";
  const pricingPlan = watch("pricingPlan");
  const payment = watch("payment");

  const weeklyPrice = 19000;
  const monthlyPrice = 35000;
  const annualPrice = 290000;

  const weeklyDuration = 7;
  const monthlyDuration = 30;
  const annualDuration = 365;

  const today = new Date();
  const activeUntilDate = new Date();

  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("address", address);
    localStorage.setItem("institutionName", institutionName);
    localStorage.setItem("studentEmail", studentEmail);
    localStorage.setItem("pricingPlan", pricingPlan);
    localStorage.setItem("payment", payment);
    localStorage.setItem("page", page);
    localStorage.setItem("checked", checked);
    localStorage.setItem("activationCode", activationCode);
  }, [watch()]);

  useEffect(() => {
    trigger([
      "email",
      "phoneNumber",
      "address",
      "institutionName",
      "studentEmail",
    ]);
  }, [errors, checked]);

  useEffect(() => {
    if (pricingPlan == "Weekly") {
      setMembershipCost(weeklyPrice);
      setMembershipPeriod(weeklyDuration);
    } else if (pricingPlan == "Monthly") {
      setMembershipCost(monthlyPrice);
      setMembershipPeriod(monthlyDuration);
    } else if (pricingPlan == "Annual") {
      setMembershipCost(annualPrice);
      setMembershipPeriod(annualDuration);
    }
  }, [watch("pricingPlan")]);

  const handleCheckboxChange = () => {
    setChecked(!checked);

    checked ? setStudentDiscount(0) : setStudentDiscount(0.1);

    if (!checked) {
      reset({
        institutionName: "",
        studentEmail: "",
      });
    }
  };

  const handleBackToUserDetails = () => {
    setPage(1);
  };

  const handleGoToHomepage = async () => {
    localStorage.clear();

    await delay(500);

    window.location.reload();

    await delay(500);

    setPage(1);
  };

  const handleNextPage = (e) => {
    e.preventDefault();

    trigger();

    console.log(Object.keys(errors)?.length);

    if (
      errors.email ||
      errors.phoneNumber ||
      errors.address ||
      errors.institutionName ||
      errors.studentEmail
    ) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  };

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
    if (page === 2) {
      setActivationCode(generateRandomDigits());

      activeUntilDate.setDate(today.getDate() + 7);
      setActiveUntil(activeUntilDate.toLocaleDateString());
    }
    setPage(page + 1);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <PageInfo page={page}></PageInfo>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContentContainer>
            <DetailContainer>
              <Profile
                page={page}
                errors={errors}
                checked={checked}
                email={email}
                phoneNumber={phoneNumber}
                address={address}
                handleCheckboxChange={handleCheckboxChange}
                institutionName={institutionName}
                studentEmail={studentEmail}
                register={register}
              ></Profile>

              <Payment
                page={page}
                handleBackToUserDetails={handleBackToUserDetails}
                errors={errors}
                register={register}
                pricingPlan={pricingPlan}
                weeklyPrice={weeklyPrice}
                monthlyPrice={monthlyPrice}
                annualPrice={annualPrice}
                payment={payment}
              ></Payment>

              <Finish
                page={page}
                activationCode={activationCode}
                membershipPeriod={membershipPeriod}
                pricingPlan={pricingPlan}
                handleGoToHomepage={handleGoToHomepage}
                activeUntil={activeUntil}
              ></Finish>
            </DetailContainer>

            <Summary
              page={page}
              pricingPlan={pricingPlan}
              membershipPeriod={membershipPeriod}
              payment={payment}
              studentDiscount={studentDiscount}
              membershipCost={membershipCost}
              handleNextPage={handleNextPage}
              activeUntil={activeUntil}
              checked={checked}
            ></Summary>
          </ContentContainer>
        </form>
      </MainContainer>
    </>
  );
}

export default App;
