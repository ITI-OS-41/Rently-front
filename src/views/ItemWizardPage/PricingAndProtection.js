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
  deposit: yup.number().positive().required("deposit is required"),
  day: yup.number().positive().required("daily is required"),
  hour: yup.number().positive(),
  month: yup.number().positive(),
  week: yup.number().positive(),
  // price: yup.number().required("price is required"),
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
            month: values.month || "",
          };

          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form className={classes.form}>
            <Grid container>
              <Grid item xs={6} md={6}>
                {/* Accordion */}
                <div style={{ margin: "3rem 2rem 1rem 3rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <Card>
                      <div style={{ padding: "0 1rem" }}>
                        <Accordion
                          activeColor="rose"
                          collapses={[
                            {
                              title: `  How do I determine my rates?`,
                              content: `Daily rates are usually 10% or 15% of the item value.Weekly rates are usually 4x the daily rate.Don't set the monthly rate any higher than 50% of the item value when new.`,
                            },
                          ]}
                        />
                      </div>
                    </Card>
                  </div>

                  {/* pricing */}
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
                          Daily
                        </InputLabel>
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          InputProps={{
                            inputProps: { min: 1 },
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
                      <Grid item xs={2}>
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
                            inputProps: { min: 1 },
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
                    </Grid>
                    <Grid container spacing={4}>
                      <Grid item xs={3}>
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
                            inputProps: { min: 1 },
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
                </div>
              </Grid>

              {/* second grid */}
              <Grid item xs={6} md={6}>
                <div style={{ margin: "3rem 3rem 1rem 3rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <h4>
                      <strong>Protection</strong>
                      <hr />
                    </h4>
                    <Card>
                      <CardBody>
                        <div>
                          <p>
                            <strong>Deposits </strong>are great for low value
                            items under $100. Collect a security deposit to help
                            minimize your loss in the event of theft or damage.
                          </p>
                          <TextField
                            InputProps={{
                            inputProps: { min: 1 },
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
                            value={values.deposit}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.deposit && Boolean(errors.deposit)}
                            helperText={touched.deposit && errors.deposit}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div style={{ marginBottom: "3rem" }}>
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
