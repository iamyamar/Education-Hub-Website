import React, { useState } from "react";
import styles from "./Authinticate.module.css";

import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }
  return (
    <div>
      <Step onclick={onNext} />
    </div>
  );
};

export default Authenticate;
