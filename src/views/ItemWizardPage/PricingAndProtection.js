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
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import ListItemText from "@material-ui/core/ListItemText";
import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import classNames from "classnames";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                  <GridContainer>
                    <GridItem xs={12} sm={5} md={6}>
                      <h3 className={classes.title}>Rental Rates</h3>
                      <hr />
                      <Grid item xs={12} sm={5} md={6}>
                        <InputLabel>Daily</InputLabel>
                        <TextField
                          variant="outlined"
                          fullWidth
                          type="number"
                          id="daily"
                          name="daily"
                        />

                        <InputLabel>weekly</InputLabel>
                        <TextField
                          variant="outlined"
                          fullWidth
                          type="number"
                          id="weekly"
                          name="weekly"
                        />
                        <InputLabel>Monthly</InputLabel>
                        <TextField
                          variant="outlined"
                          type="number"
                          id="monthly"
                          name="monthly"
                        />
                        <hr />
                        <InputLabel>Minimum amount per rental</InputLabel>
                        <TextField
                          variant="outlined"
                          fullWidth
                          type="number"
                          id="min"
                          name="min"
                        />
                      </Grid>
                    </GridItem>
                    <GridItem xs={12} sm={4} md={6}>
                      <h3 className={classes.title}>Protection</h3>
                      <hr />
                      <InputLabel>Security Deposit</InputLabel>
                      <TextField
                        variant="outlined"
                        fullWidth
                        type="number"
                        id="deposit"
                        name="deposit"
                      />
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Can you deliver this item?</FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
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
