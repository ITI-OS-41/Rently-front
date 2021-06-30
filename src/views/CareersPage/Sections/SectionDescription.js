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
            Be Part of a Global Movement with Ruckify. Founded in Ottawa,
            Canada, in 2017 with a dream to change the world, Ruckify’s rent
            anything marketplace provides an accessible platform for everyone to
            use. Not only does Ruckify provide people with the ability to start
            their own business, lower their carbon footprint, and share items
            within their communities, but Ruckify has also been a driving force
            in making the sharing economy accessible to each and every one of
            us.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
