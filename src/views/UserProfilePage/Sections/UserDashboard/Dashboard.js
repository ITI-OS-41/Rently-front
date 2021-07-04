/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import Select from '@material-ui/core/Select';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// pages
import Selection from "./Sections/Selection";
import SectionFeatures from "./Sections/SectionFeatures";
import Icons from "./Sections/Icons";
import Table from "./Sections/Table";


import {
  cardTitle,
  blackColor,
  hexToRgb,
  description,

} from "assets/jss/material-kit-pro-react.js";

const signupPageStyle = {
  description: {
    ...description,
    color: "#000",
    margin: "10px auto",
  },
  cardWallet: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2);",
    marginBottom: "50px",
  },
  cardTitle: {
    ...cardTitle,
    textDecoration: "none",
    textAlign: "start !important",
    marginTop: "0 !important",
    marginBottom: "0 !important",
    color: "#FFF !important",
    backgroundColor: "#3f3f3f !important",
    padding: "20px",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
  },
  textCenter: {
    textAlign: "center",
  },
  stats:
  {
      margin: "0px",
      marginRight: "20px",
      padding: "0px", 
      textAlign: "end"
  },
  btn: {
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    backgroundColor: "#3f3f3f !important",
    color: "#038C7F"
  }
};

const useStyles = makeStyles(signupPageStyle);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardWallet}>
            <h4 className={classes.cardTitle}>
              <DashboardOutlinedIcon fontSize="large" />
            </h4>

            <div>
              <div className={classes.stats} >
                <Button style={{margin: "0"}}  className={classes.btn} >Stats</Button>
              </div>
              <div>
                <Selection/>
                <SectionFeatures/>
                <Icons/>
                <Table/>
              </div>
              
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
