import React from "react";
import styled from "styled-components";
import { MobileStepper, Typography, useMediaQuery } from "@mui/material";
import { Stepper, Step, StepLabel } from "@mui/material";

const StyledMobileStepper = styled(MobileStepper)`
  && {
    span {
      width: 100%;
      background-color: #f9d99e;
    }

    .css-5xe99f-MuiLinearProgress-bar1 {
      background-color: #e19f25;
    }
  }
`;

const StyledDesktopStep = styled(Step)`
  && {
    .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
      color: #e19f25 !important;
    }

    .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
      color: #e19f25 !important;
    }
  }
`;

const CustomSteppers = ({ currentStep, stepTitles }) => {
  const medium = useMediaQuery("(min-width: 600px)");

  const MobileSteps = () => (
    <>
      <Typography variant="h6">{stepTitles[currentStep]}</Typography>
      <StyledMobileStepper
        sx={{ width: "100%" }}
        variant="progress"
        steps={4}
        position="static"
        activeStep={currentStep}
      />
    </>
  );

  const DesktopSteps = () => (
    <Stepper activeStep={currentStep}>
      {stepTitles.map((_, index) => {
        return (
          <StyledDesktopStep key={index} completed={currentStep > index}>
            <StepLabel>{stepTitles[index]}</StepLabel>
          </StyledDesktopStep>
        );
      })}
    </Stepper>
  );

  return <>{medium ? <DesktopSteps /> : <MobileSteps />}</>;
};

export default CustomSteppers;
