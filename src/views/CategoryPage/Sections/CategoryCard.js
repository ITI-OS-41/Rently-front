import React from 'react';
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js"; 
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import history from 'functions/history'

const useStyles = makeStyles((theme) => ({
    card: {
    //   display: 'flex',
      marginTop:'20%'
    },

  
  }));
export default function CategoryPage({ cat }) {



    
  const classes = useStyles();


  return (

      <div>



<GridContainer justify="center">
            <GridItem xs={12} md={6} lg={4}>
            <Card className={classes.card}
             onClick={() =>  history.push("/subcategory/"+cat._id)}
            >
                {/* <CardAvatar >
                  
                </CardAvatar> */}
                <CardHeader
                  color="primary"
                  
                >
                    {/* <img src = {cat.photo}/> */}
                  <h4 >{cat.name}</h4>
                </CardHeader>
                <CardBody>
                <h3>{cat.description}</h3>
                </CardBody>
              </Card>
              </GridItem>
          </GridContainer>
        </div>
  );
}





