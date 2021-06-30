import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
  container,
  mrAuto,
  mlAuto,
  description,
} from "assets/jss/material-kit-pro-react.js";

const descriptionStyle = {
  container,
  textCenter: {
    textAlign: "center",
  },
  aboutDescription: {
    padding: "0 0 40px 0",
  },
  mrAuto,
  mlAuto,
  description: {
    ...description,
    color: "#000",
  }
};
const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            We partner with local nonprofits to improve our communities. Rently
            is the world’s largest peer-to-peer rental marketplace that enables
            you to share items within your community. 
            <br/>
            As a Renter, Rently gives
            you access to anything you might need to use temporarily for an
            event, project, or hobby. As an Owner, you are given the opportunity
            to post any of your items on Rently to earn money or share your
            items at a low cost.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
