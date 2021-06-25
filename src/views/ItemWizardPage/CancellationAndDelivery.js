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
  // cancellation: yup.string().required("cancellation policy is required"),
  // isDeliverable: yup.string().required("delivery option is required"),
});
export const CancellationAndDelivery = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [delivery, setDelivery] = React.useState("b");
  const [cancellation, setCancellation] = React.useState("a");

  const [direction, setDirection] = useState("back");
  useEffect(() => {
    get("/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

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
              <Grid
                item
                xs={6}
                md={6}
                style={{ margin: "2rem 2rem 2rem 2rem" }}
              >
                <div style={{ marginBottom: "2rem" }}>
                  <h4>
                    <strong>Cancellation Policy</strong>
                    <hr />
                  </h4>
                </div>
                {/*  */}
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={6} md={4}>
                    <div style={{ marginBottom: "2rem" }}>
                      {/* easy going */}
                      <Card>
                        <CardBody>
                          <FormControlLabel
                            control={
                              <Radio
                                checked={cancellation === "a"}
                                onChange={() => setCancellation("a")}
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
                      <Card>
                        <CardBody>
                          <FormControlLabel
                            control={
                              <Radio
                                checked={cancellation === "b"}
                                onChange={() => setCancellation("b")}
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
                      <Card>
                        <CardBody>
                          <FormControlLabel
                            control={
                              <Radio
                                checked={cancellation === "c"}
                                onChange={() => setCancellation("c")}
                                value="c"
                                name="radio button enabled"
                                aria-label="C"
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
                {console.log(cancellation)}
                {/* {touched.cancellation && (
                  <FormHelperText>{errors.cancellation}</FormHelperText>
                )} */}
              </Grid>

              {/* second grid */}
              <Grid
                item
                xs={6}
                md={4}
                style={{ margin: "2rem 2rem 2rem 2rem" }}
              >
                {/* delivery */}
                <div style={{ marginBottom: "2rem" }}>
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
                            checked={delivery === "a"}
                            onChange={() => setDelivery("a")}
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
                        label="yes"
                      />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={delivery === "b"}
                            onChange={() => setDelivery("b")}
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
                        label="No"
                      />
                    </CardBody>
                  </Card>
                </div>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    {/* quantity */}
                    <div style={{ marginBottom: "2rem" }}></div>
                  </Grid>
                </Grid>
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

CancellationAndDelivery.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
};
