import React, { useState, useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { get } from "functions/request";
import EditProfile from "./Sections/EditProfile";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import Parallax from "components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button";
import { primaryColor } from "../../assets/jss/material-kit-pro-react";

profilePageStyle.isActive = {
  backgroundColor: "red",
};

const useStyles = makeStyles(profilePageStyle);

export default function UserProfilePage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [user, setUser] = useState([]);
  const id = localStorage.getItem("rently-userid");

  useEffect(() => {
    get(`/user/${id}`)
      .then((response) => {
        let res = response.data;
        setUser(res);
        console.log("current user data res--> ", res);
      })
      .catch((err) => {});
  }, []);

  const links = [
    {
      url: "/profile",
      name: "Profile",
      component: <EditProfile />,
    },
    {
      url: "/profile/store",
      name: "Store",
      component: <EditProfile />,
    },
  ];

  return (
    <div>
      <Header />

      <Parallax
        image={require("assets/img/examples/city.jpg").default}
        filter="dark"
        className={classes.parallax}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{ padding: "1rem 3rem" }}>
          <GridContainer>
            <Grid item sm={2}>
              {links.map((link) => (
                <Button
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
            </Grid>

            <Grid item sm={10} style={{ padding: "1rem 3rem" }}>
              <Switch>
                {links.map((link) => (
                  <Route
                    exact={true}
                    path={link.url}
                    component={link.component}
                  >
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
