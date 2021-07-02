import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

import {
  container,
  title,
  mrAuto,
  mlAuto,
  description,
  blackColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const descriptionStyle = {
  container: {
    padding: "20px 0 !important",
    backgroundColor: "#f3f3f3",
    margin: "20px 0",
    padding: "0",
  },
  title: {
    ...title,
    color: "#038C7F",
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
  },
  header: {
    ...title,
    textAlign: "start",
  },
  style: {
    textAlign: "start",
    lineHeight: "35px"
  },
  cardFaq: {
    borderRadius: "10px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2);",
    backgroundColor: "#FFF",  
    padding: "10px 20px 0",
  },
};
const useStyles = makeStyles(descriptionStyle, basicsStyle);
export default function Faq() {
  const classes = useStyles();
  return (
    <div
      className={classNames(
        classes.aboutDescription,
        classes.textCenter,
        classes.container
      )}
    >
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h3 className={classes.title}>Referral Program FAQs</h3>
          <h4 className={classes.description}>
            Please take the time to review and understand the rules of the
            Referral Program.
          </h4>
          <GridContainer style={{margin:"50px 0"}}>
            <GridItem xs={12} sm={12} md={1}></GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <h4 className={classes.header}>
                1.General Terms
                <br />
                <br />
                2.How to Earn RuckBucks
                <br />
                <br />
                3.Redeeming RuckBucks
                <br />
                <br />
                4.How to Earn Cashback
                <br />
                <br />
                5.Sharing Rules
                <br />
                <br />
                6.Program Limitations
                <br />
                <br />
                7.Multiple Referral Invitations
                <br />
                <br />
                8.Severability
                <br />
                <br />
                9.Program Termination
                <br />
                <br />
                10.Updating The Terms of The Program
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={5} className={classes.cardFaq}>
              <h4 className={classes.header}>General Terms </h4>
              <h4 className={classes.style}>
                The Rently Referral Program, herein known as “The Program”
                allows verified members to earn cashback by referring their
                friends and offering them $25 RuckBucks (credits) towards their
                first booking on the Rently platform. To participate, members
                and participants must agree to the following Terms & Conditions
                which are apart of Ruckify’s complete Terms of Service.
                (https://ruckify.com/en/terms/). Please read and review our
                complete Terms of Service to clarify any related definitions or
                terms as a whole.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={1}></GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
