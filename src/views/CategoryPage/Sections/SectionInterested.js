import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";

import history from "functions/history";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionInterested({ cat }) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <br />
      <GridContainer>
        {/* <GridItem xs={12} sm={4} md={4} lg={4} xl={4}> */}
        <Card
          plain
          blog
          className={classes.card}
          onClick={() => history.push("/subcategory/" + cat._id)}
        >
          <CardHeader image plain>
            <a>
              <img src={cat.photo} alt={cat.name} />
            </a>
          </CardHeader>
          <CardBody plain>
            <Info>
              <h3>{cat.name}</h3>
            </Info>

            <p className={classes.description}>{cat.description}</p>
          </CardBody>
        </Card>
        {/* </GridItem> */}
      </GridContainer>
    </div>
  );
}
