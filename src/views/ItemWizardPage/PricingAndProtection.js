import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Accordion from "components/Accordion/Accordion.js";
import HelpIcon from "@material-ui/icons/Help";
import { get } from "functions/request";
import theme from "assets/theme";
import outerTheme from "assets/theme";
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

export default function basicInfoCopy() {
  const [selectedCategory, setSelectedCategory] = useState(null);
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
      <Grid container spacing={4}>
        <Grid item xs={6} md={7}>
          <Accordion
            activeColor="rose"
            collapses={[
              {
                title: `How do I determine my rates?`,
                content: `Daily rates are usually 10% or 15% of the item value.
                          Weekly rates are usually 4x the daily rate.
                          Don't set the monthly rate any higher than 50% of the item value when new.`,
              },
            ]}
          />
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
                hourly
              </InputLabel>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
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
            <Grid item xs={2}>
              <InputLabel
                style={{ margin: "1rem" }}
                htmlFor="simple-select"
                className={classes.selectLabel}
              >
                daily
              </InputLabel>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
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
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <InputLabel
                style={{ margin: "1rem" }}
                htmlFor="simple-select"
                className={classes.selectLabel}
              >
                weekly
              </InputLabel>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
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
                variant="outlined"
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
          <hr />
        </Grid>

        <Grid item xs={6} md={5}>
          <h4>
            <strong>Protection</strong>
          </h4>
          <TextField
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
        </Grid>
      </Grid>
    </div>
  );
}
