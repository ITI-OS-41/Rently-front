import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge";


import {
  container,
  title,
  cardTitle,
  coloredShadow,
  description,
  mlAuto,
  mrAuto,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";

const blogsSection = {
  container,
  title,
  coloredShadow,
  cardTitle,
  mlAuto,
  mrAuto,
  description,
  blog: {
    padding: "50px 0",
  },
  description1: {
    ...description,
    lineHeight: "1.313rem",
  },
  author: {
    "& a": {
      color: grayColor[1],
      textDecoration: "none",
    },
  },
  card: {
    margin: "20px 5px 45px",
    padding: "10px 15px",
    fontSize: "13px",
  },
};

const useStyles = makeStyles(blogsSection);

export default function SectionBlogs({ blog }) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <div
            style={{marginTop: '3rem'}}
            className={classes.description1}
            dangerouslySetInnerHTML={{
              __html: blog.description,
            }}
          />
          {blog.tags.map((tag) => (
            <Badge round color="info" className={classes.card}>
              {tag}
            </Badge>
          ))}
        </GridItem>
      </GridContainer>
    </div>

  
  );
}
