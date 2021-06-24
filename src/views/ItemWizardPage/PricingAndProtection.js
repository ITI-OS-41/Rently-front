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
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
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
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [status, setStatus] = React.useState(0); // 0: no show, 1: show yes, 2: show no.

  const radioHandler = (status) => {
    setStatus(status);
  };
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
          <div className={classes.title}>
            <h3>Radio Buttons</h3>
          </div>
          <div
            className={
              classes.checkboxAndRadio +
              " " +
              classes.checkboxAndRadioHorizontal
            }
          >
            <Card>
              <CardBody>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
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
                  label="Insurance Policy"
                />
                {selectedEnabled === "a" && (
                  <div>
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
                  </div>
                )}
              </CardBody>
            </Card>
          </div>
          <div
            className={
              classes.checkboxAndRadio +
              " " +
              classes.checkboxAndRadioHorizontal
            }
          >
            <FormControlLabel
              control={
                <Radio
                  checked={selectedEnabled === "b"}
                  onChange={() => setSelectedEnabled("b")}
                  value="b"
                  name="radio button enabled"
                  aria-label="B"
                  icon={
                    <FiberManualRecord className={classes.radioUnchecked} />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
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
              label="Security Deposit"
            />
          </div>
          <div
            className={
              classes.checkboxAndRadio +
              " " +
              classes.checkboxAndRadioHorizontal
            }
          >
            <FormControlLabel
              control={
                <Radio
                  checked={selectedEnabled === "c"}
                  onChange={() => setSelectedEnabled("c")}
                  value="c"
                  name="radio button enabled"
                  aria-label="C"
                  // icon={
                  //   <FiberManualRecord className={classes.radioUnchecked} />
                  // }
                  // checkedIcon={
                  //   <FiberManualRecord className={classes.radioChecked} />
                  // }
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
              label="No Protection Needed"
            />
            {selectedEnabled === "c" && (
              <div>
                <p>
                  Having no coverage for your item is totally up to you. This
                  option is usually recommended for hard-to-damage items. Choose
                  this option if you are comfortable negotiating with renters.
                </p>
              </div>
            )}
          </div>
          <div
            className={
              classes.checkboxAndRadio +
              " " +
              classes.checkboxAndRadioHorizontal
            }
          ></div>
        </Grid>
      </Grid>
    </div>
  );
}
