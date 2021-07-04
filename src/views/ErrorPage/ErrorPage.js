/*eslint-disable*/
import React, {useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/global/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/global/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.js";

import image from "assets/img/clint-mckoy.jpg";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  useEffect(()=>{
    window.history.pushState({path: '/error404'}, 'Error 404', '/error404');
  },[]);

  const classes = useStyles();
  return (
    <div>
      <Header/>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>404</h1>
              <h2 className={classes.subTitle}>Page not found :(</h2>
              <h4 className={classes.description}>
                Ooooups! Looks like you got lost.
              </h4>
              <Link to='/'>
                <Button color="primary" variant="contained">Back to home</Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
