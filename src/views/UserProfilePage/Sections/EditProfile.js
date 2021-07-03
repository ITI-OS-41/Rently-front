import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import sectionInterestedStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";
import profilePageStyle from "../../../assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import EditProfileForm from "../../../components/forms/EditProfileForm";
const useStyles = makeStyles(sectionInterestedStyle);
const useStyles2 = makeStyles(profilePageStyle);
import { get } from "../../../functions/request";
import EditPasswordForm from "../../../components/forms/EditPasswordForm";
import Typography from "@material-ui/core/Typography";
import AccountVerification from "../../../components/forms/AccountVerification";

export default function EditProfile() {
  const classes = useStyles();
  const classes2 = useStyles2();

  const [user, setUser] = useState(null);
  const id = localStorage.getItem("rently-userid");

  useEffect(() => {
    get(`user/infor`)
      .then((response) => {
        let res = response.data;
        setUser(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <GridContainer>
        <Card blog className={classes.card}>
          <CardHeader color="primary">
            <Typography>Basic info</Typography>
          </CardHeader>
          <CardBody>
            <EditProfileForm type="edit" user={user} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="primary">
            <Typography>Account Security</Typography>
          </CardHeader>
          <CardBody>
            <EditPasswordForm />
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="primary">
            <Typography>Identity Verification</Typography>
          </CardHeader>
          <CardBody>
            <AccountVerification/>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
