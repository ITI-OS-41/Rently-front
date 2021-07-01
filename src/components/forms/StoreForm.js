import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import * as yup from "yup";
import { patch } from "../../functions/request";
import { uploadImage } from "../../functions/helpers";
import history from "../../functions/history";
import SubmitButton from "../global/SubmitButton";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Button from "../CustomButtons/Button";
import classNames from "classnames";

const modelName = "user";

const validationSchema = yup.object().shape({
  name: yup.string("Enter store name").required("store name is required"),
  description: yup
    .string("Enter store description")
    .required("store description is required"),
});

const useStyles = makeStyles(profilePageStyle);

export default function StoreForm(props) {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const { data, type } = props;
  const initialValues = {
    name: data?.store?.name || data?.username || "",
    description: data?.store?.description || data?.email || "",
    photo: data?.store?.photo || data?.photo || "",
  };
  const [isRequesting, setIsRequesting] = useState(false);
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

    patch(
      `${modelName}/update`,
      { store: { ...values } },
      type === "edit"
        ? `${modelName} edited successfully!`
        : `${modelName} added successfully!`
    )
      .then((response) => {
        // history.push(`/admin/${modelName}`);
      })
      .catch((error) => {})
      .finally(() => {
        setIsRequesting(false);
      });
  };

  return (
    <>
      <h5 className={classes.title} style={{ textAlign: "center" }}>
        Store Information
      </h5>
      <Formik
        onSubmit={(values) => {
          submitForm(values);
        }}
        validationSchema={validationSchema}
        initialValues={initialValues}
        enableReinitialize={true}
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
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  {(imagePreview || values.photo) && (
                    <img
                      src={imagePreview || values.photo || ""}
                      className={imageClasses}
                      style={{
                        objectFit: "cover",
                        height: "100px",
                        width: "100px",
                      }}
                    />
                  )}
                </Grid>

                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Button
                    round
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      document.getElementById("photo").click();
                    }}
                  >
                    Upload image
                  </Button>
                </Grid>

                <Grid item xs={12}>
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
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="name"
                    name="name"
                    label="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rowsMax={8}
                    id="description"
                    name="description"
                    label="description"
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.description && Boolean(errors.description)}
                    helperText={touched.description && errors.description}
                  />
                </Grid>
              </Grid>

              <Grid container justify="flex-end" style={{ marginTop: "2rem" }}>
                <Grid item>
                  <SubmitButton isRequesting={isRequesting} type={type} />
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

// Set default props
StoreForm.defaultProps = {
  data: null,
  type: "edit",
};
