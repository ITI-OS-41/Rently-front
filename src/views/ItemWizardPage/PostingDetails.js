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
import UploadImages from "./UploadImages";

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
    photo: yup.mixed().required("photo is required")
  
});
function nameLengthValidator(values) {
  if (values.photo.length == 0) {
    return {
      code: "required",
      message: `photo is required`,
    };
  }

  return null;
}

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
                <div style={{ margin: "3rem 1rem 0rem 3rem" }}>
                  <h4>
                    <strong>show renters your {name}</strong>
                  </h4>
                  <p>Adding quality photos can increase bookings by 45%.</p>
                  <p>
                    The first image will be set as your featured image. Drag
                    images to reorder them.
                  </p>
                  <Card>
                    <div style={{ padding: "0.5rem 1rem " }}>
                      <UploadImages
                        submitPhotos={(arr) => {
                          setFieldValue("photo", arr);
                        }}
                      />
                    
                      {!values.photo && (
                          <FormHelperText style={{color:"#f44336"}}>{errors.photo}</FormHelperText>
                      )}
                    </div>
                  </Card>
                </div>
              </Grid>

              {/* second grid */}
              <Grid item xs={6} md={6}>
                <div style={{ margin: "3rem 3rem 0rem 3rem" }}>
                  <Card>
                    <CardHeader color="primary">
                      <strong>Posting Description</strong>
                    </CardHeader>

                    <CardBody>
                      <TextField
                        fullWidth
                        multiline
                        rows={9}
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

            <div style={{ marginBottom: "3rem" }}>
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
