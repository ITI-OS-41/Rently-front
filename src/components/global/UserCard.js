import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import cardBlog4 from "../../assets/img/examples/card-blog4.jpg";
import CardBody from "../Card/CardBody";
import React from "react";
import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";
import {makeStyles} from "@material-ui/core";
import CardAvatar from "../Card/CardAvatar";
import {Link} from "react-router-dom";

import defaultImage from '../../assets/img/noimagelarge.png';

const useStyles = makeStyles(teamStyle);
export default function UserCard(props) {
  const classes = useStyles();
  const {user} = props;

  return (
    <Card profile plain>
      <CardAvatar profile plain>
        <Link to={`user/${user._id}`}>
          <img src={user.photo || defaultImage} alt={user.name} className={classes.img} style={{
            width: '130px',
            height: '130px',
            objectFit: 'cover'
          }} />
        </Link>
      </CardAvatar>
      <CardBody plain>
        <h4 className={classes.cardTitle}>{user?.store?.name || user.firstname+' '+user.lastname}</h4>
        <h6 className={classes.textMuted}>{user.email}</h6>
        <p className={classes.cardDescription}>
          {user.rating}
        </p>
      </CardBody>
    </Card>
  )
}
