/*eslint-disable*/
import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Parallax from "components/Parallax/Parallax.js";
import { Formik, Form } from "formik";
import * as yup from "yup";
import PricingAndProtection from "./PricingAndProtection";
import Copy from "./PostIemModifiedcopy";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Button,
  TextField,
  FormHelperText,
  FormControlLabel,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import BasicInfo from "./BasicInfo";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import { get } from "functions/request";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(presentationStyle);
const conditions = ["perfect", "very good", "descent", "good", "fair"];
const validationSchema = yup.object().shape({
  category: yup.string().ensure().required("Category is required!"),
  subCategory: yup.string().ensure().required("Sub-Category is required!"),
  condition: yup.string().ensure().required("Item Condition is required!"),

  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your password again")
    .oneOf(
      [yup.ref("password")],
      "Confirm Password must be matched with password"
    ),
  terms: yup
    .boolean()
    .oneOf([true], "You must agree to terms and conditions to continue"),
});

const initialValues = {
  category: "",
  subCategory: "hassan",
  condition: "hsn",
};

export default function PostItemModified() {
  const [checked, setChecked] = React.useState([1]);
  const [simpleSelect, setSimpleSelect] = React.useState("");

  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
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
  const submitForm = (values) => {
    setIsRequesting(true);

    post("api/item", values, "created Item successfully!")
      .then((response) => {
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsRequesting(false);
      });
  };
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Copy />;
      case 1:
        return <BasicInfo />;
      // return <PostingDetails />;
      case 2:
        return <PricingAndProtection />;

      default:
        return "unknown";
    }
  }
  useEffect(() => {
  setItem((prevState) => ({
      ...prevState,
      category: selectedCategory,
      subcategory: selectedSubCategory,
      condition: selectedCondition,
    }));
    console.log("hsn", item);
  }, [selectedCategory, selectedSubCategory, selectedCondition]);

  useEffect(() => {
    get("category").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    selectedCategory &&
      get(`subcategory?category=${selectedCategory}`).then((res) => {
        setSubCategories(res.data);
      });
  }, [selectedCategory]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Parallax
        image={require("assets/img/bg4.jpg").default}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Post Your Item
                  {/* <span className={classes.proBadge}>PRO</span> */}
                </h1>
                <h3 className={classes.title}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(
          classes.main,
          classes.mainRaised,
          classes.container
        )}
      >
        {/* <BasicInfo/> */}
        <Formik
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                {/* <Stepper alternativeLabel activeStep={activeStep}>
                  {console.log(activeStep)}
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper> */}
                {/*  */}
                {/* <BasicInfo/> */}

                <React.Fragment>
                  {activeStep === steps.length ? (
                    "<CheckoutSuccess />"
                  ) : (
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting }) => (
                        <Form id="next">
                          {getStepsContent(activeStep)}

                          <div className={classes.buttons}>
                         
                            {/* <div className={classes.wrapper}>
                              <Button
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                              >
                                {isLastStep ? "Place order" : "Next"}
                              </Button>
                              {isSubmitting && (
                                <CircularProgress
                                  size={24}
                                  className={classes.buttonProgress}
                                />
                              )}
                            </div> */}
                          </div>
                        </Form>
                      )}
                    </Formik>
                  )}
                </React.Fragment>
              </form>
            );
          }}
        </Formik>
      </div>

      <Footer />
    </div>
  );
}
