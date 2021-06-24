import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

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
  category: yup.string("Enter Category").required("Category is required!"),
  itemName: yup.string("Enter item name").required("Item Name is required!"),
  condition: yup.string().required("item condition is required"),
});
export const FormPersonalDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [categories, setCategories] = React.useState([]);

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
            <Grid container >
              <Grid item xs={6} md={6} style={{ margin: "2rem 1rem 2rem 5rem" }}>
                {/* category */}
                <div style={{ marginBottom: "2rem" }}>
                  <InputLabel
                    style={{ margin: "0.5rem 0" }}
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    <strong>What are you posting?</strong>
                  </InputLabel>

                  <FormControl
                    error={touched.category && Boolean(errors.category)}
                    fullWidth
                    size="small"
                    variant="outlined"
                    className={classes.selectFormControl}
                  >
                    <Select
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.category}
                      inputProps={{
                        name: "category",
                      }}
                      id="category"
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      value={values.category}
                      // onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem,
                        }}
                      >
                        Category
                      </MenuItem>
                      {categories.map((category) => (
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value={category._id}
                          key={category._id}
                        >
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.category && (
                      <FormHelperText>{errors.category}</FormHelperText>
                    )}
                  </FormControl>
                </div>

                {/* item name */}
                <div style={{ marginBottom: "2rem" }}>
                  <InputLabel
                    style={{ margin: "0.5rem 0" }}
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    <strong>What is your item name?</strong>
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    id="itemName"
                    name="itemName"
                    value={values.itemName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.itemName && Boolean(errors.itemName)}
                    helperText={touched.itemName && errors.itemName}
                  />
                </div>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    {/* item Condition */}
                    <div style={{ marginBottom: "2rem" }}>
                      <InputLabel
                        style={{ margin: "0.5rem 0" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        <strong>Item Condition</strong>
                      </InputLabel>

                      <FormControl
                        error={touched.condition && Boolean(errors.condition)}
                        variant="outlined"
                        fullWidth
                        size="small"
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          // onBlur={handleBlur}
                          onChange={handleChange}
                          // error={touched.condition && errors.condition}
                          // helperText={touched.condition && errors.condition}
                          value={values.condition}
                          inputProps={{
                            name: "condition",
                            id: "condition",
                          }}
                        >
                          <MenuItem
                            disabled
                            classes={{
                              root: classes.selectMenuItem,
                            }}
                          >
                            condition
                          </MenuItem>
                          {conditions.map((condition) => (
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected,
                              }}
                              value={condition}
                              key={condition}
                            >
                              {condition}
                            </MenuItem>
                          ))}
                        </Select>
                        {touched.condition && (
                          <FormHelperText>{errors.condition}</FormHelperText>
                        )}
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    {/* quantity */}
                    <div style={{ marginBottom: "2rem" }}>
                      <InputLabel
                        style={{ margin: "0.5rem 0" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        <strong>Total Available Quantity</strong>
                      </InputLabel>
                      <TextField
                        variant="outlined"
                        fullWidth
                        size="small"
                        id="quantity"
                        name="quantity"
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 1000 } }}
                      />
                    </div>
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
              <Grid item xs={6} md={4} style={{ margin: "2rem 5rem 2rem 1rem" }}>
                <div style={{ marginBottom: "2rem" }}>
                  <InputLabel
                    style={{ margin: "0.5rem 0" }}
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    <strong>Where will your item be when rented?</strong>
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    id="address"
                    name="address"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // error={touched.username && Boolean(errors.username)}
                    // helperText={touched.username && errors.username}
                  />
                </div>
                <img
                  style={{ margin: "1rem ", width: "100%", height: "50%" }}
                  src={
                    "https://images.unsplash.com/photo-1577086664693-894d8405334a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80"
                  }
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
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

FormPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
