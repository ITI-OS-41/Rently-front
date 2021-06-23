import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import cardBlog4 from "../../assets/img/examples/card-blog4.jpg";
import CardBody from "../Card/CardBody";
import React from "react";
import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";
import {makeStyles} from "@material-ui/core";
import CardAvatar from "../Card/CardAvatar";

const useStyles = makeStyles(teamStyle);
export default function UserCard(props) {
  const classes = useStyles();
  const {user} = props;

  return (
    <Card profile plain>
      <CardAvatar profile plain>
        <a href="#">
          <img src={user.photo} alt={user.name} className={classes.img} style={{
            width: '130px',
            height: '130px',
            objectFit: 'cover'
          }} />
        </a>
      </CardAvatar>
      <CardBody plain>
        <h4 className={classes.cardTitle}>{user.firstname} {user.lastname}</h4>
        <h6 className={classes.textMuted}>{user.email}</h6>
        <p className={classes.cardDescription}>
          {user.rating}
        </p>
      </CardBody>
    </Card>
  )
}
