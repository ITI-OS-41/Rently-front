/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components

import Parallax from "components/Parallax/Parallax.js";

import Footer from "components/global/Footer";
import Header from "components/global/Header";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";



import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

// core components
import MainPageParallax from "./Sections/MainPageParallax";
import MainPageCategories from "./Sections/MainPageTopCategories";
import MainPageItems from "./Sections/MainPageTopItems";
import MainPageUsers from "./Sections/MainPageTopUsers";
import MainPageAppRate from "./Sections/MainPageAppReview";
import MainPageTopPosts from "./Sections/MainPageTopPosts";



const useStyles = makeStyles(presentationStyle);

export default function HomePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header />

      <MainPageParallax/>


      <div className={classNames(classes.main, classes.mainRaised)}>

        <MainPageCategories style={{padding: '1rem 2rem', margin: '1rem auto'}}/>

        <MainPageItems style={{padding: '1rem 2rem', margin: '1rem auto'}}/>

        <MainPageUsers style={{padding: '1rem 2rem', margin: '1rem auto'}}/>

        <MainPageAppRate style={{padding: '1rem 2rem', margin: '1rem auto'}}/>

        <MainPageTopPosts style={{padding: '1rem 2rem', margin: '1rem auto'}}/>
      </div>

      <Footer />
    </div>
  );
}
