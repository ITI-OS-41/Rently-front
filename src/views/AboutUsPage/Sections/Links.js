import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";

import AboutUsPage from "../AboutUsPage";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";
import Nonprofit from "views/NonprofitPage/Nonprofit";
import Careers from "views/CareersPage/Careers";
import Button from "../../../components/CustomButtons/Button";
import profilePageStyle from "../../../assets/jss/material-kit-pro-react/views/profilePageStyle.js";

profilePageStyle.isActive = {
  backgroundColor: "red",
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5),
  },
  paper: {
    padding: "11px 18px",
    textAlign: "center",
    fontSize: "12px",
  },
  link: {
    color: "#000",
    fontWeight: "500",
    marginBottom: "0.75em",
    "&:hover": {
      color: "#038C7F",
    },
    h2: {},
  },
}));

const links = [
  {
    url: "/careers",
    name: "careers",
    component: <Careers />,
  },
  {
    url: "/about-us",
    name: "about us",
    component: <AboutUsPage />,
  }, 
  {
    url: "/nonprofit",
    name: "nonprofit",
    component: <Nonprofit />,
  },
  {
    url: "/contact-us",
    name: "contact us",
    component: <ContactUsPage />,
  },


];

export default function Links() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{padding: "30px 30px 10px 30px"}} >
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>

        {links.map((link) => (
          <Grid item xs={12} sm={2}>
            <Button
            className={classes.paper}
              key={link.url}
              component={NavLink}
              exact={true}
              activeStyle={{ backgroundColor: "#038C7F" }}
              to={link.url}
              round
            >
              {link.name}
            </Button>
          </Grid>
        ))}

        {/* <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="/about-us" className={classes.link}>About Us</Link></h2>
        </Grid>
        <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="/contact-us" className={classes.link}>Contact Us</Link></h2>
        </Grid>
        <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="/nonprofit" className={classes.link}>Nonprofit</Link></h2>
        </Grid>
        <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="/careers" className={classes.link}>Careers</Link></h2>
        </Grid> */}
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
}
