import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import classNames from "classnames";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Button from "../../../components/CustomButtons/Button";
import Parallax from "../../../components/Parallax/Parallax";
import React from "react";
import presentationStyle from "../../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import history from "../../../functions/history";

import {makeStyles, TextField} from "@material-ui/core";
import headerStyle from "../../../assets/jss/material-kit-pro-react/components/headerStyle";



const useStyles = makeStyles({
  ...headerStyle,
  ...presentationStyle
});

export default function MainPageParallax() {
  const classes = useStyles();


  const handleSearch = e => {
    e.preventDefault();
    const q = e.target.search.value;
    console.log(q)

    if (q){
      history.push(`/search?name=${q}`)
    }

  }



  return (
    <Parallax
      image={require("../../../assets/img/bg6.jpg").default}
      className={classes.parallax}
    >
      <div className={classes.container}>
        <GridContainer style={{justifyContent: 'center'}}>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={classNames(
              classes.mlAuto,
              classes.mrAuto,
              classes.textCenter
            )}
          >
            <h1 className={classes.title} style={{textAlign: 'center'}}>Rent anything from  anyone</h1>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <Card raised className={classes.card}>
              <CardBody formHorizontal>
                <form onSubmit={handleSearch}>
                  <GridContainer>
                    <GridItem xs={12} sm={8} md={8}>
                      <TextField
                          variant="standard"
                          fullWidth
                          id="search"
                          name="search"
                          label="Search"
                        />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                      <Button
                        type="submit"
                        block
                        color="primary"
                      >
                        Search
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}
