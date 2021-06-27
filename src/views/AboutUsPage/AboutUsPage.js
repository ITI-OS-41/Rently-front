/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components 
import Header from "../../components/global/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Footer from "../../components/global/Footer.js";
// sections for this page
import SectionDescription from "../../views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "../../views/AboutUsPage/Sections/SectionTeam.js";
import SectionServices from "../../views/AboutUsPage/Sections/SectionServices.js";
import SectionOffice from "../../views/AboutUsPage/Sections/SectionOffice.js";
import SectionContact from "../../views/AboutUsPage/Sections/SectionContact.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <>
      <Header/>
      <Parallax
        image={require("assets/img/about.jpg").default}
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
              <h1 className={classes.title}>ABOUT US</h1>
              <h4>
                Rently was created to reduce the destructive environmental
                impact of traditional systems of production by keeping products
                and equipment in use for longer.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          {/* <SectionServices /> */}
          <SectionOffice />
          <SectionContact />
        </div>
      </div>
      <Footer />
    </>
  );
}
