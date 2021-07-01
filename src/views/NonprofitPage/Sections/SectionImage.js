/*eslint-disable*/
import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import ecommerceHeader from "assets/img/dg9.jpg";


import {
    title,
    main,
    mainRaised,
    mrAuto,
    mlAuto,
    container,
    description,
    blackColor,
    whiteColor,
    grayColor,
    hexToRgb,
  } from "assets/jss/material-kit-pro-react.js";
  import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";
  
  const styles = {
    ...imagesStyles,
    title,
    main,
    mainRaised,
    mrAuto,
    mlAuto,
    description,
    textCenter: {
      textAlign: "center !important",
    },
    container: {
      ...container,
      zIndex: "2",
    },
    brand: {
      "& h1, & h4": {
        color: whiteColor,
      },
    },
    card: {},
    subscribeButton: {},
    cardBody: {
      padding: "15px",
      "& form": {
        marginBottom: "0",
      },
    },
    cardForm: {
      margin: "0 0 0 14px",
      padding: 0,
      top: 10,
    },
    subscribeLine: {
      padding: "1.875rem 0px",
      "& $card": {
        marginTop: "30px",
      },
      "& form": { margin: "0px" },
      "&$subscribeLineImage:after": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: 0,
        top: 0,
        content: "''",
        backgroundColor: "rgba(" + hexToRgb(blackColor) + ",0.66)",
      },
    },
    subscribeLineImage: {
      position: "relative",
      backgroundPosition: "top center",
      backgroundSize: "cover",
      "& $container": {
        zIndex: 2,
        position: "relative",
      },
      "& $title": {
        color: whiteColor,
      },
      "& $description": {
        color: grayColor[0],
      },
    },
    img: {
      width: "20%",
      marginRight: "5%",
      marginBottom: "5%",
      float: "left",
    },
    left: {
      float: "left!important",
      display: "block",
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right",
    },
    section: {
        margin: "0",
    },
   
  };

const useStyles = makeStyles(styles);

export default function SectionImage() {

    const classes = useStyles();
    return (
        
        <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
        style={{ backgroundImage: `url(${ecommerceHeader})`, margin: "80px 0"}}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Rently and Second Harvest</h3>
                <p className={classes.description}>
                Second Harvest is the largest food rescue organization in Canada and a global thought leader on food recovery. Second Harvest works across the supply chain from farm to retail to capture surplus food before it ends up in our landfill which negatively impacts the environment
                </p>
              </div>
           </GridItem>
          </GridContainer>
        </div>
      </div>

     
    )
}
