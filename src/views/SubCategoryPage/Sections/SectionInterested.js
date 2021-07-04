import React from "react";
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
import {Link} from "react-router-dom";

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionInterested({ cat }) {
  const classes = useStyles();
    console.log(";;;;;;;;;;;;;;;;;;; ",cat.category._id);
  return (
    <div className={classes.section}>
      <br />
      <GridContainer>
        <Card
          blog
          className={classes.card}
        >
          <CardHeader image >
              <Link to={`/search/?category=${cat.category._id}&subcategory=${cat._id}`}>
            <a>
              <img src={cat.photo} alt={cat.name}  style={{objectFit:'cover',height:'250px'}}/>
            </a>
            </Link>
          </CardHeader>
          <CardBody >
          <Link to={`/search/?category=${cat.category._id}&subcategory=${cat._id}`}>

            <Info>
              <h3>{cat.name}</h3>
            </Info>

            <p className={classes.description} style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}} >{cat.description}</p>
            </Link>
         
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
