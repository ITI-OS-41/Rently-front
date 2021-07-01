import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Media from "components/Media/Media.js";
import Button from "../../../components/CustomButtons/Button";
import history from "functions/history";
import { useHistory } from "react-router";

import { get, patch, post } from "functions/request";
import { grayColor, title } from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import { dateTime } from "functions/helpers";
import update from "react-addons-update";
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
  color555: {
    "&,& *": {
      color: grayColor[15] + " !important",
    },
  },
};

const useStyles = makeStyles(sectionCommentsStyle);

export default function SectionComments({ rate, loggedInUser }) {
  const [rent, setRent] = useState(rate);
  const [newcomment, setNewComment] = useState(false);
  const [comment, setComment] = useState(null);
  const history = useHistory();

  const handleComment = (event) => {
    setComment(event.target.value);
  };
  console.log("rent ", rent);
  const classes = useStyles();

  const handleSubmit = () => {
    const review = {
      item: rent.item._id,
      rater: loggedInUser._id,
      comment: comment,
      rating: rent.rating,
    };
    console.log("rev0 > ", review);

    post(`/itemrate/${rent._id}`, review, "Comment Updated successfully ♥ ")
      .then((response) => {
        // history.push({SectionComments});
        // history.push(`/item/${rent.item._id}`);
        console.log("rev it ", review.item);

        console.log("equal888");
        update(rent, { comment: { $set: comment } });
      })
      .catch((e) => {
        console.log(" e e e e ", e);
      });

  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            {rent && (
              <Media
                key={rent._id}
                avatar={rent?.rater?.photo}
                title={
                  <span>
                    {rent?.rater?.firstname}
                    <small> {dateTime(rent.createdAt)}</small>
                  </span>
                }
                body={<p className={classes.color555}><h6>Rate: {rent.rating} Stars</h6><h3>{rent.comment}</h3></p>}
              />
            )}
            {loggedInUser._id === rent?.rater?._id && (
              <button
                onClick={() => setNewComment(true)}
                style={styles.button}
                round
              >
                Edit Comment
              </button>
            )}
            {newcomment && (
              <div>
                <textarea
                  placeholder={rent.comment}
                  style={styles.textarea}
                  onChange={handleComment}
                />
                <button style={styles.button} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            )}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
const styles = {
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
};
