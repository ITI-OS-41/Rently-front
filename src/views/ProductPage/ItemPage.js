/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { get } from '../../functions/request';

// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/global/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import ItemRating from 'components/Items/ItemRating';
import ItemCancellation from 'components/Items/ItemCancellation';
import { Divider } from "@material-ui/core";

// images
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

const customStyle = {
  smallRateLabel: {
    textAlign: "center!important",
    fontSize: "16px",
    padding: "0 2rem",

  },
  bigRateLabel: {
    fontSize: "18px",
    whiteSpace: "nowrap",
    overFlow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "700!important",
    padding: "0 .1rem",
    width: "100%"


  },
  textColor: {

  },

}
const useStyles = makeStyles({
  ...productStyle,
  ...customStyle,
});

export default function ItemPage(props) {


  const id = props.match.params.id;
  const ITEM_URL = `/item/${id}`;

  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();

  }, []);

  const fetchItem = async () => {
    try {
      const response = await get(ITEM_URL);
      setItem(response.data.res)
      // console.log(response)
      console.log(response.data)

    } catch (error) {
      console.error(error);
    }
  };

  const classes = useStyles();
  const images = [
    {
      original: product3,
      thumbnail: product3,
    },
    {
      original: product4,
      thumbnail: product4,
    },
    {
      original: product1,
      thumbnail: product1,
    },
    {
      original: product2,
      thumbnail: product2,
    },
  ];

  return (
    item && (
      <div className={classes.productPage}>

        <Header
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 100,
            color: "info",
          }}
        />
        <Parallax
          image={require("assets/img/examples/clark-street-merc.jpg").default}
          filter="dark"
          className={classes.pageHeader}
        >
          <div className={classes.container}>
            <GridContainer className={classes.titleRow}>
              <GridItem md={4} className={classes.mlAuto}>
                <Button color="white" className={classes.floatRight}>
                  <ShoppingCart /> 0 items
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>

            <div className={classNames(classes.main, classes.mainRaised, classes.textCap)} key={item._id}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={3}
                    items={item.image ? item.image : images}
                    showThumbnails={true}
                    renderLeftNav={(onClick, disabled) => {
                      return (
                        <button
                          className="image-gallery-left-nav"
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                    renderRightNav={(onClick, disabled) => {
                      return (
                        <button
                          className="image-gallery-right-nav"
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h1 className={classNames(classes.title, classes.CardText)}>{item.name}</h1>
                  <span className="prices"><small>{item.location.address}</small></span><br />
                  <small><ItemRating itemRate={item.itemRate} /></small>
                  <GridContainer>

                    {Object.entries(item.price).map((price, id) => {
                      if (price[1] > 0) {
                        return (
                          <GridItem item key={id} md={3} sm={3}>
                            <span className={classes.bigRateLabel}>EGP${price[1]}.00</span><Divider orientation="vertical" flexItem />
                            <span className={classes.smallRateLabel}>{price[0]}</span>
                          </GridItem>
                        )
                      }
                    })}
                  </GridContainer>

                  <Accordion
                    active={0}
                    activeColor="info"
                    collapses={[
                      {
                        title: `${item.name} - ${item.condition}`,
                        content: (
                          <p>
                            {item.description}
                          </p>
                        ),
                      },
                      {
                        title: `Owned by`,
                        content: (
                          <p>
                            <strong>Owned by {item.owner.username}</strong> <br />

                            <small>{item.location.address}</small> <br />
                            <a href={`/items/${item._id}`} className={classes.storeName}>View my store</a>

                          </p>
                        ),
                      },
                      {
                        title: "Pickup & Return Options",
                        content: (
                          <strong>{item.deliverable ? 'Delivery option is available.' : 'No Delivery Option.'}</strong>

                        ),
                      },
                      {
                        title: "Cancellation",
                        content: (
                          <ItemCancellation itemPolicy={item.cancellation} />
                        ),
                      },
                    ]}
                  />
                  <small><em>Starting at EGP${Math.min(...Object.values(item.price))}.00</em></small>


                  <GridContainer className={classes.pullRight}>
                    <GridItem md={6} className={classes.mlAuto}>
                      <Button round color="info">
                        Set Dates and Times &nbsp; <i class="fas fa-stopwatch"></i>
                      </Button>
                      <Button round color="info">
                        Request To Rent &nbsp; <ShoppingCart />
                      </Button>
                    </GridItem>

                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>


            <div className={classNames(classes.features, classes.textCenter)}>
              <GridContainer>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Delivery"
                    description="If delivery option is available. Please provide your location to see the estimated delivery cost."
                    icon={LocalShipping}
                    iconColor="info"
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Verified User"
                    description="Rently verifies all postings to ensure you have the best experience!"
                    icon={VerifiedUser}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Keep in Mind"
                    description="You remain fully liable to the Owner for any damage, loss, or theft of the item during the rental period."
                    icon={Favorite}
                    iconColor="rose"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>

          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-pricing"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="//blog.creative-tim.com/" className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=mkpr-pricing"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://www.creative-tim.com?ref=mkpr-pricing"
                  target="_blank"
                  className={classes.aClasses}
                >
                  Creative Tim
                </a>{" "}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    ));
}
