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
  cancellation: yup.string().required("cancellation policy is required"),
  isDeliverable: yup.string().required("delivery option is required"),
});
export const CancellationAndDelivery = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [direction, setDirection] = useState("back");
  const [delivery, setDelivery] = useState("false");
  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form className={classes.form}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <div style={{ margin: "3rem 2rem 1rem 3rem" }}>
                  <div>
                    <h4>
                      <strong>Cancellation Policy</strong>
                      <hr />
                    </h4>
                  </div>
                  {/*  */}
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                      <div style={{ marginBottom: "2rem" }}>
                        {/* easy going */}
                        <Card style={{ height: "11rem" }}>
                          <CardBody>
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={values.cancellation === "easygoing"}
                                  onChange={handleChange}
                                  value="easygoing"
                                  name="cancellation"
                                  aria-label="Easygoing"
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
                              label="Easy-Going"
                            />
                            <div>
                              <p>
                                Full refund will be issued if cancelled greater
                                than 2 days before
                              </p>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      {/* reasonable */}
                      <div style={{ marginBottom: "2rem" }}>
                        <Card style={{ height: "11rem" }}>
                          <CardBody>
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={values.cancellation === "reasonable"}
                                  value="reasonable"
                                  onChange={handleChange}
                                  name="cancellation"
                                  aria-label="Reasonable"
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
                              label="Reasonable"
                            />

                            <div>
                              <p>
                                Full refund will be issued if cancelled greater
                                than 4 days before
                              </p>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      {/* strict */}
                      <div style={{ marginBottom: "2rem" }}>
                        <Card style={{ height: "11rem" }}>
                          <CardBody>
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={values.cancellation === "strict"}
                                  onChange={handleChange}
                                  value="strict"
                                  name="cancellation"
                                  aria-label="Strict"
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
                              label="Strict"
                            />

                            <div>
                              <p>
                                50% will be refunded if cancelled greater than 7
                                days before
                              </p>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </Grid>
                  </Grid>
                  {!values.cancellation && (
                    <FormHelperText style={{ color: "#f44336" }}>
                      {errors.cancellation}
                    </FormHelperText>
                  )}
                </div>
              </Grid>
              {/* second grid */}
              <Grid item xs={6} md={6}>
                {/* delivery */}
                <div style={{ margin: "3rem 3rem 1rem 3rem" }}>
                  <div>
                    <h4>
                      <strong>Delivery</strong>
                    </h4>
                    <hr />
                  </div>

                  {/* item name */}
                  <div style={{ marginBottom: "2rem" }}>
                    <strong> Can you deliver this item?</strong>

                    <Card>
                      <CardBody>
                        <FormControlLabel
                          control={
                            <Radio
                              checked={values.isDeliverable === "true"}
                              onChange={handleChange}
                              value="true"
                              name="isDeliverable"
                              aria-label="True"
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
                          label="yes"
                        />
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <FormControlLabel
                          control={
                            <Radio
                              checked={values.isDeliverable === "false"}
                              onChange={handleChange}
                              value={delivery}
                              name="isDeliverable"
                              aria-label="False"
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
                          label="No"
                        />
                      </CardBody>
                    </Card>
                  </div>

                  {!values.isDeliverable && (
                    <FormHelperText style={{ color: "#f44336" }}>
                      {errors.isDeliverable}
                    </FormHelperText>
                  )}
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

CancellationAndDelivery.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
