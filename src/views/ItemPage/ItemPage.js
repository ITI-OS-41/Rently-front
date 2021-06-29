/*eslint-disable*/
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { get } from "../../functions/request";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import LoadingContainer from "../../components/global/LoadingContainer";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import history from "functions/history";
import Button from "../../components/CustomButtons/Button";

import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Accordion from "../../components/Accordion/Accordion.js";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import ItemRating from "../../components/Items/ItemRating";
import ItemCancellation from "../../components/Items/ItemCancellation";
import ItemRent from "../../components/Items/ItemRent.js";
import { UserContext } from "../../Context";
import Grid from "@material-ui/core/Grid";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Divider } from "@material-ui/core";
import defaultImage from "../../assets/img/noimagelarge.png";
import Map from "components/Map/Map";
import { post } from "../../functions/request";

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
  const { user: loggedInUser } = useContext(UserContext);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [priceSelect, setPriceSelect] = useState("");
  const { user } = useContext(UserContext);
  const [images, setImages] = useState([]);
  const handleStartConversation = (userId) => {
    // create conversation between two users
    post(
      `conversation`,
      {
        receiver: userId,
      },
      null,
      false
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
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
      ></Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ margin: "-300px 30px 0px" }}
      >
        {isLoading ? (
          <LoadingContainer />
        ) : (
          <Grid container>
            {/* title */}
            <Grid item md={8} sm={6}>
              <div style={{ display: "block", marginBottom: "2rem" }}>
                <h2 className={classNames(classes.title, classes.CardText)}>
                  {item?.name}
                </h2>
                <span className="prices">
                  <small>{item?.location?.address}</small>
                </span>
                <br />
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
              <Grid>
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
              </Grid>
              <Grid>
                <small>
                  <em>
                    <strong>Starting at </strong>EGP
                    {Math.min(
                      ...Object.values(item.price).filter((item) => item > 0)
                    )}
                    .00
                  </em>
                </small>

                <hr />
                <div>
                  <h2 className={classes.storeName}>
                    {item?.name} -{" "}
                    <span className={classes.title}>{item?.condition}</span>
                  </h2>
                  <p>
                    <p>{item?.description}</p>
                  </p>
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
                  <hr />
                </div>
              </Grid>
              <Grid>
                <span className={classes.storeName}>
                  Pickup & Return Options
                </span>
                <p>
                  Delivery option is available. Provide your location to see the
                  estimated delivery cost.
                </p>
                <div>
                  <Map
                    changeCoordinates={(pos, address) =>
                      console.log({ pos }, { address })
                    }
                  />
                </div>
                <hr />
              </Grid>
              <Grid>
                <span className={classes.storeName}>Available Times</span>
              </Grid>
              <hr />
              <Grid>
                <span className={classes.storeName}>Keep in Mind</span>
                <p>
                  You remain fully liable to the Owner for any damage, loss, or
                  theft of the item during the rental period.
                </p>
              </Grid>
              <hr />
              <Grid>
                <span className={classes.storeName}>Cancellation</span>
                <ItemCancellation itemPolicy={item.cancellation} />
              </Grid>
            </Grid>

            <Grid item>
              <Card>
                <CardBody>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className={classes.selectFormControl}
                    fullWidth
                  >
                    <p>
                      EGP{" "}
                      {priceSelect
                        ? priceSelect
                        : Math.min(
                            ...Object.values(item.price).filter(
                              (item) => item > 0
                            )
                          )}
                    </p>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      value={priceSelect}
                      onChange={(event) => setPriceSelect(event.target.value)}
                      inputProps={{
                        name: "priceSelect",
                        id: "price-select",
                      }}
                    >
                      {console.log("item price ", item.price)}
                      {Object.keys(item.price).map((time, timeIndex) => {
                        console.log("item ", item.price[time]);
                        return (
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value={item.price[time]}
                            key={timeIndex}
                          >
                            $ {item.price[time]}.00{" "}
                            {`${
                              time[0].charAt(0).toUpperCase() + time[0].slice(1)
                            }`}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <ItemRent
                    item={item}
                    priceSelect={
                      priceSelect > 0
                        ? priceSelect
                        : Math.min(...Object.values(item.price))
                    }
                    user={user._id}
                  />
                </CardBody>
              </Card>
              <p>{item?.owner?.store?.name || item?.owner?.username}</p>
              <div>
                {loggedInUser._id !== item.owner._id && (
                  <Button
                    onClick={() => handleStartConversation(item.owner._id)}
                    style={{ marginLeft: "0.5rem" }}
                    round
                  >
                    Message
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>
        )}
      </div>
      <Footer />
    </div>
  );
}
