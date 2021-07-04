/*eslint-disable*/
import React, { useState, useRef, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Parallax from "components/Parallax/Parallax.js";
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { primaryColor } from "../../assets/jss/material-kit-pro-react";
import Button from "components/CustomButtons/Button.js";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { get } from "../../functions/request";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";
import CardBody from "components/Card/CardBody.js";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(aboutUsStyle);

export default function GeneralFAQs() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    get("/category?model=faq&limit=100").then((response) => {
      let res = response.data.res;
      setCategories(res);
      console.log("response--> ", response);
      console.log("res--> ", res);
    });
  }, []);

  // useEffect(() => {
  //   get("/subcategory?category=${id}&limit=100").then((response) => {
  //     let res = response.data.res;
  //     setsubcategory(res);
  //     console.log("response--> ", response);
  //     console.log("res--> ", res);
  //   });
  // }, []);
 const [subcategories, setSubcategory] = useState([])
 const [isCategoryClicked, setIsCategoryClicked] = useState(false)
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  // const handleCategoryClicked = (id)=>{
  //   let targetCategory = {};
  //   categories.forEach(category => {
  //     if(category._id==id){
  //       targetCategory=catogry;
  //       // setSubcategory(targetCategory.subcategory);

  //     }
  //   });
  //   console.log({targetCategory});
  // }
  return (
    <div>
      <Header />
      <Parallax
        image={require("assets/img/contact.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>FAQs</h1>
              <h4>
                Rently was created to reduce the destructive environmental
                impact of traditional systems of production by keeping products
                and equipment in use for longer.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{ padding: "1rem 3rem" }}>
          <GridContainer>
            <Grid item sm={2} style={{ padding: "4rem 0rem" }}>
              <div>
                {categories.map((category) => (
                  <Button
                    key={category._id}
                    // component={NavLink}
                    exact={true}
                    activeStyle={{ backgroundColor: primaryColor[3] }}
                    // to={category.url}
                    fullWidth
                    round
                    // onClick={()=>{handleCategoryClicked(category._id)}}
                  >
                    {category.name}
      
                  </Button>
                ))}
              </div>
            </Grid>

            <Grid item sm={10} style={{ padding: "1rem 3rem" }}>
              {/* <Switch>
                {links.map((link) => (
                  <Route exact={true} path={link.url}>
                    {link.component}
                  </Route>
                ))}
              </Switch> */}
              {categories.map((category) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    {categories.map((category) => (
                      <Typography className={classes.heading}>
                        {category.subcategory[0]}
                      </Typography>
                    ))}
                    ;
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
              ;
            </Grid>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
