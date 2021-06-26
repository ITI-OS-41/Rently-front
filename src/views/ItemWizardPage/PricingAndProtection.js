import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Accordion from "components/Accordion/Accordion.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Radio from "@material-ui/core/Radio";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DirectionsIcon from "@material-ui/icons/Directions";

import {
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Button,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import { get } from "functions/request";

// import { Header } from './Header';
import * as yup from "yup";
const conditions = ["perfect", "very good", "descent", "good", "fair"];

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const validationSchema = yup.object({
  hour: yup.number().positive(),
  day: yup.number().positive().required("This field is required"),
  month: yup.number().positive(),
  week: yup.number().positive(),
});
export const PricingAndProtection = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");

  const [direction, setDirection] = useState("back");
  useEffect(() => {
    get("/category").then((response) => {
      setCategories(response.data.res);
    });
  }, []);

  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          values.price = {
            hour: values.hour || "",
            day: values.day || "",
            week: values.week || "",
            month: values.day || "",
          };

          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form className={classes.form}>
            <Grid container>
              <Grid
                item
                xs={6}
                md={6}
                style={{ margin: "2rem 1rem 2rem 5rem" }}
              >
                {/* Accordion */}
                <div style={{ marginBottom: "2rem" }}>
                  <Card>
                    <Accordion
                      activeColor="rose"
                      collapses={[
                        {
                          title: `How do I determine my rates?`,
                          content: `Daily rates are usually 10% or 15% of the item value.Weekly rates are usually 4x the daily rate.Don't set the monthly rate any higher than 50% of the item value when new.`,
                        },
                      ]}
                    />
                  </Card>
                </div>

                {/* item name */}
                <div style={{ marginBottom: "2rem" }}>
                  <h4>
                    <strong>Rental Rates</strong>
                  </h4>
                  <hr />
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <InputLabel
                        style={{ margin: "1rem" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Hourly
                      </InputLabel>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        InputProps={{
                          inputProps: { min: 1, max: 1000 },
                          startAdornment: (
                            <InputAdornment position="start">
                              EGP
                            </InputAdornment>
                          ),
                        }}
                        size="small"
                        variant="outlined"
                        id="hour"
                        name="hour"
                        type="number"
                        value={values.hour}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.hour && Boolean(errors.hour)}
                        helperText={touched.hour && errors.hour}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <InputLabel
                        style={{ margin: "1rem" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Daily
                      </InputLabel>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        InputProps={{
                          inputProps: { min: 1, max: 1000 },
                          startAdornment: (
                            <InputAdornment position="start">
                              EGP
                            </InputAdornment>
                          ),
                        }}
                        size="small"
                        variant="outlined"
                        id="day"
                        name="day"
                        type="number"
                        value={values.day}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.day && Boolean(errors.day)}
                        helperText={touched.day && errors.day}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item xs={3}>
                      <InputLabel
                        style={{ margin: "1rem" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Weekly
                      </InputLabel>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        InputProps={{
                          inputProps: { min: 1, max: 1000 },
                          startAdornment: (
                            <InputAdornment position="start">
                              EGP
                            </InputAdornment>
                          ),
                        }}
                        size="small"
                        variant="outlined"
                        id="week"
                        name="week"
                        type="number"
                        value={values.week}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.week && Boolean(errors.week)}
                        helperText={touched.week && errors.week}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <InputLabel
                        style={{ margin: "1rem" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Monthly
                      </InputLabel>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        InputProps={{
                          inputProps: { min: 1, max: 1000 },
                          startAdornment: (
                            <InputAdornment position="start">
                              EGP
                            </InputAdornment>
                          ),
                        }}
                        size="small"
                        variant="outlined"
                        id="month"
                        name="month"
                        type="number"
                        value={values.month}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.month && Boolean(errors.month)}
                        helperText={touched.month && errors.month}
                      />
                    </Grid>
                  </Grid>
                </div>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    {/* quantity */}
                    <div style={{ marginBottom: "2rem" }}></div>
                  </Grid>
                </Grid>
                {/* <Field
                  name="occupation"
                  label="Occupation"
                  margin="normal"
                  as={TextField}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.occupation && errors.occupation}
                  helperText={touched.occupation && errors.occupation}
                /> */}
              </Grid>

              {/* second grid */}
              <Grid
                item
                xs={6}
                md={4}
                style={{ margin: "2rem 5rem 2rem 1rem" }}
              >
                <div style={{ marginBottom: "2rem" }}>
                  <h4>
                    <strong>Protection</strong>
                    <hr />
                  </h4>
                  <Card>
                    <CardBody>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedEnabled === "a"}
                            onChange={() => setSelectedEnabled("a")}
                            value="a"
                            name="radio button enabled"
                            aria-label="A"
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot,
                            }}
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot,
                        }}
                        label="Security Deposit"
                      />
                      {selectedEnabled === "a" && (
                        <div>
                          <p>
                            <strong>Deposits </strong>are great for low value
                            items under $100. Collect a security deposit to help
                            minimize your loss in the event of theft or damage.
                          </p>
                          <TextField
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  EGP
                                </InputAdornment>
                              ),
                            }}
                            size="small"
                            variant="outlined"
                            id="deposit"
                            name="deposit"
                            type="number"
                            // value={values.deposit}
                            // onBlur={handleBlur}
                            // onChange={handleChange}
                            // error={touched.deposit && Boolean(errors.deposit)}
                            // helperText={touched.deposit && errors.deposit}
                          />
                        </div>
                      )}
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedEnabled === "b"}
                            onChange={() => setSelectedEnabled("b")}
                            value="b"
                            name="radio button enabled"
                            aria-label="B"
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot,
                            }}
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot,
                        }}
                        label="No Protection Needed"
                      />
                      {selectedEnabled === "b" && (
                        <div>
                          <p>
                            Having no coverage for your item is totally up to
                            you. This option is usually recommended for
                            hard-to-damage items.
                          </p>
                          <p>
                            Choose this option if you are comfortable
                            negotiating with renters.
                          </p>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </div>
              </Grid>
            </Grid>

            <div>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                onClick={() => setDirection("back")}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => setDirection("forward")}
              >
                Continue
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

PricingAndProtection.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
