import React, {useEffect, useState}  from 'react';
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js"; 
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SubCategoryCard from './Sections/SubCategoryCard';
import {get} from 'functions/request';
import Grid from '@material-ui/core/Grid';
import SectionInterested from "./Sections/SectionInterested.js";


const useStyles = makeStyles((theme) => ({
    card: {
    //   display: 'flex',
      marginTop:'10%'
    },
    title: {
        color: 'white',
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
export default function SubCategoryPage(props) {
    const id = props.match.params.id
    console.log("log ",id);


    
  const classes = useStyles();
  const [SubCategories,setSubCategory] = useState([]);
     useEffect(() => {

        get(`/subcategory?category=${id}`)
                .then(response => {
                    let res = response.data
                    setSubCategory(res)
                   console.log("cat-> ",res);
                    })
        }, [])
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
           




            <div className={classes.main}>
        <div className={classes.container}>
        <Grid container spacing={6}>
        {SubCategories.map((cat) => (
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
