import React, {useContext, useEffect, useState} from "react";
import {Button, TextField,} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import {Formik} from "formik";
import * as yup from "yup";
import {get} from "../../functions/request";
import {patch} from "functions/request";
import {uploadImage} from "functions/helpers";

import classNames from "classnames";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
// import Button from "components/CustomButtons/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Add from "@material-ui/icons/Add";

import defaultImage from '../../assets/img/noimagelarge.png';
import {UserContext} from "../../Context";
// import { patch } from "functions/request";
import moment from "moment";
import SubmitButton from "../global/SubmitButton";

const useStyles2 = makeStyles(profilePageStyle);

const modelName = "user";

const validationSchema = yup.object().shape({
    firstname: yup
        .string("Enter your firstname")
        .min(3, "firstname should be of minimum 3 characters length")
        .required("firstname is required"),
    lastname: yup
        .string("Enter your lastname")
        .min(3, "lastname should be of minimum 3 characters length")
        .required("lastname is required"),
    dateOfBirth: yup
        .string("Enter your dateOfBirth")
        .required("dateOfBirth is required"),
});

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        margin: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function EditProfileForm(props) {
    const {setUser: setUserContext} = useContext(UserContext);

    const [user, setUser] = useState({});

    useEffect(() => {
        get(`/user/infor`)
            .then(res => {

                setUser({
                    ...res.data
                })
                setUserContext({
                    ...user,
                    ...res.data
                })
            })
    }, [])

    const initialValues = {
        photo: user.photo || '',
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        dateOfBirth: moment(user.dateOfBirth).format("yyyy-MM-DD") || ''
    };

    const classes = useStyles();
    const [isRequesting, setIsRequesting] = useState(false);
    const classes2 = useStyles2();
    const imageClasses = classNames(
        classes2.imgRaised,
        classes2.imgRoundedCircle,
        classes2.imgFluid
    );
    const [imagePreview, setImagePreview] = useState(null);
    const [editable, setEditable] = useState(false);


    const setImage = (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };
    const submitForm = async (values) => {
        setIsRequesting(true);
        if (imagePreview) {
            await uploadImage(values.photo, modelName).then((res) => {
                values.photo = res.data.url;
            });
        }
        patch(`/user/update`, values, "User Updated successfully")
            .then((response) => {
                setUser({
                    ...user,
                    ...values
                })
            })
            .catch((err) => {
            })
            .finally(() => {
                setIsRequesting(false);
            });
    };

    return (
        user.username ? (
                <Formik
                    //!
                    onSubmit={(values) => {
                        submitForm(values);
                    }}
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                >
                    {(props) => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div
                                    className={classes2.profile}
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        src={imagePreview || values.photo || defaultImage}
                                        alt="..."
                                        className={imageClasses}
                                        style={{
                                            objectFit: "cover",
                                            height: "100px",
                                            width: "100px",
                                        }}
                                    />


                                    <div className={classes.name}>
                                        <Tooltip
                                            id="tooltip-top"
                                            title="Edit Profile picture"
                                            placement="top"
                                            classes={{tooltip: classes.tooltip}}
                                        >
                                            <Button
                                                style={{
                                                    marginTop: "-8rem",
                                                    marginLeft: "4rem",
                                                }}
                                                justIcon
                                                round
                                                color="primary"
                                                className={classes.followButton}
                                                onClick={() => {
                                                    document.getElementById("photo").click();
                                                }}
                                                disabled={!editable}
                                            >
                                                <Add className={classes.followIcon}/>
                                            </Button>
                                        </Tooltip>
                                        <input
                                            id="photo"
                                            name="photo"
                                            type="file"
                                            hidden
                                            onChange={(event) => {
                                                setFieldValue("photo", event.currentTarget.files[0]);
                                                setImage(event);
                                            }}
                                        />
                                    </div>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            disabled={!editable}
                                            variant="outlined"
                                            fullWidth
                                            id="firstname"
                                            name="firstname"
                                            label="firstname"
                                            value={values.firstname}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.firstname && Boolean(errors.firstname)}
                                            helperText={touched.firstname && errors.firstname}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            disabled={!editable}
                                            variant="outlined"
                                            fullWidth
                                            id="lastname"
                                            name="lastname"
                                            label="lastname"
                                            value={values.lastname}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.lastname && Boolean(errors.lastname)}
                                            helperText={touched.lastname && errors.lastname}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={!editable}
                                            variant="outlined"
                                            fullWidth
                                            type="date"
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            label="dateOfBirth"
                                            InputProps={{inputProps: {max: "2003-01-01"}}}
                                            value={values.dateOfBirth}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                                            helperText={touched.dateOfBirth && errors.dateOfBirth}
                                        />
                                    </Grid>
                                </Grid>


                                {
                                    editable ?
                                        (
                                            <SubmitButton
                                                style={{marginTop: '1rem'}}
                                                type="update"
                                                fullWidth
                                                isRequesting={isRequesting}
                                            />
                                        )
                                        :
                                        (
                                            <Button
                                                type="button"
                                                color="primary"
                                                className={classes.submit}
                                                size="large"
                                                onClick={() => {
                                                    setEditable(true)
                                                }}
                                            >
                                                Edit Data
                                            </Button>
                                        )
                                }

                            </form>
                        );
                    }}
                </Formik>
            )
            : ''
    );
}
