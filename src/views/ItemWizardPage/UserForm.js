import React, { useState, useEffect, useContext } from "react";
import { PostingDetails } from "./PostingDetails";
import { BasicInfo } from "./BasicInfo";
import { PricingAndProtection } from "./PricingAndProtection";
import { Confirm } from "./Confirm";
import { CancellationAndDelivery } from "./CancellationAndDelivery";
import RentHeader from "./RentHeader";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

function getSteps() {
  return [
    "Basic Info",
    "Posting Details",
    "Pricing And Protection",
    "Cancellation Policy",
    "Confirm",
  ];
}
export default function UserForm() {
  const steps = getSteps();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    stock: "",
    condition: "",
    deposit: "",
    name: "",
    description: "",
    day: "",
    price: {
      day: "",
      week: "",
      hour: "",
      month: "",
    },
    cancellation: "",
    isDeliverable: "",
    photo: "",
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return (
        <>
          <RentHeader
            component={
              <>
                <Stepper activeStep={0} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <BasicInfo
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </>
            }
          />
        </>
      );
    case 2:
      return (
        <RentHeader
          component={
            <>
              <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <PostingDetails
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </>
          }
        />
      );
    case 3:
      return (
        <>
          <RentHeader
            component={
              <>
                <Stepper activeStep={2} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <PricingAndProtection
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </>
            }
          />
        </>
      );
    case 4:
      return (
        <>
          <RentHeader
            component={
              <>
                <Stepper activeStep={3} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <CancellationAndDelivery
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </>
            }
          />
        </>
      );
    case 5:
      return (
        <>
          <RentHeader
            component={
              <>
                <Stepper activeStep={4} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Confirm
                  formData={formData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </>
            }
          />
        </>
      );
    default:
      return;
  }
}
