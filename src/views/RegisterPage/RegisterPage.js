/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import loginPageStyle from "../../assets/jss/material-kit-pro-react/views/loginPageStyle.js";

import image from "../../assets/img/bg7.jpg";
import RegisterForm from "../../components/forms/RegisterForm";

const useStyles = makeStyles(loginPageStyle);

export default function RegisterPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          flexDirection: 'row',
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <Card>
                <CardHeader
                  color="primary"
                  className={classes.cardHeader}
                >
                  <h4 className={classes.cardTitle}>Register</h4>
                </CardHeader>
                <CardBody>
                  <RegisterForm />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
