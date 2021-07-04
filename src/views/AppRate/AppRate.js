/*eslint-disable*/
import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";

import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// sections for this page
import SectionUserRate from "./Sections/SectionUserRate";
import SectionRates from "./Sections/SectionRates";

import office2 from "assets/img/examples/office2.jpg";

import { get } from "../../functions/request";
import { dateTime } from 'functions/helpers'

import blogPostPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";
import cardBlog4 from '../../assets/img/about1.jpg'
const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage(props) {

  const [newComment, setNewComment] = useState({});


  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();


  const newRateAdded = (newRate) => {
    setNewComment(newRate)
    console.log(newRate);
  }

  return (
    <div>
      <Header />
      <Parallax image={cardBlog4} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h4 className={classes.subtitle}>
                Rently Team Would Love To Hear From You
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionUserRate newRateAdded={newRateAdded} />
          <SectionRates newComment={newComment} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
