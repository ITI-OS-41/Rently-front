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
import { FaStar } from "react-icons/fa";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import { dateTime } from "functions/helpers";
import update from "react-addons-update";

import defaultImage from '../../../assets/img/noimagelarge.png'


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

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const useStyles = makeStyles(sectionCommentsStyle);

export default function SectionComments(props) {
  const {rate,loggedInUser,itemId, ...rest} = props;

  const [newcomment, setNewComment] = useState(false);
  const [comment, setComment] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);


  const handleClick = (value) => {
    setCurrentValue(value);
  };
 
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const classes = useStyles();

  const handleSubmit = () => {
    const review = {
      item: rate.item._id,
      rater: loggedInUser._id,
      comment: comment,
      rating: currentValue,
    };

    post(`/itemrate/${rate._id}`, review, "Your review Updated successfully ♥ ")
      .then((response) => {
        window.location.reload();

        update(rate, { comment: { $set: comment } });
      })
      .catch((e) => {
      });

  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
           
            {(rate && rate.item._id == itemId ) && (
              <Media
                key={rate._id}
                avatar={rate?.rater?.photo || defaultImage}
                title={
                  <span>
                    {rate?.rater?.firstname}
                    <small> {dateTime(rate.createdAt)}</small>
                  </span>
                }
                body={<p className={classes.color555}><h6>Rate: {rate.rating} Stars</h6><h3>{rate.comment}</h3></p>}
              />
            )}
            {loggedInUser._id === rate?.rater?._id && (
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
                 <div style={styles.stars}>
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={15}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={
                      (hoverValue || currentValue) > index
                        ? colors.orange
                        : colors.grey
                    }
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                      marginTop:10
                    }}
                  />
                );
              })}
            </div>
                <div  >
                <textarea
                  placeholder={rate.comment}
                  style={styles.textarea}
                  onChange={handleComment}
                />
                <button style={styles.button} onClick={handleSubmit}>
                  Submit
                </button>
                </div>
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
    width: 200,
    padding: 5,
    // float:'left',

  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
    display: 'block',

  },
};
