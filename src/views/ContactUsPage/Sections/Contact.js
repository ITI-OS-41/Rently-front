/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components

import Links from "views/AboutUsPage/Sections/Links";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import Form from "./Form";


import {
    container,
    title,
    main,
    mainRaised,
    mlAuto,
    description,
  } from "assets/jss/material-kit-pro-react.js";
  
  const contactUsStyle = {
    main,
    mainRaised,
    title,
    mlAuto,
    description,
    container: {
      ...container,
      maxWidth: "970px !important",
    },
    contactContent: {
      paddingBottom: "40px",
      paddingTop: "0px",
    },

    info: {
      paddingBottom: "10px",
      paddingTop: 0,
    },
    textCenter: {
      textAlign: "center !important",
    },
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto",
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0",
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
    icon: {
      width: "18px",
      height: "18px",
      top: "3px",
      position: "relative",

    },
    color: {
        color: "#038C7F",
    }
  };
const useStyles = makeStyles(contactUsStyle);

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.contactContent}>

      <Links/>
        <div className={classes.container}>
          <h3 className={classes.title+" "+classes.color}>Send us a message</h3>
          <GridContainer>
            <GridItem md={6} sm={6}>
              <p>
                You can contact us with anything related to our Products. We
                {"'"}ll get in touch with you as soon as possible.
                <br />
                <br />
              </p>
              
              {/* form */}
              <Form/>

            </GridItem>
            <GridItem md={4} sm={4} className={classes.mlAuto}>
              <InfoArea
                className={classes.info}
                title="Find us at the office"
                description={
                  <p>
                    Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest,{" "}
                    <br /> Romania
                  </p>
                }
                icon={PinDrop}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info}
                title="Give us a ring"
                description={
                  <p>
                    Michael Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                    8:00-22:00
                  </p>
                }
                icon={Phone}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info}
                title="Legal Information"
                description={
                  <p>
                    Creative Tim Ltd. <br /> VAT · EN2341241 <br /> IBAN ·
                    EN8732ENGB2300099123 <br /> Bank · Great Britain Bank
                  </p>
                }
                icon={BusinessCenter}
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
