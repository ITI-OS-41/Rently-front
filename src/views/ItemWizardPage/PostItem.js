import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import BasicInfo from "./BasicInfo";
import PostingDetails from "./PostingDetails";
import PricingAndProtection from "./PricingAndProtection";
import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import image from "assets/img/bg7.jpg";
import Favorite from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(signupPageStyle);

export default function PostIem({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const [simpleSelect, setSimpleSelect] = React.useState("");

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const handleSimple = (event) => {
    setSimpleSelect(event.target.value);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const [activeStep, SetActiveStep] = useState(0);

  function getSteps() {
    return ["Basic Info", "Posting Details", "Pricing"];
  }
  const handleNext = () => {
    SetActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePrev = () => {
    SetActiveStep((nextActiveStep) => nextActiveStep - 1);
  };
  const steps = getSteps();
  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <BasicInfo />;
      case 1:
        return <PricingAndProtection />;
        // return <PostingDetails />;
      case 2:
        return <PricingAndProtection />;

      default:
        return "unknown";
    }
  }
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Post Item</h2>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={10} md={10}>
                    <Stepper alternativeLabel activeStep={activeStep}>
                      {console.log(activeStep)}
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </GridItem>
                </GridContainer>
                {/* item */}
                <Box mt={2} p={2}>
                  {/* <Button round color="default">
                    Back
                  </Button> */}
                  {/* <div className={classes.textCenter}>
                    {activeStep === steps.length ? (
                      "The Steps completed"
                    ) : (
                      <>
                        {getStepsContent(activeStep)}
                        <Button round color="default" onClick={handlePrev}>
                          {activeStep === steps.length ? "submit" : "next"}
                        </Button>
                      </>
                    )}
                  </div> */}
                  {/* <div className="buttons">
                    {page > 0 && (
                      <button type="button" onClick={this.previous}>
                        « Previous
                      </button>
                    )}
                    {!isLastPage && <button type="submit">Next »</button>}
                    {isLastPage && (
                      <button type="submit" disabled={submitting}>
                        Submit
                      </button>
                    )}
                  </div> */}
                </Box>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=mkpr-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=mkpr-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://www.creative-tim.com?ref=mkpr-signup"
                  target="_blank"
                >
                  Creative Tim
                </a>{" "}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    </div>

    // <div>
    //   <Stepper alternativeLabel activeStep={activeStep}>
    //     {console.log(activeStep)}
    //     {steps.map((label) => (
    //       <Step key={label}>
    //         <StepLabel>{label}</StepLabel>
    //       </Step>
    //     ))}
    //   </Stepper>
    //   <>
    //     {activeStep === steps.length ? (
    //       "The Steps completed"
    //     ) : (
    //       <>
    //         {getStepsContent(activeStep)}
    //         <Button onClick={handleNext}>
    //           {activeStep === steps.length ? "submit" : "next"}
    //         </Button>
    //       </>
    //     )}
    //   </>
    // </div>
  );
}
