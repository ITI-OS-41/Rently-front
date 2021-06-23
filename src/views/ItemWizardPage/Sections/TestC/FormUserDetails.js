import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "./Header";
import { Button } from "@material-ui/core";
import * as yup from "yup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { get } from "functions/request";

const useStyles = makeStyles(presentationStyle);

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your firstname")
    .required("firstname is required"),
  category: yup.string("Enter cate").ensure().required("Category is required!"),
  subCategory: yup
    .string()
    .nullable()
    .required("subCategory is required")
    .max(20),
  item: yup.string().required("item is required"),
});

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryError, setSelectedCategoryError] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [item, setItem] = useState({});

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
  const classes = useStyles();
  return (
    <>
      <Header title="Enter User Details" />
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <Field
              name="firstName"
              label="First Name *"
              margin="normal"
              as={TextField}
              error={touched.firstName && errors.firstName}
              helperText={touched.firstName && errors.firstName}
            />
            <InputLabel
              style={{ margin: "1rem" }}
              htmlFor="simple-select"
              className={classes.selectLabel}
            >
              What are you posting?
            </InputLabel>
            <FormControl
              style={{ margin: "1rem" }}
              variant="outlined"
              fullWidth
              className={classes.selectFormControl}
            >
              <Select
               name="category"
                error={touched.category && errors.category}
                helperText={touched.category && errors.category}
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={item.category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                id="category"
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
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Field
              name="lastName"
              label="Last Name *"
              margin="normal"
              as={TextField}
              error={touched.category && errors.category}
              helperText={touched.category && errors.category}
            />
            <Field
              type="email"
              name="email"
              label="Email *"
              margin="normal"
              as={TextField}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
