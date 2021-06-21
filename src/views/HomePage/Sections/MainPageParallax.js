import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import classNames from "classnames";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Button from "../../../components/CustomButtons/Button";
import Parallax from "../../../components/Parallax/Parallax";
import React from "react";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import {makeStyles} from "@material-ui/core";



export default function MainPageParallax() {
  const useStyles = makeStyles(presentationStyle);
  const classes = useStyles();

  return (
    <Parallax
      image={require("assets/img/bg6.jpg").default}
      className={classes.parallax}
    >
      <div className={classes.conatinerHeader2}>
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
                <form>
                  <GridContainer>
                    <GridItem xs={12} sm={8} md={8}>
                      <CustomInput
                        inputProps={{
                          placeholder: "Search keyword",
                        }}
                        formControlProps={{
                          fullWidth: true,
                          style: {
                            marginBottom: '0',
                            padding: '0',
                            marginTop: '0.8rem'
                          }
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                      <Button
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
