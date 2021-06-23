import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  TextField,
  FormHelperText,
  FormControlLabel,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Formik } from "formik";
import * as yup from "yup";
import { post } from "../../functions/request";
import history from "../../functions/history";
import LoadingCircle from "../global/LoadingCircle";
import { patch } from "functions/request";
import { uploadImage } from "functions/helpers";

import classNames from "classnames";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
const useStyles2 = makeStyles(profilePageStyle);
// import Button from "components/CustomButtons/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Add from "@material-ui/icons/Add";
// import { patch } from "functions/request";
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
  username: yup
    .string("Enter your username")
    .min(3, "username should be of minimum 3 characters length")
    .required("username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  terms: yup
    .boolean()
    .oneOf([true], "You must agree to terms and conditions to continue"),
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

export default function EditProfileForm({ user }) {
  console.log("fff", user);
  const initialValues = {
    ...user,
  };
  const classes = useStyles();
  const [isRequesting, setIsRequesting] = useState(false);
  const classes2 = useStyles2();
  const imageClasses = classNames(
    classes2.imgRaised,
    classes2.imgRoundedCircle,
    classes2.imgFluid
  );
  const [edituser, setEditUser] = useState([]);
  const id = localStorage.getItem("rently-userid");
  const [imagePreview, setImagePreview] = useState(null);

  const setImage = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const submitForm = async (values) => {
    setIsRequesting(true);
    if (values.photo) {
      await uploadImage(values.photo, modelName).then((res) => {
        values.photo = res.data.url;
      });
    }
    patch(`/user/${id}`, values, "User Updated successfully ♥ ")
      .then((response) => {
        history.push("/profile");
      })
      .catch((err) => {})
      .finally(() => {
        setIsRequesting(false);
      });
  };

  return (
    user && (
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
                {(imagePreview || values.photo) && (
                  <img
                    src={imagePreview || values.photo || ""}
                    alt="..."
                    className={imageClasses}
                    style={{
                      objectFit: "cover",
                      height: "100px",
                      width: "100px",
                    }}
                  />
                )}

                <div className={classes.name}>
                  <Tooltip
                    id="tooltip-top"
                    title="Edit Profile picture"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
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
                    >
                      <Add className={classes.followIcon} />
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
                  <h5 className={classes.title} style={{ marginTop: "-3rem" }}>
                    {user.name}
                  </h5>
                </div>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
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
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="lastname"
                    name="lastname"
                    value={values.lastname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.lastname && Boolean(errors.lastname)}
                    helperText={touched.lastname && errors.lastname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="username"
                    name="username"
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                </Grid>
              </Grid>

              <Button
                disabled={isRequesting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                id="submit"
                size="large"
                startIcon={isRequesting && <LoadingCircle />}
              >
                Edit
              </Button>
            </form>
          );
        }}
      </Formik>
    )
  );
}
