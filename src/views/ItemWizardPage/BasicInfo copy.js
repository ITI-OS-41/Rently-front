/*eslint-disable*/
import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/bg7.jpg";
import { get } from "functions/request";

const useStyles = makeStyles(signupPageStyle);
const conditions = ["perfect", "very good", "descent", "good", "fair"];

export default function BasicInfo(props) {
  const [checked, setChecked] = React.useState([1]);
  const [simpleSelect, setSimpleSelect] = React.useState("");

  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);

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

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div {...props}>
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={5} md={10}>
                  <form className={classes.form}>
                    <Box mb={2}>
                      {/* <FormControl
                        variant="outlined"
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          What are you posting?
                        </InputLabel>
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
                        </Select> */}
                      {/* </FormControl> */}
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          Age
                        </InputLabel>
                        <Select
                          native
                          label="Age"
                          inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box mb={2}>
                      <FormControl
                        variant="outlined"
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          labelWidth={150}
                          htmlFor="subCategory"
                          className={classes.selectLabel}
                        >
                          subCategory
                        </InputLabel>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={item.subCategory}
                          onChange={(e) =>
                            setSelectedSubCategory(e.target.value)
                          }
                          inputProps={{
                            name: "subCategory",
                            id: "subCategory",
                          }}
                        >
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
                    </Box>

                    <Box mb={2}>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Condition
                        </InputLabel>
                        {console.log(item.condition)}
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
                    </Box>
                    <Box mb={2}>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        {/* <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              Single Select
                            </InputLabel> */}
                      </FormControl>
                      <CustomInput
                        labelText="What is your item name?"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                          spacing: 4,
                        }}
                      />
                    </Box>
                    <Box mb={2}>
                      <GridContainer justify="center" spacing={3}>
                        <GridItem xs={6} sm={6} md={6}>
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              What is your item condition?
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu,
                              }}
                              classes={{
                                select: classes.select,
                              }}
                              value={simpleSelect}
                              inputProps={{
                                name: "simpleSelect",
                                id: "simple-select",
                              }}
                            >
                              <MenuItem
                                disabled
                                classes={{
                                  root: classes.selectMenuItem,
                                }}
                              >
                                Single Select
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected,
                                }}
                                value="2"
                              >
                                Paris
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected,
                                }}
                                value="3"
                              >
                                Bucharest
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected,
                                }}
                                value="4"
                              >
                                Rome
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </GridItem>

                        <GridItem xs={6} sm={6} md={6}>
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <TextField
                              id="standard-number"
                              label="Total Available Quantity"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </FormControl>
                        </GridItem>
                      </GridContainer>
                    </Box>

                    {/* <Box mt={2} p={2} >
                        <div className={classes.textCenter}>
                          <Button round color="default">
                            Back
                          </Button>
                          <Button round color="primary">
                           Next
                          </Button>
                        </div>
                     </Box> */}
                  </form>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
