/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "../../components/global/Header";

import Footer from "../../components/global/Footer";
// sections for this page

import SectionProducts from "./Sections/SectionProducts.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
import SectionParallax from "./Sections/SectionParallax";

const useStyles = makeStyles(styles);

export default function SearchPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <SectionParallax />


      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionProducts />
      </div>


      <Footer/>
    </div>
  );
}
