import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/global/Header";
import Parallax from "components/Parallax/Parallax.js";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";

function getSteps() {
  return ["Basic Info", "Posting Details", "Pricing And Protection"];
}
const useStyles = makeStyles(presentationStyle);

export default function RentHeader({component}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Parallax
        image={require("assets/img/bg4.jpg").default}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>Post Your Item</h1>
                <h3 className={classes.title}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer container spacing={3}>
        <GridItem>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.root}>
            <Grid container spacing={4}>
              <Grid item>
                {component}
              </Grid>
            </Grid>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
