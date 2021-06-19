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
    <Card plain>
      <CardHeader plain image>
        <a href="#" >
          <img src={category.photo} alt={category.name}/>
        </a>
        <div
          className={classes.coloredShadow}
          style={{
            backgroundImage: `url(${category.photo})`,
            opacity: "1",
          }}
        />
      </CardHeader>
      <CardBody plain>
        <h4 className={classes.cardTitle}>
          <a href="#" >
            {category.name}
          </a>
        </h4>
      </CardBody>
    </Card>
  )
}
