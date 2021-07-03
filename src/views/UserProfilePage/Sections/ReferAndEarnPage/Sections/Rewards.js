import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
} from "assets/jss/material-kit-pro-react.js";

const features = {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  features1: {
    textAlign: "center",
    padding: "30px 0",
  },
  color: {
    color: "#038C7F",
  },
};

const useStyles = makeStyles(features);

export default function Rewards({ ...rest }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* Feature 1 START */}
      <div className={classes.features1}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={classes.mlAuto + " " + classes.mrAuto}
          >
            <h3 className={classes.title + " " + classes.color}>
              Rewards Dashboard
            </h3>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h4>0</h4>
            <h4>PENDING BALANCE</h4>
          </GridItem>
          <GridItem xs={12} sm={4} md={4} className={classes.color}>
            <h4>0</h4>
            <h4>PENDING BALANCE</h4>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h4>0</h4>
            <h4>PENDING BALANCE</h4>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={classes.mlAuto + " " + classes.mrAuto}
          >
            <br />
            <p>
              Terms and Conditions
              <br />
              Powered By Saasquatch
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
