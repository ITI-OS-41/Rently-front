import React, { useState, useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Media from "components/Media/Media.js";
import Rating from '@material-ui/lab/Rating';
import { grayColor, title } from "assets/jss/material-kit-pro-react.js";
import { UserContext } from '../../../Context';
import { get, post } from "../../../functions/request";
import defaultImage from '../../../assets/img/noimagelarge.png';

import {
    Button,
    TextField,
} from "@material-ui/core";


const sectionCommentsStyle = {

    title: {
        ...title,
        marginBottom: "30px",
        textAlign: "center",
    },
    footerButtons: {
        float: "right",
        backgroundColor: "#00bcd4",
        color: "#FFF",
        marginTop: "10px",
        "&:hover": {
            backgroundColor: "#00bcd4",
            color: "#FFF",
        },
    },
};

const useStyles = makeStyles(sectionCommentsStyle);
const StyledRating = withStyles({
    iconFilled: {
        color: 'gold',
    },
})(Rating);

export default function SectionUserRate(props) {
    const { newRateAdded, ...rest } = props;

    const classes = useStyles();
    const { user } = useContext(UserContext);
    const [ratingValue, setRatingValue] = useState(null)
    const [comment, setComment] = useState('');
    const [userHasRate, setUserHasRate] = useState(false);


    const handleSaveRating = (e) => {
        e.preventDefault();
        if (!comment || !ratingValue) return;

        const newComment = {
            rater: user._id,
            comment,
            rating: ratingValue,
            createdAt: new Date()
        }

        post(`/apprate`, newComment, 'Comment Added Succeefully')
            .then(res => {

                setComment('')
                setRatingValue(0)

                newRateAdded(newComment)
            })
            .catch(e => {
                console.log(e)
            })
    };

    useEffect(() => {
        get(`/apprate/?rater=${user._id}`).then((response) => {
            const res = response.data.res;
            if (res.length) {
                setUserHasRate(true);
            }
        });
    }, []);


    return (
        !userHasRate && (
            <div>
                <h3 className={classes.title}> Please leave a comment or review.</h3>
                <form
                    onSubmit={handleSaveRating}
                >
                    <StyledRating
                        name="Rating Label"
                        value={ratingValue}
                        size="large"
                        onChange={e => {
                            setRatingValue(parseInt(e.target.value))
                        }}
                    />
                    <Media
                        avatar={user.photo || defaultImage}
                        body={
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Comment"
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                            />
                        }
                        footer={
                            <Button type="submit" className={classes.footerButtons}>Save</Button>
                        }
                    />

                </form>
            </div>
        )
    );
}
