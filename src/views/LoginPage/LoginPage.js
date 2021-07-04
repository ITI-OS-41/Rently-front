/*eslint-disable*/
import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";

import loginPageStyle from "../../assets/jss/material-kit-pro-react/views/loginPageStyle.js";

import image from "../../assets/img/bg7.jpg";
import LoginForm from "../../components/forms/LoginForm";
import {get, post} from "../../functions/request";

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    useState(()=>{
        const activation_token = props.match.params.activation_token

        if(!activation_token) return;

        post('user/activation', {activation_token}, "Email Activated successfully")
            .then((res)=>{
                console.log(res)
            })
            .catch(e=>{
                console.log(e)
            })
    }),[];


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
                        <GridItem xs={12} sm={12} md={8}>
                            <Card>
                                <CardHeader
                                    color="primary"
                                    className={classes.cardHeader}
                                >
                                    <h4 className={classes.cardTitle}>Login</h4>
                                </CardHeader>
                                <CardBody>
                                    <LoginForm/>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
