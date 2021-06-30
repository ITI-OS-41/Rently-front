/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";


import {
    container,
    title,
    main,
    mainRaised,
    mlAuto,
    description,
  } from "assets/jss/material-kit-pro-react.js";
  
  const contactUsStyle = {
    main,
    mainRaised,
    title,
    mlAuto,
    description,
    container: {
      ...container,
      maxWidth: "970px !important",
    },
    
    textCenter: {
      textAlign: "center !important",
    },
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto",
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0",
    },
    left: {
      float: "left!important",
      display: "block",
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right",
    },
    color: {
        color: "#038C7F",
    }
  };
const useStyles = makeStyles(contactUsStyle);

export default function Form() {
    const classes = useStyles();
  return (
    <div>
      <form>
        <CustomInput
          labelText="Your Name"
          id="float"
          formControlProps={{
            fullWidth: true,
          }}
        />
        <CustomInput
          labelText="Email address"
          id="float"
          formControlProps={{
            fullWidth: true,
          }}
        />
        <CustomInput
          labelText="Phone"
          id="float"
          formControlProps={{
            fullWidth: true,
          }}
        />
        <CustomInput
          labelText="Your message"
          id="float"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            multiline: true,
            rows: 6,
          }}
        />
        <div className={classes.textCenter}>
          <Button color="primary" round>
            Contact us
          </Button>
        </div>
      </form>
    </div>
  );
}
