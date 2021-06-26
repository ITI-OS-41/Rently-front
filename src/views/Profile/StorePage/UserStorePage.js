import React, {useEffect, useState} from "react";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";

import {makeStyles} from "@material-ui/core/styles";

import {get} from "functions/request";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import Parallax from "components/Parallax/Parallax.js";
import LoadingContainer from "../../../components/global/LoadingContainer";
import StoreHeader from "../ProfilePage/StoreHeader";
import {Route, Switch} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import StoreProducts from "./StoreProducts";
import StoreReviews from "./StoreReviews";

const useStyles = makeStyles(profilePageStyle);

export default function userStorePage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const id = props.match.params.id;
  const [user, setUser] = useState(null);

  useEffect(() => {
    get(`/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {});
  }, []);


  return (
    <div>
      <Header/>

      <Parallax
        image={require("assets/img/examples/city.jpg").default}
        filter="dark"
        className={classes.parallax}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{padding: '1rem 3rem'}}>
          <>
            {
              user ?

                <>
                  <StoreHeader user={user}/>
                  <Switch>
                    <Route exact={true} path='/user/:id/' component={()=>(<StoreProducts/>)} />
                    <Route path='/user/:id/reviews' component={()=>(<StoreReviews id={id}/>)} />
                  </Switch>
                </>

                :
                <LoadingContainer/>
            }


          </>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
