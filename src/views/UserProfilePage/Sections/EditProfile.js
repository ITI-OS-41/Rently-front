import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";
import classNames from "classnames";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import EditProfileForm from "components/forms/EditProfileForm";
const useStyles = makeStyles(sectionInterestedStyle);
const useStyles2 = makeStyles(profilePageStyle);
import Button from "components/CustomButtons/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Add from "@material-ui/icons/Add";
import { patch } from "functions/request";
import { get } from "functions/request";

export default function EditProfile() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const imageClasses = classNames(
    classes2.imgRaised,
    classes2.imgRoundedCircle,
    classes2.imgFluid
  );
  const [userr, setUser] = useState(null);
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
      {/* <h3 style={{textAlign:'center '}}>edit pr</h3> */}
      <br />
      <GridContainer>
        <Card blog className={classes.card}>
          <CardHeader image>
          //*
          </CardHeader>
          <CardBody>
            <EditProfileForm type="edit" user={userr} />
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
