import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Headerr from "./RentHeader";
import { FormHelperText, FormControl, InputLabel, Select, Typography, Button, TextField, FormControlLabel } from '@material-ui/core';

import * as yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { get } from "functions/request";

const useStyles = makeStyles(presentationStyle);
const conditions = ["perfect", "very good", "descent", "good", "fair"];

const validationSchema = yup.object({
  category: yup.string().required("Category is required!"),
  subCategory: yup.string().ensure().required("subCategory is required!"),
  itemName: yup.string().required("item name is required"),
  condition: yup.string().nullable().required("item condition is required"),
  quantity: yup
    .number()
    .positive("quantity must be greater than zero")
    .required(`quantity is required`),
});

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [item, setItem] = useState({});

  // useEffect(() => {
  //   setItem((prevState) => ({
  //     ...prevState,
  //     category: selectedCategory,
  //     subcategory: selectedSubCategory,
  //     condition: selectedCondition,
  //   }));
  // }, [selectedCategory, selectedSubCategory, selectedCondition]);

  useEffect(() => {
    get("category").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // useEffect(() => {
  //   selectedCategory &&
  //     get(`subcategory?category=${selectedCategory}`).then((res) => {
  //       setSubCategories(res.data);
  //     });
  // }, [selectedCategory]);
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          console.log("values ",values);
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={7}>
               
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
                    name="category"
                    id="category"
                    // onBlur={handleBlur}
                    onChange={handleChange}
                    // error={touched.category && errors.category}
                    // helperText={touched.category && errors.category}
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={item.category}
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
                {touched.category && <FormHelperText>{errors.category}</FormHelperText>}

                </FormControl>

                {/* <InputLabel
                  style={{ margin: "1rem" }}
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  SubCategory
                </InputLabel>
                <FormControl
                  style={{ margin: "1rem" }}
                  variant="outlined"
                  fullWidth
                  className={classes.selectFormControl}
                >
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={item.subCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    inputProps={{
                      name: "subCategory",
                      id: "subCategory",
                    }}
                    // error={touched.subCategory && errors.subCategory}
                    // helperText={touched.subCategory && errors.subCategory}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem,
                      }}
                    >
                      Sub-Category
                    </MenuItem>
                    {subCategories.map((subcategory) => (
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value={subcategory._id}
                        key={subcategory._id}

                      >
                        {subcategory.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                <InputLabel
                  style={{ margin: "1rem" }}
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  What is your item name?
                </InputLabel>
                <TextField
                  margin="normal"
                  style={{ margin: "1rem" }}
                  variant="outlined"
                  fullWidth
                  id="itemName"
                  name="itemName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.itemName && Boolean(errors.itemName)}
                  helperText={touched.itemName && errors.itemName}
                />
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    {/* <InputLabel
                      style={{ margin: "1rem" }}
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Item Condition
                    </InputLabel>

                    <FormControl
                      style={{ margin: "1rem" }}
                      variant="outlined"
                      fullWidth
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
                        onChange={(e) => setSelectedCondition(e.target.value)}
                        // error={touched.condition && errors.condition}
                        // helperText={touched.condition && errors.condition}
                        value={item.condition}
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
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel
                      style={{ margin: "1rem" }}
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Total Available Quantity
                    </InputLabel>
                    <TextField
                      style={{ margin: "1rem" }}
                      variant="outlined"
                      fullWidth
                      id="quantity"
                      name="quantity"
                      type="number"
                      // value={values.username}
                      // onBlur={handleBlur}
                      // onChange={handleChange}
                      // error={touched.quantity && errors.quantity}
                      // helperText={touched.quantity && errors.quantity}
                    /> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={5}>
                <InputLabel
                  style={{ margin: "1rem" }}
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  Where will your item be when rented?
                </InputLabel>
                <TextField
                  style={{ margin: "1rem" }}
                  variant="outlined"
                  fullWidth
                  id="address"
                  name="address"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // error={touched.username && Boolean(errors.username)}
                  // helperText={touched.username && errors.username}
                />

                <img
                  style={{ margin: "1rem 0" }}
                  src={
                    "https://images.unsplash.com/photo-1577086664693-894d8405334a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80"
                  }
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </Grid>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Continue
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
