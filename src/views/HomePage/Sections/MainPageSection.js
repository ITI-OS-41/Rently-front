import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// @material-ui icons
import EventAvailableIcon from '@material-ui/icons/EventAvailableOutlined';
import CreditCard from '@material-ui/icons/CreditCardOutlined';
import LocalShipping from '@material-ui/icons/LocalShippingOutlined';
import ThumbUp from '@material-ui/icons/ThumbUpAltOutlined';
import PhoneLink from "@material-ui/icons/Phonelink";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { get } from '../../../functions/request.js';

// images
import Vodafone from "assets/img/assets-for-demo/ourClients/vodafone.jpg";
import Microsoft from "assets/img/assets-for-demo/ourClients/microsoft.jpg";
import Harvard from "assets/img/assets-for-demo/ourClients/harvard.jpg";
import Standford from "assets/img/assets-for-demo/ourClients/stanford.jpg";


import overviewStyle from "assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.js";
import MainPageSectionReviews from "./MainPageSectionReviews"
const useStyles = makeStyles(overviewStyle);

export default function MainPageSection() {
  const classes = useStyles();
  const [rates, setRates] = useState([]);


  return (
    <div className={classes.section}>
      <div
        className={classes.features5}
        style={{
          backgroundImage: `url(${require("assets/img/assets-for-demo/features-5.jpg").default
            })`,
        }}
      >
        <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <h2 className={classes.title}>See How It Works</h2>
        </GridItem>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Rent request"
                description={
                  <p>
                    Set date and time of rent and request a rent.
                  </p>
                }
                icon={EventAvailableIcon}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Money holding"
                description={
                  <p>
                    After request acceptance site will hold a deposit.
                  </p>
                }
                icon={CreditCard}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Get the item"
                description={
                  <p>
                    You will get the item and mark this on site.
                  </p>
                }
                icon={LocalShipping}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Make a payment"
                description={
                  <p>
                    You have to make a payment in any convenient way.
                  </p>
                }
                icon={AttachMoney}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classes.sectionTestimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <h2 className={classes.title}>Trusted by 100.000+ People</h2>
              <h5 className={classes.description}>
                Rently platform are
                used by
                <b> 100,000+ renter</b> in over{" "}
                <b> 22 countries in middle east</b>. This is what some of them think:
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem>
              <MainPageSectionReviews />

            </GridItem>

          </GridContainer>
          {/* <div className={classes.ourClients}>
            <GridContainer justify="center" >
              <GridItem md={3} sm={3} >
                <img src={Vodafone} alt="vodafone" />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img src={Microsoft} alt="microsoft" />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img src={Harvard} alt="harvard" />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img src={Standford} alt="stanford" />
              </GridItem>
            </GridContainer>
          </div> */}
        </div>
      </div>
    </div>
  );
}
