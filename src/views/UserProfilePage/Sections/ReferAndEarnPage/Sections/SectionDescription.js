import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { TextField } from "@material-ui/core";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

import Icons from "./Icons";
import Rewards from "./Rewards";

import {
  container,
  title,
  mrAuto,
  mlAuto,
  description,
} from "assets/jss/material-kit-pro-react.js";

const descriptionStyle = {
  container: {
    ...container,
    padding: "20px 0 !important",
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
};
const useStyles = makeStyles(descriptionStyle, basicsStyle);

export default function SectionDescription() {
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
          <div>
            <h3 className={classes.title}>The Program</h3>
            <h4 className={classes.description}>
              Give your friends and family the opportunity to sign up to Ruckify
              with $25 RuckBucks already in their account! When they sign up
              with your referral link they will automatically earn $25 RuckBucks
              and you will earn 10% of their first rental, with a minimum reward
              of $10 cash back!
            </h4>
          </div>
          <div>
            <h3 className={classes.title} style={{ marginTop: "100px" }}>
              Give $25 and get 10% back in cash!
            </h3>
            <p className={classes.description}>
              Refer your friends and family and earn 10% cash back on their
              first booking! Just share the link or code today and start earning
              a minimum of $10 per successful referral.
              <br />
              Use the link or your code: NADAIBRAHIM
            </p>
          </div>
          <div>
            <Icons />
            <Rewards />
          </div>
          <div>
            <h3 className={classes.title}>Help expand Rently & Earn!</h3>
            <p className={classes.description}>
              Refer your friends and family and receive rewards of 10% on the
              first rental of any item posted within the first 30 days after
              they signup!
              <br />
              Just share the link today and start earning a minimum of $5 per
              successful booking by your referrals.
            </p>
            <h3 className={classes.title} style={{color: "#000"}}>Use your Link or Referral Code above to get started.</h3>
          </div>
          <div>
            <Rewards />
          </div>
        </GridItem>

      </GridContainer>
    </div>
  );
}
