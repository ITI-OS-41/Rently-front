import React, { useState } from "react";
import { PostingDetails } from "./PostingDetails";
import { BasicInfo } from "./BasicInfo";
import { PricingAndProtection } from "./PricingAndProtection";
import { Confirm } from "./Confirm";
import { CancellationAndDelivery } from "./CancellationAndDelivery";
import { Success } from "./Success";
import RentHeader from "./RentHeader";

export default function UserForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    stock: "",
    condition: "",
    deposit:"",
    name: "",
    description: "",
    price: {
      day: "",
      week: "",
      hour: "",
      month: "",
    },
    cancellation:"",
    isDeliverable:"",
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return (
        <>
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
        </>
      );
    case 2:
      return (
        <>
          <RentHeader
            component={
              <PostingDetails
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />

              // <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep} />
            }
          />
        </>
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
              />}
            />
        </>
      );
   default:
     return;
  }
}
