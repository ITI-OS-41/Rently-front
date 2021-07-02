/*eslint-disable*/
import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as yup from "yup";
import { post } from "functions/request";
import history from "functions/history";
import SubmitButton from "../../../components/global/SubmitButton";
import { Typography, TextField, FormControlLabel } from '@material-ui/core';

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import {
  container,
  title,
  main,
  mainRaised,
  mlAuto,
  description,
} from "assets/jss/material-kit-pro-react.js";

const contactUsStyle = {
  main,
  mainRaised,
  title,
  mlAuto,
  description,
  container: {
    ...container,
    maxWidth: "970px !important",
  },

  textCenter: {
    textAlign: "center !important",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  color: {
    color: "#038C7F",
  },
  margin: {
    margin: "12px 0"
  }
};
const useStyles = makeStyles(contactUsStyle);

const modelName = "";

const validationSchema = yup.object().shape({
  name: yup.string("Enter store name").required("store name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.number("Enter phone").required("phone is required"),
  message: yup
    .string("Enter message")
    .required("message is required"),
});
const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: ''
};

export default function Form() {
  const classes = useStyles();
  const [isRequesting, setIsRequesting] = useState(false);

  const submitForm = (values) => {
    setIsRequesting(true);

    post(`/user/contact-us`, values, `Message sent  Successfully! Please wait for one of our agents to reach out to you!`)
      .then((response) => {
        history.push('/')
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsRequesting(false);
      });
  };

  return (
    <Formik
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
        } = props;
        return (
          <form onSubmit={handleSubmit}>
             <TextField
              className={classes.margin}
              style={{marginTop: "0"}}
              variant="outlined"
              fullWidth
              label="Your Name"
              id="name"
              name="name"
              type="text"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
             <TextField
              className={classes.margin}
              variant="outlined"
              fullWidth
              label="Email address"
              id="email"
              name="email"
              type="text"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
             <TextField
                className={classes.margin}
                variant="outlined"
                fullWidth
                id="phone"
                name="phone"
                label="phone"
                type="text"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
            />
           
           <TextField
              className={classes.margin}
              variant="outlined"
              fullWidth
              label="Your message"
              id="message"
              type="text"
              name="message"
              multiline
              rowsMax={8}
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
            
            />
            <div className={classes.textCenter}>
              <SubmitButton isRequesting={isRequesting} type="Send Message" />
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
