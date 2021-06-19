import React, { useEffect, useState } from "react";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CategoryCard from "./Sections/CategoryCard";
import { get } from "functions/request";
import Grid from "@material-ui/core/Grid";
import SectionInterested from "./Sections/SectionInterested.js";

const useStyles = makeStyles((theme) => ({
  card: {
    //   display: 'flex',
    marginTop: "10%",
  },
  title: {
    color: "white",
    textAlign: "center",
    // position: "relative",
    textTransform: "uppercase",
    // display: "block",
  },
  main: {
    background: "white",
    position: "relative",
    zIndex: "3",
  },
  container:{
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
  }
}));
export default function CategoryPage() {
  const classes = useStyles();
  const [Categories, setCategory] = useState([]);
  useEffect(() => {
    get("/category").then((response) => {
      let res = response.data;
      setCategory(res);
      console.log("response-00-> ", response);
      console.log("res-00-> ", res);
    });
  }, []);
  return (
    <div>
      <Parallax
        image={require("assets/img/bg10.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                Scroll Down to watch our Categories
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <Header />

      {/* <Grid container spacing={3}>
        {Categories.map((cat) => (
          <Grid item key={cat._id} xs={12} md={6} lg={4}>
            <CategoryCard cat={cat} />
          </Grid>
        ))}
      </Grid> */}

      <div className={classes.main}>
        <div className={classes.container}>
        <Grid container spacing={6}>
        {Categories.map((cat) => (
          <Grid item key={cat._id} xs={12} md={4} lg={4}>
            <SectionInterested cat={cat}  />
          </Grid>
        ))}
      </Grid>
         
        </div>
     
      </div>



      <Footer />
    </div>
  );
}
