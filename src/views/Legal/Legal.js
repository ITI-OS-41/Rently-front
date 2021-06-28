/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { primaryColor } from "../../assets/jss/material-kit-pro-react";
import Parallax from "../../components/Parallax/Parallax.js";

import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button";

import Grid from "@material-ui/core/Grid";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

import TermsOfService from "./TermsOfService/TermsOfService.js";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import PaymentPayoutPolicy from "./PaymentPayoutPolicy/PaymentPayoutPolicy";
import InsurancePolicy from "./InsurancePolicy/InsurancePolicy";
import CancellationPolicy from "./CancellationPolicy/CancellationPolicy";

const useStyles = makeStyles(aboutUsStyle);

export default function Legal() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const links = [
    {
      url: "/legal/terms-of-service",
      name: "Terms of Service",
      component: <TermsOfService />,
    },
    {
      url: "/legal/privacy-policy",
      name: "Privacy Policy",
      component: <PrivacyPolicy />,
    },
    {
      url: "/legal/payment-payout-policy",
      name: "Payment & Payout policy",
      component: <PaymentPayoutPolicy />,
    },
    {
      url: "/legal/insurance-policy",
      name: "Insurance Policy",
      component: <InsurancePolicy />,
    },
    {
      url: "/legal/cancellation-policy",
      name: "Cancellation Policy",
      component: <CancellationPolicy />,
    },
  ];

  return (
    <div>
      <Header />

      <Parallax
        image={require("assets/img/examples/city.jpg").default}
        filter="dark"
        className={classes.parallax}
        style={{ height: "15rem" }}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{ padding: "1rem 3rem" }}>
          <GridContainer>
            <Grid item sm={2} style={{ padding: "4rem 0rem" }}>
              <div>
                {links.map((link) => (
                  <Button
                    key={link.url}
                    component={NavLink}
                    exact={true}
                    activeStyle={{ backgroundColor: primaryColor[3] }}
                    to={link.url}
                    fullWidth
                    round
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </Grid>

            <Grid item sm={10} style={{ padding: "1rem 3rem" }}>
              <Switch>
                {links.map((link) => (
                  <Route exact={true} path={link.url}>
                    {link.component}
                  </Route>
                ))}
              </Switch>
            </Grid>
          </GridContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
