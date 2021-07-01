import React, { useState, useEffect, useContext } from "react";
import { PostingDetails } from "./PostingDetails";
import { BasicInfo } from "./BasicInfo";
import { PricingAndProtection } from "./PricingAndProtection";
import { Confirm } from "./Confirm";
import { CancellationAndDelivery } from "./CancellationAndDelivery";
import RentHeader from "./RentHeader";
import Stepper from "./Stepper/Stepper";
// import { useStepper } from "./context";
import { StepperProvider } from "./context";

export default function UserForm() {
  const [step, setStep] = useState(1);
  // const [stepper, setStepper] = useContext(Stepper);
  // const { incrementCurrentStep, decrementCurrentStep } = useStepper();

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
        <RentHeader
          component={
            <BasicInfo
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          }
        />
      );
    case 2:
      return (
        <RentHeader
          component={
            <PostingDetails
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          }
        />
      );
    case 3:
      return (
        <>
          <RentHeader
            component={
              <PricingAndProtection
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            }
          />
        </>
      );
    case 4:
      return (
        <>
          <RentHeader
            component={
              <CancellationAndDelivery
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            }
          />
        </>
      );
    case 5:
      return (
        <>
          <RentHeader
            component={
              <Confirm
                formData={formData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            }
          />
        </>
      );
    default:
      return;
  }
}
