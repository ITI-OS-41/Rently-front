import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    fontSize: "1.2rem",
    marginTop: theme.spacing(5),
  },
  link: {
    color: "#000",
    fontWeight: "500",
    marginBottom: "0.75em",
    "&:hover": {
        color: "#038C7F",
    },
    h2: {
      
    }
},
}));

export default function Links() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="/about-us" className={classes.link}>About Us</Link></h2>
        </Grid>
        <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="/contact-us" className={classes.link}>Contact Us</Link></h2>
        </Grid>
        <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="#" className={classes.link}>Nonprofit</Link></h2>
        </Grid>
        <Grid item xs={12} sm={2}>
          <h2 className={classes.paper}><Link href="#" className={classes.link}>Careers</Link></h2>
        </Grid>
        <Grid item xs={12} sm={2}>
        </Grid>
      </Grid>
    </div>
  );
}
