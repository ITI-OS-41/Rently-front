import Parallax from "../../../components/Parallax/Parallax";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import classNames from "classnames";
import React from "react";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function SectionParallax(){
  const classes = useStyles();

  return (
    <Parallax
      image={require("assets/img/examples/ecommerce-header.jpg").default}
      filter="dark"
      small
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            md={8}
            sm={8}
            className={classNames(
              classes.mlAuto,
              classes.mrAuto,
              classes.textCenter
            )}
          >
            <div className={classes.brand}>
              <h1 className={classes.title}>Search</h1>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}
