import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import {
  title,
  cardTitle,
  coloredShadow,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";

const sectionInterestedStyle = {
  title,
  cardTitle,
  coloredShadow,
  textCenter: {
    textAlign: "center",
  },
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "0",
    margin: "0px",
  },
  description: {
    color: grayColor[0],
  },
  styling: {
    padding: "0px 10px",
    margin: "15px 0px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionInterested({ rent }) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        {rent.map((rent) => (
          <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card plain blog className={classes.styling}>
              <CardBody plain>
                <h4 style={{textAlign: 'center'}}>
                  <b style={{color: 'teal'}}>{rent?.item?.name}</b>
                </h4>
                <div className={classes.cardTitle}>
                  <p><b style={{color: 'teal'}}>owner: </b> {rent?.owner?.name}.</p>
                  <p><b style={{color: 'teal'}}>renter: </b> {rent?.renter?.name}.</p>
                  <p><b style={{color: 'teal'}}>status: </b> {rent?.status}.</p>
                  <p><b style={{color: 'teal'}}>insurance: </b> {rent?.insurance}.</p>
                  <p><b style={{color: 'teal'}}>price: </b> {rent?.price}$.</p>
                  <b style={{color: 'teal'}}>{rent?.item?.name || ''}</b>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
