import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import cardBlog4 from "../../assets/img/examples/card-blog4.jpg";
import CardBody from "../Card/CardBody";
import React from "react";
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(blogsStyle);
export default function CategoryCard(props) {
  const classes = useStyles();
  const {category} = props;

  return (
    <Card >
      <CardHeader   image>
        <a href="#">
          <img src={category.photo} style={{
            height: '250px',
            objectFit: 'cover'
          }} alt=""/>
        </a>
      </CardHeader>
      <CardBody plain>
        <h4 style={{textAlign: 'center'}} className={classes.cardTitle}>
          <a href="#" >
            {category.name}
          </a>
        </h4>
      </CardBody>
    </Card>
  )
}
