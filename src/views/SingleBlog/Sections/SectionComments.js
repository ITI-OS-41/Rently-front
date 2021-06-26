import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Media from "components/Media/Media.js";
import SectionWriteComment from "./SectionWriteComment";

import profile4 from "assets/img/faces/card-profile4-square.jpg";
import profile1 from "assets/img/faces/card-profile1-square.jpg";

import { grayColor, title } from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";

const sectionCommentsStyle = {
  ...tooltipsStyle,
  section: {
    backgroundposition: "50%",
    backgroundSize: "cover",
    padding: "20px 0 70px",
  },
  title: {
    ...title,
    marginBottom: "30px",
    textAlign: "center",
  },
  footerButtons: {
    float: "right",
  },
  footerIcons: {
    width: "1.1rem",
    height: "1.1rem",
    position: "relative",
    display: "inline-block",
    top: "0",
    marginTop: "-1em",
    marginBottom: "-1em",
    marginRight: "3px",
    verticalAlign: "middle",
  },
  color555: {
    "&,& *": {
      color: grayColor[15] + " !important",
    },
  },
};

const useStyles = makeStyles(sectionCommentsStyle);

export default function SectionComments(props) {
  const id = props.match.params.id;

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>3 Comments</h3>
            <Media
              avatar={profile4}
              title={
                <span>
                  Tina Andrew <small>· 7 minutes ago</small>
                </span>
              }
              body={
                <p className={classes.color555}>
                  Chance too good. God level bars. I{"'"}m so proud of
                  @LifeOfDesiigner #1 song in the country. Panda! Don{"'"}t be
                  scared of the truth because we need to restart the human
                  foundation in truth I stand with the most humility. We are so
                  blessed!
                </p>
              }
            />

            <SectionWriteComment {...props}/>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
