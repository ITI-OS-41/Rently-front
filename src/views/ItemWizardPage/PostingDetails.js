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

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import classNames from "classnames";
import AttachFile from "@material-ui/icons/AttachFile";
import Layers from "@material-ui/icons/Layers";
// core components
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function PostingDetails({ ...rest }) {
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
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={10}>
            <GridContainer>
              <GridItem xs={12} sm={5} md={6}>
                <h4>Show renters your</h4>
                
        
        <CustomFileInput
          multiple
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            placeholder: "upload your images"
          }}
          endButton={{
            buttonProps: {
              round: true,
              color: "info",
              justIcon: true,
              fileButton: true
            },
            icon: <Layers />
          }}
        />
              </GridItem>
              <GridItem xs={12} sm={4} md={6}>
                <Footer>
                  <div className={classes.title}>
                    <h3>Description</h3>
                  </div>
                  <CustomInput
                    labelText="You can write your text here..."
                    id="textarea-input"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </Footer>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
