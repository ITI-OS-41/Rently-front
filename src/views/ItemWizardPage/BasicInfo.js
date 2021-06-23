import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { get } from "functions/request";
import { Formik } from "formik";
import * as yup from "yup";

import {
  Typography,
  Button,
  TextField,
  FormHelperText,
  FormControlLabel,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles(presentationStyle);
const conditions = ["perfect", "very good", "descent", "good", "fair"];

const validationSchema = yup.object().shape({
  category: yup.string().nullable().required(`category is required`),
  subCategory: yup.string().nullable().required(`sub category is required`),
  condition: yup.string().nullable().required(`condition is required`),
  item: yup
    .string("Enter your item name")
    .min(3, "item name should be of minimum 3 characters length")
    .required("item name is required"),
});

const initialValues = {
  category: "",
  subCategory: "",
  condition: "",
  item: "",
};

export default function basicInfo() {
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
    <div>
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
              value={item.category}
              onChange={(e) => setSelectedCategory(e.target.value)}
              inputProps={{
                name: "category",
                id: "category",
              }}
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
          <InputLabel
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
                name: "category",
                id: "category",
              }}
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
                >
                  {subcategory.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <InputLabel
            style={{ margin: "1rem" }}
            htmlFor="simple-select"
            className={classes.selectLabel}
          >
            What is your item name?
          </InputLabel>
          <TextField
            style={{ margin: "1rem" }}
            variant="outlined"
            fullWidth
            id="username"
            name="username"
            // value={values.username}
            // onBlur={handleBlur}
            // onChange={handleChange}
            // error={touched.username && Boolean(errors.username)}
            // helperText={touched.username && errors.username}
          />

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <InputLabel
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
                  value={item.condition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
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
                id="username"
                name="username"
                type="number"
                // value={values.username}
                // onBlur={handleBlur}
                // onChange={handleChange}
                // error={touched.username && Boolean(errors.username)}
                // helperText={touched.username && errors.username}
              />
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
            id="username"
            name="username"
            // value={values.username}
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
      </Grid>
    </div>
  );
}
