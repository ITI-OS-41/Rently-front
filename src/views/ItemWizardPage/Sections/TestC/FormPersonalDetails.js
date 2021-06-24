import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

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
  occupation: yup.string().required("occupation is required!"),
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
            <Grid container spacing={2}>
              <Grid item xs={6} md={7}>
                {/* <FormControl
                  error={touched.category && Boolean(errors.category)}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel>category</InputLabel>
                  <Select
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.category}
                    label="category"
                    inputProps={{
                      name: "category",
                    }}
                  >
                    <option value="" />

                    {categories.map((category) => {
                      return (
                        <option
                          key={category._id}
                          aria-label={category.name}
                          value={category._id}
                        >
                          {category.name}
                        </option>
                      );
                    })}
                  </Select>
                  {touched.category && (
                    <FormHelperText>{errors.category}</FormHelperText>
                  )}
                </FormControl> */}
                <InputLabel
                  style={{ margin: "1rem" }}
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  What are you posting?
                </InputLabel>

                <FormControl
                  error={touched.category && Boolean(errors.category)}
                  style={{ margin: "1rem" }}
                  variant="outlined"
                  fullWidth
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
                <Field
                  name="occupation"
                  label="Occupation"
                  margin="normal"
                  as={TextField}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.occupation && errors.occupation}
                  helperText={touched.occupation && errors.occupation}
                />
                <Field
                  name="city"
                  label="City"
                  margin="normal"
                  as={TextField}
                />
                <Field name="bio" label="Bio" margin="normal" as={TextField} />
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
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
              </Grid>
            </Grid>
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
