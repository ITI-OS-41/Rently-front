/*eslint-disable*/
import React, { useContext, useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";

import FavoriteItemsStyle from "../../assets/jss/material-kit-pro-react/views/FavoriteItemsStyle.js";
import product2 from "../../assets/img/product2.jpg";
import CartPageParallax from "./FavoritePageParallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { get, post } from "../../functions/request";

import defaultPhoto from "../../assets/img/noimagelarge.png";
import { currency, dateTime } from "../../functions/helpers";
import SubmitButton from "../../components/global/SubmitButton";
import { UserContext } from "../../Context";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(FavoriteItemsStyle);

export default function FavoriteItemsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const { user, setUser } = useContext(UserContext);

  const [items, setItems] = useState([]);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    get(`item?owner=${user._id}&isFavorite=true`)
      .then((res) => {
        setItems(res.data.res);
      })
      .catch((e) => console.log(e));
  }, [temp]);

  useEffect(() => {
    get("user/infor")
      .then((res) => {
        let allData = {
          ...user,
          ...res.data,
        };
        setUser(allData);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleUpdateItem = (userId) => {
    const conf = confirm(
      "Are you sure to remove this item from your wish list?"
    );
    if (!conf) {
      return;
    }
    post(`user/${userId}`)
      .then((res) => {
        setTemp(temp + 1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Header />

      <CartPageParallax />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{ padding: "2rem 4rem" }}>
          <Card plain>
            <CardBody plain>
              <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={9}>
                  <h3 className={classes.cardTitle}>
                    Favorite Item
                    <span style={{ float: "right" }}>
                      ({items.length}) favorite item{items.length > 1 && "s"} in
                      your wishlist
                    </span>
                  </h3>
                  <table style={{ width: "100%" }}>
                    <thead>
                      <th colSpan={2}>Item</th>
                      <th>condition</th>
                      <th>Remove</th>
                    </thead>
                    <tbody>
                      {items.length &&
                        items.map((item) => (
                          <tr
                            key={item._id}
                            style={{
                              borderBottom: "1px solid #ddd",
                              margin: "2rem",
                            }}
                          >
                            <td width={"100px"}>
                              <img
                                src={item?.photo[0] || defaultPhoto}
                                style={{ width: "100%" }}
                                className={classes.img}
                              />
                            </td>
                            <td>
                              <h3 className={classes.tdNameAnchor}>
                                {item.name}
                              </h3>
                            </td>

                            <td>
                              <p> {item.condition}</p>
                            </td>

                            <td>
                              <Tooltip
                                title="Remove item"
                                placement="top"
                                classes={{ tooltip: classes.tooltip }}
                              >
                                <Button
                                  onClick={() => {
                                    handleUpdateItem(item._id);
                                  }}
                                  link
                                  className={classes.actionButton}
                                >
                                  <Close />
                                </Button>
                              </Tooltip>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
