import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Media from "components/Media/Media.js";
import SectionWriteComment from "./SectionUserRate";
import Rating from '@material-ui/lab/Rating';

import { get } from 'functions/request';
import { grayColor, title } from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import { dateTime } from 'functions/helpers';

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
const StyledRating = withStyles({
  iconFilled: {
    color: 'gold',
  },
})(Rating);

const useStyles = makeStyles(sectionCommentsStyle);

export default function SectionComments(props) {
  const { newComment, ...rest } = props;

  const [rates, setRates] = useState([]);

  useEffect(() => {
    get(`/apprate/`)
      .then(res => {
        setRates(res.data.res)
      })
  }, [])

  useEffect(() => {
    if (newComment.rater) {
      setRates([
        ...rates,
        newComment
      ])
    }
  }, [newComment])

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>Ratings & Reviews</h3>

            {
              rates && (
                rates.map(rate => (
                  <Media
                    key={rate._id}
                    avatar={rate.rater.photo}
                    title={
                      <span>
                        {rate.rater.username} <small> {dateTime(rate.createdAt)}</small>
                        <br />
                        <StyledRating
                          name="Rating Label"
                          value={rate.rating}
                          size="small"
                          readOnly
                        />
                      </span>
                    }
                    body={
                      <p className={classes.color555}>
                        {rate.comment}.
                      </p>
                    }
                  />

                ))
              )
            }

          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
