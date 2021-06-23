import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link, NavLink,
} from "react-router-dom";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";

import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { get } from "functions/request";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import SectionInterested from "./Sections/SectionInterested";
import Profile from "./Sections/Profile";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import LoginForm from "components/forms/LoginForm";
import Parallax from "components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button";
import {primaryColor} from "../../assets/jss/material-kit-pro-react";
import Posting from './Sections/posting/Posting';
import Rental from './Sections/Rental/Rental';

profilePageStyle.isActive = {
  backgroundColor: "red"
}

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
      url: '/profile',
      name: 'Profile',
      component: <Profile/>
    },
    {
      url: '/profile/store',
      name: 'Store',
      component: ()=>(<h1>Store</h1>)
    },
    {
      url: '/profile/posting',
      name: 'My Posting Requests',
      component: <Posting/>
    },
    {
      url: '/profile/renting',
      name: 'My Rental Requests',
      component: <Rental/>
    },
  ]

  return (
    <div>
      <Header />

      <Parallax
        image={require("assets/img/examples/city.jpg").default}
        filter="dark"
        className={classes.parallax}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{padding: '1rem 3rem'}}>


          <div className={classes.profile} style={{marginLeft:'auto',marginRight:'auto',display:'block'}}>
            <div>
              <img src={user.photo} alt="..." className={imageClasses} style={{objectFit: 'cover', height: '100px', width: '100px'}}/>
            </div>
            <div className={classes.name}>
              <h5 className={classes.title} style={{marginTop: '2rem'}}>
                {user.name}
              </h5>
            </div>
          </div>


          <GridContainer >
            <Grid item sm={2}>
              {
                links.map(link=>(
                  <Button component={NavLink} exact={true} activeStyle={{ backgroundColor: primaryColor[3] }} to={link.url} fullWidth round>{link.name}</Button>
                ))
              }
            </Grid>

            <Grid item sm={10} style={{padding: '1rem 3rem'}}>


              <Switch>
                {
                  links.map(link=>(
                    <Route exact={true} path={link.url} component={link.component}>
                      {link.component}
                    </Route>))
                }
              </Switch>
            </Grid>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
