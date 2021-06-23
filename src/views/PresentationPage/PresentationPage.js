/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components

import Parallax from "components/Parallax/Parallax.js";

import Footer from "components/global/Footer";
import Header from "components/global/Header";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.js";
import SectionCards from "views/PresentationPage/Sections/SectionCards.js";
import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
import SectionSections from "views/PresentationPage/Sections/SectionSections.js";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.js";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.js";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

// core components
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";



const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Parallax
        image={require("assets/img/bg4.jpg").default}
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
              <h1 className={classes.title}>You should work with us!</h1>
              <h4>
                Now you have no excuses, it{"'"}s time to surprise your
                clients, your competitors, and why not, the world. You
                probably won
                {"'"}t have a better chance to show off all your potential if
                it{"'"}s not by designing a website for your own agency or web
                studio.
              </h4>
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
                      <GridItem xs={12} sm={3} md={3}>
                        <CustomInput
                          id="name"
                          inputProps={{
                            placeholder: "Company name",
                          }}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.formControl,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={3} md={3}>
                        <CustomInput
                          id="email"
                          inputProps={{
                            placeholder: "Company email",
                          }}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.formControl,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={3} md={3}>
                        <CustomInput
                          id="password"
                          inputProps={{
                            placeholder: "Company password",
                            type: "password",
                            autoComplete: "off",
                          }}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.formControl,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={3} md={3}>
                        <Button
                          block
                          color="primary"
                          className={classes.button}
                        >
                          Sign up
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />

      <Footer />
    </div>
  );
}
