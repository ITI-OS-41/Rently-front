import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Map from "../../components/Map/Map";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
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

import * as yup from "yup";
import CheckoutForm from "components/Checkout/CheckoutForm";
const conditions = ["perfect", "very good", "descent", "good", "fair"];
const promise = loadStripe(
  "pk_test_51J72gVH4P1CollSvrHWgJ2OyJNqEdMQlk88ALoMM1SkrZtVrcgtKJt4uc2eOxrtbumeCSIDxbqymaeu5bgxotVlf00Fjhgz1hc"
);

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
  subcategory: yup
    .string("Enter Sub-Category")
    .required("sub-Category is required!"),
  name: yup.string("Enter item name").required("Item Name is required!"),
  condition: yup.string().required("item condition is required"),
  stock: yup.number().positive().required("This field is required"),
});
export const BasicInfo = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  address,
  coordinates,
}) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const { itemName } = formData;
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [item, setItem] = useState({});

  const [direction, setDirection] = useState("back");

  const initialValues = {
    ...formData,
    subcategory: formData?.subcategory?._id,
  };
  let [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    get("/category?model=item&limit=9999").then((response) => {
      setCategories(response.data.res);
    });
  }, []);

  useEffect(() => {
    get(`/subcategory?category=${formValues.category}`).then((response) => {
      setSubcategories(response.data.res);
    });
  }, [formValues]);

  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          values.cat = cat;
          values.subCat = subCat;
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        validationSchema={validationSchema}
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
            setFieldValue,
          } = props;
          const onChange = (e) => {
            const targetEl = e.target;
            const fieldName = targetEl.name;

            setFormValues({
              ...formValues,
              ...cat,
              [fieldName]: targetEl.value,
            });
            return handleChange(e);
          };
          return (
            <Form className={classes.form}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <div style={{ margin: "3rem 2rem 1rem 3rem" }}>
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
                          onChange={onChange}
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
                          {categories
                            // .filter(
                            //   (category) => category.subcategory.length > 0
                            // )
                            .map((category) => (
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected,
                                }}
                                value={category._id}
                                key={category._id}
                              >
                                {category.name}
                                {setCat(category.name)}
                              </MenuItem>
                            ))}
                        </Select>
                        {touched.category && (
                          <FormHelperText>{errors.category}</FormHelperText>
                        )}
                      </FormControl>
                    </div>

                    {/* subCategory */}
                    <div style={{ marginBottom: "2rem" }}>
                      <InputLabel
                        style={{ margin: "0.5rem 0" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        <strong>Select Sub-Category</strong>
                      </InputLabel>

                      <FormControl
                        error={
                          touched.subcategory && Boolean(errors.subcategory)
                        }
                        fullWidth
                        size="small"
                        variant="outlined"
                        className={classes.selectFormControl}
                      >
                        <Select
                          disabled={!values.category.length}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.subcategory}
                          inputProps={{
                            name: "subcategory",
                          }}
                          id="subcategory"
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                        >
                          <MenuItem
                            disabled
                            classes={{
                              root: classes.selectMenuItem,
                            }}
                          >
                            subcategory
                          </MenuItem>
                          {subcategories.map((subcategory) => (
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected,
                              }}
                              value={subcategory._id}
                              key={subcategory._id}
                            >
                              {subcategory.name}
                              {setSubCat(subcategory.name)}

                            </MenuItem>
                          ))}
                        </Select>
                        {touched.subcategory && (
                          <FormHelperText>{errors.subcategory}</FormHelperText>
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
                        id="name"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
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
                            error={
                              touched.condition && Boolean(errors.condition)
                            }
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
                              onChange={handleChange}
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
                              <FormHelperText>
                                {errors.condition}
                              </FormHelperText>
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
                            id="stock"
                            name="stock"
                            type="number"
                            InputProps={{ inputProps: { min: 1, max: 1000 } }}
                            value={values.stock}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.stock && Boolean(errors.stock)}
                            helperText={touched.stock && errors.stock}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                {/* second grid */}
                <Grid item xs={6} md={6}>
                  <div style={{ margin: "3rem 3rem 1rem 3rem" }}>
                    <div style={{ marginBottom: "2rem" }}>
                      <InputLabel
                        style={{ margin: "0.5rem 0" }}
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        <strong>Where will your item be when rented?</strong>
                      </InputLabel>
                      
                    </div>

                   
                    <Map changeCoordinates={(pos,address)=>{setFieldValue("location",{
                      type:"Point",
                      coordinates:[pos.lat,pos.lng],
                      address:address
                    })}}/>

                    
                  </div>
                </Grid>
              </Grid>

              <div style={{ marginBottom: "3rem" }}>
                <Button
                  disabled
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
          );
        }}
      </Formik>
    </>
  );
};

BasicInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
