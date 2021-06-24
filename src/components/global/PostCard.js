import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import cardBlog4 from "../../assets/img/examples/card-blog4.jpg";
import CardBody from "../Card/CardBody";
import React from "react";
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import {makeStyles} from "@material-ui/core";
import {stripHtml} from "../../functions/helpers";

const style = {
  ...blogsStyle,
  oneLine:{
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
}

const useStyles = makeStyles(style);
export default function PostCard(props) {
  const classes = useStyles();
  const {post} = props;

  return (
    <Card >
      <CardHeader   image>
        <a href="#">
          <img src={post.photo} style={{
            height: '250px',
            objectFit: 'cover'
          }} alt=""/>
        </a>
      </CardHeader>
      <CardBody plain>
        <h4 style={{textAlign: 'center'}} className={classes.cardTitle + ' ' + classes.oneLine} >
          <a href="#" >
            {post.title}
          </a>
        </h4>
        <p className={classes.oneLine}>{stripHtml(post.description)}</p>
      </CardBody>
    </Card>
  )
}
