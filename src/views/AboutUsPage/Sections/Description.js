import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#000",
      color:"#fff",
      padding: theme.spacing(4),
      borderRadius: "7px",
    },
    paper: {
      textAlign: 'start',
      margin: 0,
    },
    divStyle:
    {
      backgroundColor: "#038C7F",
      width:"3px",
      height: "90%",
      marginLeft: theme.spacing(6),
    }
  }));


export default function Description() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{margin: "40px 0"}}>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <div  className={classes.divStyle}></div>
          </Grid>
          <Grid item xs={11} className={[classes.paper ,"styling"].join(' ')}>
            <div>"We are passionate about giving everyone the opportunity to start their own rental business through the Rently app, while helping the environment. Renting instead of buying helps lower our carbon footprint, and we believe that the sharing-economy will ultimately have a profound, positive impact on our planet."</div>
            <p>Rently Founder & CEO, Steve Cody</p>
          </Grid>
        </Grid>
            
        </div>
    )
}
