/*eslint-disable*/
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { get, patch, post } from "../../functions/request";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import LoadingContainer from "../../components/global/LoadingContainer";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import history from "../../functions/history";
import Button from "../../components/CustomButtons/Button";

import Parallax from "../../components/Parallax/Parallax.js";
import productStyle from "../../assets/jss/material-kit-pro-react/views/productStyle.js";
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import ItemRating from "../../components/Items/ItemRating";
import ItemCancellation from "../../components/Items/ItemCancellation";
import ItemRent from "../../components/Items/ItemRent.js";
import { UserContext } from "../../Context";
import Grid from "@material-ui/core/Grid";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import defaultImage from "../../assets/img/noimagelarge.png";
import GridContainer from "../../components/Grid/GridContainer";
import ItemReview from "./Sections/ItemReview";
import AllReviews from "./Sections/AllReviews";
import GridItem from "../../components/Grid/GridItem";
import Share from "../../components/global/Share";

import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import IconButton from "@material-ui/core/IconButton";
import NoDataToShow from "../../components/global/NoDataToShow";
import Typography from "@material-ui/core/Typography";

const customStyle = {
  timeRateLabel: {
    textAlignEnd: "center",
    fontSize: "14px",
    padding: "0",
  },
  valueRateLabel: {
    fontSize: "20px",
    whiteSpace: "nowrap",
    overFlow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "600!important",
    paddingRight: ".7rem",
    width: "100%",
  },
  storeName: {
    letterSpacing: "0",
    textAlignLast: "left",
    fontSize: "1.125rem",
    // color: "#00acc1!important",
    width: "100%",
    fontWeight: "700!important",
    textTransform: "capitalize",
  },
  cartButton: {
    width: "100%",
    textTransform: "capitalize",
  },
  selectColor: {
    color: "#00acc1",
  },
  title: {
    fontWeight: 400,
    textTransform: "capitalize",
  },
  imgClass: {
    "& > div > div > img": {
      height: "300px",
      width: "auto",
      objectFit: "contain",
    },
  },
  outOfStock:{
    color:"red"
  }
};

const useStyles = makeStyles({
  ...presentationStyle,
  ...productStyle,
  ...customStyle,
});

