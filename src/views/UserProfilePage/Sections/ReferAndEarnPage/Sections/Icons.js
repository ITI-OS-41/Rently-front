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
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10,
  },
  space: {
    marginRight: "12px",
  },
};
const useStyles = makeStyles(styles);

export default function EcommercePage() {
  const classes = useStyles();
  return (
    <div>
      <form>
        <GridContainer>
          <GridItem xs={12} sm={6} md={8} lg={8}>
            <CustomInput
              id="emailPreFooter"
              formControlProps={{
                fullWidth: true,
                className: classes.cardForm,
              }}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
                placeholder: "Your Code...",
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={4}>
            <Button color="rose" block className={classes.subscribeButton}>
              Copy
            </Button>
          </GridItem>
        </GridContainer>
      </form>
      <GridContainer>
        <GridItem sm={6} md={12}>
          <Button color="github" className={classes.space}>
            <i className="far fa-envelope" style={{marginRight: "12px"}} /> Email
          </Button>
          <Button color="facebook" className={classes.space}>
            <i className="fab fa-facebook-f" style={{marginRight: "12px"}} /> Facebook
          </Button>
          <Button color="twitter" className={classes.space}>
            <i className="fab fa-twitter" style={{marginRight: "12px"}} /> Twitter
          </Button>
          <Button color="linkedin">
            <i className="fab fa-facebook-messenger" style={{marginRight: "12px"}} /> Messenger
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
