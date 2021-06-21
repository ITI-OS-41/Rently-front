/*eslint-disable*/
import React from "react";
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

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const [simpleSelect, setSimpleSelect] = React.useState("");

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const handleSimple = (event) => {
    setSimpleSelect(event.target.value);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Post Item</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={10}>
                      <CustomLinearProgress
                        variant="determinate"
                        color="primary"
                        value={4}
                      />
                      <form className={classes.form}>
                        
                          <Box mb={2} >
                            <FormControl
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
                                value={simpleSelect}
                                onChange={handleSimple}
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
                                  Select category
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
                          </Box>
                        
                        <Box mb={2} >
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              Select Sub-Category
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu,
                              }}
                              classes={{
                                select: classes.select,
                              }}
                              value={simpleSelect}
                              onChange={handleSimple}
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
                                Select Sub-Category
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
                        </Box>
                        <Box mb={2} >
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              Single Select
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu,
                              }}
                              classes={{
                                select: classes.select,
                              }}
                              value={simpleSelect}
                              onChange={handleSimple}
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
                          <CustomInput
                            labelText="What is your item name?"
                            id="float"
                            formControlProps={{
                              fullWidth: true,
                              spacing: 4,
                            }}
                          />
                        </Box>
                        <Box mb={2} >
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
                                  onChange={handleSimple}
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
                        
                        <Box mt={2} p={2} >
                        <div className={classes.textCenter}>
                          <Button round color="default">
                            Back
                          </Button>
                          <Button round color="primary">
                           Next
                          </Button>
                        </div>
                     </Box>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=mkpr-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=mkpr-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://www.creative-tim.com?ref=mkpr-signup"
                  target="_blank"
                >
                  Creative Tim
                </a>{" "}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
