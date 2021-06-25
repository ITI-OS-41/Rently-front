import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/global/Header";
import Parallax from "components/Parallax/Parallax.js";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

function getSteps() {
  return ["Basic Info", "Posting Details", "Pricing And Protection", "Confirm"];
}
const useStyles = makeStyles(presentationStyle);

export default function RentHeader({ component, label }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Parallax
        image={require("assets/img/bg4.jpg").default}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>Post Your Item</h1>
                <h3 className={classes.title}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer container spacing={3}>
        <GridItem>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.root}>{component}</div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
