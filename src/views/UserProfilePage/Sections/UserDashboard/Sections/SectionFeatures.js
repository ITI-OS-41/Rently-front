import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

import {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const features = {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  features1: {
    textAlign: "center",
    padding: "20px 0",
  },
  border: {
    border: "1px solid rgba(0,0,0,.125)",

  }
};

const useStyles = makeStyles(features);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <div className={classes.border}>
                <h3>0</h3>
                <AccountBalanceIcon style={{ fontSize: 70 }} />
                <p>
                  Store views
                  <br />
                  Last 60 days
                </p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <div className={classes.border}>
                <h3>$0.00</h3>
                <AccountBalanceIcon style={{ fontSize: 70 }} />
                <p>
                Total revenue
                  <br />
                  Last 60 days
                </p>
              
              </div>
            </GridItem>
            <GridItem xs={12} sm={3} md={3} >
              <div className={classes.border}>
                <h3>0</h3>       
                <AccountBalanceIcon style={{ fontSize: 70 }} />
                <p>
                Total bookings
                  <br />
                  Last 60 days
                </p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={3} md={3} >
              <div className={classes.border}>
                <h3>5</h3>
                <AccountBalanceIcon style={{ fontSize: 70 }} />
                <p>
                Total postings
                  <br />
                  Last 60 days
                </p>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 1 END */}
      </div>
    </div>
  );
}
