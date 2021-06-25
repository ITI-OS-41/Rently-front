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
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/global/Header.js";
import HeaderLinks from "../../components/global/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import Accordion from "../../components/Accordion/Accordion.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import productStyle from "../../assets/jss/material-kit-pro-react/views/productStyle.js";
import ItemRating from '../../components/Items/ItemRating';
import ItemCancellation from '../../components/Items/ItemCancellation';

// images
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

const useStyles = makeStyles(productStyle);

export default function ItemPage() {

  const [item, setItem] = useState([]);

  const { id } = useParams();
  const ITEM_URL = `/item/?_id=${id}`;

  useEffect(() => {
    const getItem = async () => {
      const itemFromServer = await fetchItem()
      console.log(itemFromServer)
      setItem(itemFromServer)

    }
    getItem()

  }, []);

  const fetchItem = async () => {
    try {
      const res = await get(ITEM_URL);
      const { data } = res;

      return data

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
          {item && !!item.length && item.map((item) => (

            <div className={classNames(classes.main, classes.mainRaised, classes.textCap)} key={item._id}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={3}
                    items={images}
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
                  <GridContainer>
                    {Object.entries(item.price).map((price, id) => {
                      if (price[1] > 0) {
                        return (
                          <GridItem item key={id} md={4} sm={4}>
                            <strong>EGP${price[1]}.00</strong> <br />{price[0]}
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
                            <span>Owner Address</span> <br />
                            <Link to={`/user/${item.owner._id}`} className={classes.storeName}>View my store</Link>
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
                  <span className="prices">Owner Address <ItemRating itemRate={item.itemRate} /></span>

                  <GridContainer className={classes.pullRight}>
                    <Button round color="info">
                      Add to Cart &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>

          ))}

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
  );
}
