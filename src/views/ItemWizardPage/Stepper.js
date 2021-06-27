// import React, { createContext, useCallback, useState } from "react";

// export const StepperContext = createContext({});

// function getSteps() {
//   return [
//     "Basic Info",
//     "Posting Details",
//     "Pricing And Protection",
//     "Cancellation And Delivery",
//     "Confirm",
//   ];
// }
// function Stepper() {
//   const steps = getSteps();

//   const [activeStep, setActiveStep] = useState(1);

//   return (
//     <StepperContext.Provider value={{ activeStep, setActiveStep }}>
//       <Stepper alternativeLabel activeStep={activeStep}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </StepperContext.Provider>
//   );
// }

// export default Stepper;
