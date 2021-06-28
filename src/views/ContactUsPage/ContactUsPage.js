/*eslint-disable*/
import React, { useState, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import Parallax from "components/Parallax/Parallax.js";
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Question from "assets/img/question.png";
import Shipping from "assets/img/shipping.png";
import Warranty from "assets/img/verify.png";
import ProductRegistraton from "assets/img/prize.png";
import Privacy from "assets/img/privacy.png";
import CardBody from "components/Card/CardBody.js";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

const cards = [
  {
    title: "Product FAQs",
    image: Question,
  },
  {
    title: "Shipping & Returns",
    image: Shipping,
  },
  {
    title: "Warranty",
    image: Warranty,
  },
  {
    title: "Product Registeration",
    image: ProductRegistraton,
  },
  {
    title: "Privacy Inquery",
    image: Privacy,
  },
];
export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const myRef = useRef();
  const [spacing, setSpacing] = React.useState(2);
  const [showContactForm, setShowContactForm] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const handleScrollDown = () => {
    if (flag == false) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
  React.useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, [flag]);

  const classes = useStyles();
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
              <h1 className={classes.title}>CONTACT US </h1>
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
        <div>
          <div style={{ padding: "4rem 3rem" }}>
            <GridContainer>
              {cards.map((card) => (
                <GridItem style={{ margin: "auto" }} md={2} sm={4}>
                  <Card plain>
                    <CardBody
                      className={classes.cardBodyRefine}
                      style={{ textAlign: "center" }}
                    >
                      <img src={card.image} />
                      <Typography>{card.title}</Typography>
                    </CardBody>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        style={{ display: "inline-block", margin: "auto" }}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </GridItem>
              ))}
            </GridContainer>
            <h1 style={{ textAlign: "center", padding: "10px" }}>
              <b ref={myRef}>Still can't find your answer??</b>
            </h1>
            <p style={{ paddingTop: "2px", textAlign: "center" }}>
              You can contact us with anything related to our Products. We
              {"'"}ll get in touch with you as soon as possible.
            </p>
            <div className="contact-form">
              <h2 style={{ paddingTop: "2px", textAlign: "center" }}>
                Send us a message
              </h2>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    setShowContactForm(true);
                    handleScrollDown();
                  }}
                  size="small"
                  color="primary"
                  style={{ display: "inline-block", margin: "auto" }}
                >
                  Send us an Email
                </Button>
              </div>
              {showContactForm && (
                <GridContainer>
                  <GridItem style={{ margin: "auto" }} md={6} sm={6}>
                    <form>
                      <CustomInput
                        labelText="Your Name"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      <CustomInput
                        labelText="Email address"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      <CustomInput
                        labelText="Phone"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      <CustomInput
                        labelText="Your message"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 6,
                        }}
                      />
                      '{" "}
                      <div className={classes.textCenter}>
                        '{" "}
                        <Button color="primary" round>
                          Contact us
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </GridContainer>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
