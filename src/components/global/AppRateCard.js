import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import cardBlog4 from "../../assets/img/examples/card-blog4.jpg";
import CardBody from "../Card/CardBody";
import React from "react";
import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";
import {makeStyles} from "@material-ui/core";
import CardAvatar from "../Card/CardAvatar";
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles(teamStyle);
export default function AppRateCard(props) {
  const classes = useStyles();
  const {rate} = props;

  return (
    <Card profile plain>
      <CardAvatar profile plain>
        <a href="#">
          <img src={rate.rater.photo} alt={rate.rater.name} className={classes.img} style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover'
          }} />
        </a>
      </CardAvatar>
      <CardBody plain style={{textAlign: 'center'}}>
        <h4 className={classes.cardTitle}>{rate.rater.firstname} {rate.rater.lastname}</h4>
        <p className={classes.cardDescription}>{rate.comment}</p>
        <div >
          <span style={{color: 'gold'}}>
            {Array(rate.rating).fill(0).map((_, i) => <StarIcon key={ i}/>)}
          </span>
          <span className={classes.cardDescription}>
            {Array(5-rate.rating).fill(0).map((_, i) => <StarIcon key={ i} />)}
          </span>
        </div>
      </CardBody>
    </Card>
  )
}
