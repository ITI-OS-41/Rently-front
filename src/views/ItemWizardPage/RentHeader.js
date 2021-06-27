import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/global/Header";
import Parallax from "components/Parallax/Parallax.js";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Footer from "../../components/global/Footer";

const useStyles = makeStyles(presentationStyle);

export default function RentHeader({ component, label }) {


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Parallax
        image={("https://cdn.dribbble.com/users/487766/screenshots/15590116/media/79774fe0cf35bdd66fb09c365767598f.png?compress=1&resize=1600x1200")}
        className={classes.parallax}
        style={{ height: "25rem" }}
      >

        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>Post Your Item</h1>
                <h3 className={classes.title}>Rent anything to anyone.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer container spacing={3}>
        <GridItem>
          <div className={classNames(classes.main, classes.mainRaised)}>
            
            <div className={classes.root}>{component}</div>
          </div>
        </GridItem>
      </GridContainer>
      <Footer />
    </div>
  );
}
