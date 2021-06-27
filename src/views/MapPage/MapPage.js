import React, { useEffect, useState } from "react";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { get } from "functions/request";
import Grid from "@material-ui/core/Grid";
import Map from "../../components/Map/Map";




const useStyles = makeStyles((theme) => ({
    card: {
      marginTop: "10%",
    },
    title: {
      color: "white",
      textAlign: "center",
      textTransform: "uppercase",
    },
    main: {
      background: "white",
      position: "relative",
      zIndex: "3",
    },
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      "@media (min-width: 576px)": {
        maxWidth: "540px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "720px",
      },
      "@media (min-width: 992px)": {
        maxWidth: "960px",
      },
      "@media (min-width: 1200px)": {
        maxWidth: "1140px",
      },
    },
  })); 
export default function MapPage(props) {
  const id = props.match.params.id;

  const classes = useStyles();


  return (
    <div>
      <Header />

     
        <Parallax image={require("assets/img/bg9.jpg").default} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h1 className={classes.title} >Hello</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
   

      <div className={classes.main}>
        <div className={classes.container}>
            <Map />
         
        </div>
      </div> 


      <Footer />
    </div>
  );
}
