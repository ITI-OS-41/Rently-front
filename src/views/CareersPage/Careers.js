/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import Links from "views/AboutUsPage/Sections/Links.js";
import SectionDescription from "./Sections/SectionDescription.js";
import SectionImage from "./Sections/SectionImage.js";
import Slider from "./Sections/Slider.js";
import JoinTeam from "./Sections/JoinTeam.js";
import Contact from "views/ContactUsPage/Sections/Contact.js";

import {
  container,
  title,
  main,
  mainRaised,
  mrAuto,
  whiteColor,
  mlAuto,
} from "assets/jss/material-kit-pro-react.js";

const aboutUsStyle = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1,
    paddingBottom: "40px"
  },
  title: {
    ...title,
    fontSize: "2.5em",
    "&, & + h4": {
      color: whiteColor,
    },
  },
  textCenter: {
    textAlign: "center",
  },
  
}
const useStyles = makeStyles(aboutUsStyle);

export default function Nonprofit() {
    const classes = useStyles();
    return (
        <>
          <Header/>
          <Parallax
            image={require("assets/img/examples/office2.jpg" ).default}
            filter="dark"
            small
          >
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem
                  md={8}
                  sm={8}
                  className={classNames(
                    classes.mlAuto,
                    classes.mrAuto,
                    classes.textCenter
                  )}
                >
                  <h1 className={classes.title}>Join the Rently Team</h1>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
               <Links/>
               <SectionDescription/>
               <SectionImage/>
               <Slider/>
               <JoinTeam/>
            </div>
          </div>
          <Footer />
        </>
      );
}
