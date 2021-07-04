/*eslint-disable*/
import React, { useState, useEffect } from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = {
  subscribeButton: {},

  space: {
    marginRight: "12px",
  },
};
const useStyles = makeStyles(styles);

export default function EcommercePage() {
  const classes = useStyles();
  return (
    <div>
   
      <GridContainer>
        <GridItem sm={6} md={12} style={{margin: "30px"}}>
          <h3><b>Promote your store</b></h3>
          <Button color="github" className={classes.space}>
            <i className="far fa-envelope" style={{marginRight: "12px"}} /> Email
          </Button>
          <Button color="facebook" className={classes.space}>
            <i className="fab fa-facebook-f" style={{marginRight: "12px"}} /> Facebook
          </Button>
          <Button color="twitter" className={classes.space}>
            <i className="fab fa-twitter" style={{marginRight: "12px"}} /> Twitter
          </Button>
          <Button color="linkedin" className={classes.space}>
            <i className="fab fa-linkedin" style={{marginRight: "12px"}} /> Linkedin
          </Button>
          <Button color="dribbble">
             Copy
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
