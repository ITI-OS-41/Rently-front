import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import office2 from "assets/img/examples/office2.jpg";

// display data
import { get } from "functions/request";
import history from "functions/history";

import {
  whiteColor,
  hexToRgb,
  title,
  cardTitle,
} from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import { Link } from "react-router-dom";

const sectionPillsStyle = {
  title,
  ...tooltipsStyle,
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "50px 0",
  },
  textCenter: {
    textAlign: "center",
  },
  category: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important",
    marginTop: "10px",
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor + "  !important",
  },
  icons: {
    width: "1.1rem",
    height: "1.1rem",
    position: "relative",
    display: "inline-block",
    top: "0",
    marginTop: "-1em",
    marginBottom: "-1em",
    marginRight: "4px",
    verticalAlign: "middle",
  },
  tabSpace: {
    padding: "20px 0 50px",
  },
  limitText: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills() {
  const classes = useStyles();

  const [Blogs, setBlog] = useState([]);
  useEffect(() => {
    get("/blog").then((response) => {
      let res = response.data.res;
      setBlog(res);
    });
  }, []);
  return (
    <div className={classes.section}>
      <GridContainer>
        {Blogs.map((blog) => (
          <GridItem key={blog._id} xs={12} sm={12} md={6}>
            <Card
              raised
              background
              style={{
                backgroundImage: `url( ${blog.headerPhoto || office2} )`,
              }}
            >
              <CardBody background>
                <h3 className={classes.cardTitle + " " + classes.limitText}>
                  {blog.title}
                </h3>

                <div
                  className={classes.category + " " + classes.limitText}
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />

                <Link to={`/blog/${blog._id}`}>
                  <Button round color="danger" style={{ marginTop: "3rem" }}>
                    <FormatAlignLeft className={classes.icons} /> Read article
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
