import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import Info from "../../../components/Typography/Info.js";
import styles from "../../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import {Link} from "react-router-dom";

// const useStyles = makeStyles(sectionInterestedStyle);
const useStyles = makeStyles(styles);
export default function SectionInterested({cat}) {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <br/>
            <GridContainer>
                <Card
                    blog
                    className={classes.card}
                >
                    <CardHeader image>
                        <Link to={`category/${cat._id}`}>
                            <img
                                src={cat.photo}
                                alt={cat.name}
                                style={{objectFit: "cover", height: "250px"}}
                            />
                        </Link>
                    </CardHeader>
                    <CardBody>
                        <Link to={`category/${cat._id}`}>
                            <Info>
                                <h3>{cat.name}</h3>
                            </Info>

                            <p
                                className={classes.description}
                                style={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {cat.description}
                            </p>
                        </Link>
                    </CardBody>
                </Card>
            </GridContainer>
        </div>
    );
}
