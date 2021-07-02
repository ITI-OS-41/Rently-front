import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Form from "views/ContactUsPage/Sections/Form";

import {
  container,
  mrAuto,
  mlAuto,
  description,
  title,
} from "assets/jss/material-kit-pro-react.js";

const descriptionStyle = {
  container,
  title:{
    ...title,
    color: "#038C7F",
    marginTop: "90px",
  },
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

export default function JoinTeam() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h3 className={classes.title}>Join Our Team</h3>
          <h5 className={classes.description}>
          Are you interested in being part of a global movement? Send us a resume and cover letter explaining why you would be a great fit. We value unique talents and perspectives so don’t be afraid to tell us what you’re all about! Additionally, we would love to see your RentlyStore! Don’t forget to attach a link when you apply.
          </h5>
          {/* form */}
          <Form/>

        </GridItem>
      </GridContainer>
    </div>
  );
}
