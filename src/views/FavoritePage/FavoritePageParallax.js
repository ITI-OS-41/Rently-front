import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import classNames from "classnames";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import Parallax from "../../components/Parallax/Parallax";
import React from "react";
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import {makeStyles} from "@material-ui/core";



export default function CartPageParallax() {
    const useStyles = makeStyles(presentationStyle);
    const classes = useStyles();

    return (
        <Parallax
            // image={require("assets/img/examples/city.jpg").default}
            className={classes.parallax}
            filter="dark"
            style={{
                height: '10rem'
            }}
        />
    )
}
