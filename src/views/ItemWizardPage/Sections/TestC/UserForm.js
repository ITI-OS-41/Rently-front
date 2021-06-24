import React, { useState } from "react";
import { FormUserDetails } from "./FormUserDetails";
import { FormPersonalDetails } from "./FormPersonalDetails";
import { PricingAndProtection } from "./PricingAndProtection";
import { Confirm } from "./Confirm";
import { Success } from "./Success";
import RentHeader from "./RentHeader";

export default function UserForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // firstName: "",
    category: "",
    // subCategory: "",
    // occupition: "",
    quantity: "",
    condition: "",
    itemName: "",
    description: "",
    daily: "",
    weekly: "",
    hourly: "",
    monthly: "",
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return (
        <>
          <RentHeader
            component={
              <FormPersonalDetails
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
              <FormUserDetails
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
        // <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep} />
      );
    case 4:
      return (
        <>
          <Confirm
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </>
      );
    default:
      return <Success />;
  }
}
