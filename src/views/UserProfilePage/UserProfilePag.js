import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";

import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Block } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import ProfileInfo from '../components/Profile/ProfileInfo';
import { get } from "functions/request";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import SectionInterested from "./Sections/SectionInterested";
import Profile from "./Sections/Profile";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import LoginForm from "components/forms/LoginForm";
import style from "assets/jss/material-kit-pro-react/rotatingCards";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";

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

  return (
    <div>
      <Header />

      <Parallax
        image={require("assets/img/examples/city.jpg").default}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem >
                            {/* <div
                                className={classes.profile}
                                style={{ textAlign: "center", justifyContent: "center" }}
                            >
                                <div>
                                <img src={user.photo} alt="..." className={imageClasses} />
                                </div>
                            </div> */}





              {/* <GridContainer justify="center"> */}
              <div className={classes.profile} style={{marginLeft:'auto',marginRight:'auto',display:'block'}}>
                <div>
                  <img src={user.photo} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h5 className={classes.title}>
                      {user.name}
                      </h5>
                </div>
              </div>
{/* </GridContainer> */}



              <NavPills
                horizontal={{
                    tabsGrid: { xs: 1, sm: 2, md: 2},
                    contentGrid: { xs: 12, sm: 8, md: 7 },
                }}
                color="rose"
                tabs={[
                //   {
                //     tabButton: (
                //       <div>
                //         {" "}
                //         <Avatar
                //           style={{
                //             width: "100%",
                //             height: "100px",
                //             display: "block",
                //             margin: "auto",
                //           }}
                //           // src="https://icon-library.com/images/female-profile-icon/female-profile-icon-10.jpg"
                //           src={user.photo}
                //         />
                //         <h6>{user.name}</h6>
                //       </div>
                //     ),
                //   },
                  {
                    tabButton: (
                      <Link to={`/profile/edit`}>
                        <ListItemText />
                        {"Edit my profile "}
                      </Link>
                    ),

                    tabContent: (
                      <Grid item xs={7}>
                        <Switch>
                          <Route exact path="/profile/edit">
                            <LoginForm />
                          </Route>
                        </Switch>
                      </Grid>
                    ),
                  },
                  {
                    tabButton: (
                      <Link to={`/profile/store`}>
                        <ListItemText />
                        {"My Store "}
                      </Link>
                    ),
                    tabContent: (
                      <Grid item xs={7}>
                        <Switch>
                          <Route path="/profile/store">
                            <SectionInterested />
                          </Route>
                        </Switch>
                      </Grid>
                    ),
                  },
                  {
                    tabButton: (
                      <Link to={`/profile/postings`}>
                        <ListItemText />
                        {"My Postings "}
                      </Link>
                    ),
                    tabContent: (
                      <Grid item xs={7}>
                        <Switch>
                          <Route path="/profile/postings">
                            <Profile />
                          </Route>
                        </Switch>
                      </Grid>
                    ),
                  },
                  {
                    tabButton: (
                      <Link to={`/profile/requests`}>
                        <ListItemText />
                        {"My Rental Requests"}
                      </Link>
                    ),

                    tabContent: (
                      <Grid item xs={7}>
                        <Switch>
                          <Route exact path="/profile/requests">
                            {/* <profile /> */}
                            <SectionInterested />
                          </Route>
                        </Switch>
                      </Grid>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
