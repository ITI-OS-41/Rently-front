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
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import { card } from "assets/jss/material-kit-pro-react";

// const useStyles = makeStyles(sectionInterestedStyle);
const useStyles = makeStyles(styles);
export default function SectionInterested({ cat }) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <br />
      <GridContainer>
        <Card
          blog
          className={classes.card}
          onClick={() => history.push("/subcategory/" + cat._id)}
        >
          <CardHeader image>
            <a>
              <img
                src={cat.photo}
                alt={cat.name}
                style={{ objectFit: "cover", height: "250px" }}
              />
            </a>
          </CardHeader>
          <CardBody>
            <Info>
              <h3>{cat.name}</h3>
            </Info>

            <p
              className={classes.description}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {cat.description}
            </p>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
