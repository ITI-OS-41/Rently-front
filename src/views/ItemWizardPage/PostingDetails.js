import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Headerr from "./RentHeader";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import Layers from "@material-ui/icons/Layers";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import {
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Button,
  TextField,
  FormControlLabel,
} from "@material-ui/core";

import * as yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { get } from "functions/request";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const validationSchema = yup.object({
  description: yup
    .string()
    .min(30, "Minimum 30 characters")
    .required("description is required!"),
});

export const PostingDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const { name } = formData;
  const [imagePreview, setImagePreview] = useState(null);
  const [item, setItem] = useState({});
  const [direction, setDirection] = useState("back");

  const uploadPhotos = (photos) => {
    console.log(photos);
  };

  const setImage = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
        }) => (
          <Form className={classes.form}>
            <Grid container>
              <Grid item xs={6} md={6}>
                {/* upload images */}
                <div style={{ margin: "2rem 1rem 0rem 5rem" }}>
                  <h5>
                    <strong>show renters your {name}</strong>
                  </h5>
                  <p>Adding quality photos can increase bookings by 45%.</p>
                  <p>
                    The first image will be set as your featured image. Drag
                    images to reorder them.
                  </p>
                  {/* <CustomFileInput
                    onFileChange={(e) => console.log(e.target.value)}
                    id="photos"
                    name="photos"
                    value={values.photos}
                    onBlur={handleBlur}
                    onChange={(e) => console.log(values.photos)}
                    multiple
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      placeholder: "upload your images",
                    }}
                    endButton={{
                      buttonProps: {
                        round: true,
                        color: "info",
                        justIcon: true,
                        fileButton: true,
                      },
                      icon: <Layers />,
                    }}
                  /> */}
                  <input
                    multiple
                    id="photo"
                    name="photo"
                    type="file"
                    onChange={(event) => {
                      console.log(event.currentTarget.files);
                      setFieldValue("photo", event.currentTarget.files);
                      setImage(event);
                    }}
                  />
                </div>
              </Grid>

              {/* second grid */}
              <Grid item xs={6} md={6}>
                <div style={{ margin: "4rem 5rem 0rem 1rem" }}>
                  <Card>
                    <CardHeader color="primary">
                      <strong>Posting Description</strong>
                    </CardHeader>

                    <CardBody>
                      <TextField
                        fullWidth
                        multiline
                        rows={5}
                        id="description"
                        name="description"
                        value={values.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.description && Boolean(errors.description)
                        }
                        helperText={touched.description && errors.description}
                      />
                    </CardBody>
                  </Card>
                </div>
              </Grid>
            </Grid>

            <div>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                onClick={() => setDirection("back")}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => setDirection("forward")}
              >
                Continue
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

PostingDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
