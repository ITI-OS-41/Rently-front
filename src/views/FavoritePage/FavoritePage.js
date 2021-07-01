/*eslint-disable*/
import React, {useContext, useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
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
import CartPageParallax from "./FavoritePageParallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import {get, patch} from "../../functions/request";

import defaultPhoto from "../../assets/img/noimagelarge.png";
import {UserContext} from "../../Context";
import NoDataToShow from "../../components/global/NoDataToShow";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(FavoriteItemsStyle);

export default function FavoriteItemsPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    const {user, setUser} = useContext(UserContext);

    const [items, setItems] = useState(items);
    const [temp, setTemp] = useState(0);


    useEffect(() => {
        get(`/user/infor`)
            .then(res => {
                setItems(res.data.favoriteItems);
                setUser({
                    ...user,
                    favoriteItems: [...res.data.favoriteItems]
                })

            })
            .catch(e => console.log(e))

    }, []);

    const handleUpdateItem = (itemId, index) => {
        const conf = confirm(
            "Are you sure to remove this item from your wish list?"
        );
        if (!conf) {
            return;
        }
        console.log({index})
        console.log({itemId})

        let favoriteItems = [...items];
        favoriteItems.splice(index, 1);

        patch('/user/update', {
            favoriteItems
        }, "Product removed from favourite")
            .then(res => {
                setUser({
                    ...user,
                    favoriteItems
                })
                setItems(favoriteItems);
            })
    };

    return (
        <div>
            <Header/>

            <CartPageParallax/>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <Card plain>
                        <CardBody plain>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={8} md={9}>
                                    {
                                        items ?
                                            <>
                                                <h3 className={classes.cardTitle}>
                                                    Favorite Item


                                                    <small style={{float: "right"}}>
                                                        ({items.length}) favorite
                                                        item{items.length > 1 && "s"}
                                                    </small>
                                                </h3>

                                                <table cellSpacing={20} style={{width: "100%"}}>
                                                    <thead>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>condition</th>
                                                    <th>Remove</th>
                                                    </thead>
                                                    <tbody>

                                                    {
                                                        items.map((item, index) => (


                                                            <tr
                                                                key={item._id}
                                                                style={{
                                                                    borderBottom: "1px solid #ddd",
                                                                    margin: "2rem",
                                                                }}
                                                            >
                                                                <td width={"100px"}>
                                                                    <Link to={`item/${item._id}`}>
                                                                        <img
                                                                            src={item?.photo[0] || defaultPhoto}
                                                                            style={{width: "100px", height: '60px', objectFit: 'cover'}}
                                                                            className={classes.img}
                                                                        />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <Link to={`item/${item._id}`}>
                                                                        <Typography className={classes.tdNameAnchor}>
                                                                            {item.name}
                                                                        </Typography>
                                                                    </Link>
                                                                </td>

                                                                <td>
                                                                    <p> {item.condition}</p>
                                                                </td>

                                                                <td>
                                                                    <Tooltip
                                                                        title="Remove item"
                                                                        placement="top"
                                                                        classes={{tooltip: classes.tooltip}}
                                                                    >
                                                                        <Button
                                                                            onClick={() => {
                                                                                handleUpdateItem(item._id, index);
                                                                            }}
                                                                            link
                                                                            className={classes.actionButton}
                                                                        >
                                                                            <Close/>
                                                                        </Button>
                                                                    </Tooltip>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }


                                                    </tbody>
                                                </table>
                                            </>

                                            :
                                            <NoDataToShow text={"No favorite items yet"}/>
                                    }
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