export default function ItemPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const id = props.match.params.id;
  const { user: loggedInUser, setUser } = useContext(UserContext);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [priceSelect, setPriceSelect] = useState("");
  const { user } = useContext(UserContext);
  const [images, setImages] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const distanceToKMRate = 0.75; // 0.75$ for each KM
  const distanceToTimeRate = 70; // KM/Hour

  const handleStartConversation = (userId) => {
    // create conversation between two users
    post(
      `conversation`,
      {
        receiver: userId,
      },
      null
    )
      .then((res) => {
        history.push(`/messenger?${res.data._id}`);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    setIsLoading(true);
    get(`/item/${id}`)
      .then((response) => {
        const res = response.data;
        setItem(res);
        console.log("res of Item ----------------- ", res);
        let i = [];
        if (res.photo.length) {
          res.photo.forEach((photo) => {
            i.push({
              original: photo,
              thumbnail: photo,
              // originalClass: classes.imgClass,
              originalHeight: 300,
            });
            // alert(photo)
          });
        }
        setImages(i);
        calcCrow(
          loggedInUser.location.coordinates[0],
          loggedInUser.location.coordinates[1],
          response.data.location.coordinates[0],
          response.data.location.coordinates[1]
        );
        productIsLiked(response.data);
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  const calcCrow = (lat1, lon1, lat2, lon2) => {
    console.log(lat1, lon1);
    lat1 = parseFloat(lat1);
    lon1 = parseFloat(lon1);
    lat2 = parseFloat(lat2);
    lon2 = parseFloat(lon2);
    let R = 6371; // km
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    setDeliveryDistance(parseInt(R * c));
  };

  // Converts numeric degrees to radians
  const toRad = (Value) => {
    return (Value * Math.PI) / 180;
  };

  const productIsLiked = (item) => {
    for (let i = 0; i < loggedInUser.favoriteItems.length; i++) {
      if (loggedInUser.favoriteItems[i]._id == item._id) {
        console.log("found in index, ", i);
        setIsLiked(true);
      }
    }
  };

  const handleLikeBtn = () => {
    console.log(loggedInUser.favoriteItems);
    console.log({ isLiked });

    let favoriteItems = [...loggedInUser.favoriteItems];

    if (isLiked) {
      // dislike
      const index = favoriteItems.indexOf(item._id);
      favoriteItems.splice(index, 1);
      setIsLiked(false);
    } else {
      // like
      favoriteItems = [...favoriteItems, item._id];
      setIsLiked(true);
    }

    patch(
      "/user/update",
      {
        favoriteItems,
      },
      isLiked ? "Product removed from favourite" : "Product added to favourite"
    ).then((res) => {
      setUser({
        ...loggedInUser,
        favoriteItems,
      });
    });
  };

  return (
    <div className={classes.productPage}>
      <Header />
      <Parallax
        image={
          require("../../assets/img/examples/clark-street-merc.jpg").default
        }
        filter="dark"
        className={classes.pageHeader}
        style={{ height: "16rem" }}
      />
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ margin: "-300px 30px 0px" }}
      >
        {isLoading ? (
          <LoadingContainer />
        ) : (
          <>
            <GridContainer>
              <GridItem md={8} sm={6}>
                <div style={{ display: "block", marginBottom: "2rem" }}>
                  <h2
                    className={classNames(classes.title, classes.CardText)}
                    style={{ marginTop: "0" }}
                  >
                    {item?.name}

                    <IconButton
                      onClick={() => {
                        handleLikeBtn();
                      }}
                      aria-label="facebook"
                      style={{ float: "right", marginTop: "1rem" }}
                    >
                      {isLiked ? (
                        <FavoriteOutlinedIcon
                          fontSize="small"
                          color={"error"}
                        />
                      ) : (
                        <FavoriteBorderOutlinedIcon
                          fontSize="small"
                          color={"error"}
                        />
                      )}
                    </IconButton>
                  </h2>
                  <span className="prices">
                    <small>{item?.location?.address}</small>
                  </span>
                  <small>
                    <ItemRating itemRate={item?.itemRate} />
                  </small>
                </div>
                <div style={{ height: "30rem" }}>
                  {images.length ? (
                    <ImageGallery
                      originalClass={classes.imgClass}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      startIndex={0}
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
                  ) : (
                    <img
                      src={defaultImage}
                      style={{ width: "100%", height: "auto" }}
                      alt={item?.name}
                    />
                  )}
                </div>

                {Object.entries(item?.price).map((price, id) => {
                  if (price[1] > 0) {
                    return (
                      <>
                        <span className={classes.valueRateLabel}>
                          EGP${price[1]}.00
                        </span>
                        <span
                          style={{
                            display: "inline-block",
                            paddingRight: "2rem",
                          }}
                        >
                          {price[0]}
                        </span>
                      </>
                    );
                  }
                })}

                <div>
                  <small>
                    <em>
                      <strong>Starting at </strong>EGP
                      {Math.min(
                        ...Object.values(item.price).filter((item) => item > 0)
                      )}
                      .00
                    </em>
                  </small>
                </div>

                <hr />
                <div>
                  <h2 className={classes.storeName}>
                    {item?.name} -{" "}
                    <span className={classes.title}>{item?.condition}</span>
                  </h2>
                  <div>
                    <Typography className={ `${classes.storeName} ${item.stock===0&&classes.outOfStock}`}>Stock: {item.stock}</Typography>

                    <Typography >{item?.description}</Typography>
                  </div>
                </div>
                <hr />
                <div>
                  <Grid container>
                    <Grid item md={2}>
                      <div style={{ paddingRight: "2rem" }}>
                        <img
                          src={item?.owner?.photo}
                          className={imageClasses}
                          style={{
                            objectFit: "cover",
                            height: "100px",
                            width: "100px",
                            display: "inline-block",
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <h5 style={{ padding: "0" }}>
                        Owned by: {item.owner.username}
                      </h5>
                      <small>
                        {item?.location?.address}
                        Cairo,Egypt
                      </small>
                      <br />
                      <small>
                        <ItemRating itemRate={item?.itemRate} />
                      </small>
                      <br />
                      <Link
                        to={`/user/${item.owner._id}`}
                        className={classes.storeName}
                      >
                        View store
                      </Link>
                    </Grid>
                    <Grid item md={5}>
                      <Card style={{ margin: "0" }}>
                        <Grid container>
                          <Grid item md={1}>
                            <div
                              style={{
                                position: "relative",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)",
                                paddingLeft: ".5rem",
                              }}
                            >
                              <VerifiedUserIcon style={{ fontSize: 30 }} />
                            </div>
                          </Grid>
                          <Grid item md={11}>
                            <p style={{ padding: "1rem" }}>
                              Rently verifies all postings to ensure you have
                              the best experience!
                            </p>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
                <hr />

                <span className={classes.storeName}>
                  Pickup & Return Options
                </span>
                <p>
                  Delivery option is available. Provide your location to see the
                  estimated delivery cost.
                </p>
                <p>
                  This is approximately {deliveryDistance}KM (
                  {deliveryDistance / distanceToTimeRate})Hour away from your
                  location
                </p>
                <p>
                  Estimated delivery rate each way (
                  {deliveryDistance / distanceToKMRate})$
                </p>
                <div>
                  {/*<iframe frameBorder={0} width={'100%'} height={'250px'} src ={`https://maps.google.com/maps?q=0,0&hl=es;z=14&amp;output=embed`}></iframe>*/}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<iframe src="https://maps.google.com/maps?hl=en&amp;q=${item.location.coordinates[0]},${item.location.coordinates[1]}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width='100%' height='250px'  style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
                    }}
                  />
                </div>
                <hr />

                <span className={classes.storeName}>Available Times</span>

                <span className={classes.storeName}>Keep in Mind</span>
                <p>
                  You remain fully liable to the Owner for any damage, loss, or
                  theft of the item during the rental period.
                </p>
                <hr />
                <span className={classes.storeName}>Cancellation</span>
                <ItemCancellation itemPolicy={item.cancellation} />
              </GridItem>
              <GridItem md={4} sm={6}>
                <Share />

                {user._id !== item.owner._id && (
                <Card>
                  <CardBody>
                      <>
                        <ItemRent
                          item={item}
                          deliveryPrice={deliveryDistance? Math.round(deliveryDistance / distanceToKMRate) : 0}
                          maxQuantity={item.stock}
                        />
                      </>
                  </CardBody>
                </Card>
                )}

                <div style={{ textAlign: "center" }}>
                  <Button
                    color={"info"}
                    onClick={() => handleStartConversation(item.owner._id)}
                    style={{ margin: "0.5rem auto" }}
                    round
                  >
                    Message {item?.owner?.username}
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
            <ItemReview item={item} />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
