import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

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
            Rently was created to reduce the destructive environmental impact
            of traditional systems of production by keeping products and
            equipment in use for longer. Rently is committed to making it easy
            for people to connect on a single community-based platform to rent
            and reuse instead of buying new. Pushing the change in global
            consumer behaviors toward a more sustainable way of living will
            reduce overall waste and help encourage the bold and decisive
            actions necessary to meet the Paris Agreement global warming limit.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
