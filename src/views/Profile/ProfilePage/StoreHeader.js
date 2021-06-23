import GridContainer from "../../../components/Grid/GridContainer";
import Grid from "@material-ui/core/Grid";
import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import profilePageStyle from "../../../assets/jss/material-kit-pro-react/views/profilePageStyle";
import Button from "../../../components/CustomButtons/Button";
import {Link, NavLink} from "react-router-dom";
import {primaryColor} from "../../../assets/jss/material-kit-pro-react";
import StorePage from "../StorePage/StorePage";

const useStyles = makeStyles(profilePageStyle);

export default function StoreHeader(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );


  const {user, ...rest} = props

  const links = [
    {
      url: `/user/${user._id}/`,
      name: 'Store',
    },
    {
      url: `/user/${user._id}/reviews`,
      name: 'Reviews',
    },
  ]

  const handleStartConversation = (id) => {
    alert(`i will handle start conversation with ${id} later..`)
  };
  return (

    <GridContainer>
      <Grid item md={6} sm={12}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img
            src={user.photo}
            className={imageClasses}
            style={{objectFit: 'cover', height: '100px', width: '100px', display: 'inline-block'}}
          />

          <div style={{display: 'inline-block', marginLeft: '1rem'}}>
            <h4 style={{fontWeight: 'bold'}}>{user?.store?.name || user.username}</h4>
            <h5>{user?.store?.description || user.email}</h5>
          </div>
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <div style={{textAlign: 'right', marginTop: '1rem'}}>
          {
            links.map(link=>(
              <Button key={link.url} component={NavLink} exact={true} style={{marginLeft: '0.5rem'}} activeStyle={{ backgroundColor: primaryColor[3] }} to={link.url}  round>{link.name}</Button>
            ))
          }
          <Button
            onClick={()=>(handleStartConversation(user._id))}
            style={{marginLeft: '0.5rem'}}
            round
          >Message</Button>

        </div>
      </Grid>
    </GridContainer>
  )
}
