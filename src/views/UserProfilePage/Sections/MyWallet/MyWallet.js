/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// pages
import Items from "./Sections/Item";
import User from "./Sections/User";

import {
  cardTitle,
  blackColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const signupPageStyle = {
  cardWallet: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2);",
    marginBottom: "50px",
  },
  cardTitle: {
    ...cardTitle,
    textDecoration: "none",
    textAlign: "center !important",
    marginTop: "0 !important",
    color: "#FFF !important",
    backgroundColor: "#3f3f3f !important",
    padding: "20px 0",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
  },
  textCenter: {
    textAlign: "center",
  },
  footer:
  {
    textDecoration: "none",
    textAlign: "center !important",
    color: "#FFF !important",
    backgroundColor: "#3f3f3f !important",
    padding: "20px 0",
    borderBottomRightRadius: "6px",
    borderBottomLeftRadius: "6px",
  },
  
};

const useStyles = makeStyles(signupPageStyle);

export default function MyWallet() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardWallet}>
            <h4 className={classes.cardTitle}>Your available Wallet credits</h4>
            <CardBody>
              
                <User/>
                <Items />
             
            </CardBody>
            <div className={classes.footer}>
                <span style={{marginRight: "15px"}}>Create your first post: <b> $5 Wallet</b> </span>
                <span style={{marginRight: "15px"}}> Write a review: <b> $5 Wallet</b> </span>
                <span>Signup: <b> $10 Wallet</b> </span>
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
