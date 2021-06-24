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
  // description: yup
  // .string()
  // .min(30, "Minimum 30 characters")
  // .required("description is required!"),
});

export const FormUserDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const { itemName } = formData;

  const [item, setItem] = useState({});
  const [direction, setDirection] = useState("back");
  const [description, setDescription] = useState("");

  // useEffect(() => {
  //   setItem((prevState) => ({
  //     ...prevState,
  //     category: selectedCategory,
  //     subcategory: selectedSubCategory,
  //     condition: selectedCondition,
  //   }));
  // }, [selectedCategory, selectedSubCategory, selectedCondition]);

  useEffect(() => {
    get("category").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // useEffect(() => {
  //   selectedCategory &&
  //     get(`subcategory?category=${selectedCategory}`).then((res) => {
  //       setSubCategories(res.data);
  //     });
  // }, [selectedCategory]);
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
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form className={classes.form}>
            <Grid container>
              <Grid
                item
                xs={6}
                md={6}
                style={{ margin: "2rem 1rem 2rem 5rem" }}
              >
                {/* upload images */}
                <div style={{ marginBottom: "2rem" }}>
                  <h5>
                    <strong>show renters your {itemName}</strong>
                  </h5>
                  <p>Adding quality photos can increase bookings by 45%.</p>
                  <p>
                    The first image will be set as your featured image. Drag
                    images to reorder them.
                  </p>
                  <CustomFileInput
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
                  />
                </div>

                <Grid container spacing={3}></Grid>
              </Grid>

              {/* second grid */}
              <Grid
                item
                xs={6}
                md={4}
                style={{ margin: "2rem 5rem 2rem 1rem" }}
              >
                <div style={{ marginBottom: "2rem" }}>
                  <Card>
                    <CardHeader color="primary">
                      <strong>Posting Description</strong>
                    </CardHeader>

                    <CardBody>
                  
                        <CustomInput
                          id="description"
                          name="description"
                          value={values.description}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          // onChange={(e) => setDescription(e.target.value)}
                          labelText="Add a detailed description of your item..."
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5,
                          }}
                          // error={touched.description && Boolean(errors.description)}
                        />
                        {/* {touched.description && (
                          <FormHelperText>{errors.description}</FormHelperText>
                        )} */}
                    </CardBody>
                  </Card>
                </div>
                <img
                  style={{ margin: "1rem ", width: "100%", height: "50%" }}
                  src={
                    "https://images.unsplash.com/photo-1577086664693-894d8405334a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80"
                  }
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
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

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
{
  /* <Formik
        initialValues={formData}
        onSubmit={(values) => {
          console.log("values ", values);
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form className={classes.form}>
            <Grid container>
              <Grid
                item
                xs={6}
                md={10}
                style={{ margin: "2rem 1rem 2rem 5rem" }}
              >
                {/* upload images */
}
//       <div style={{ marginBottom: "2rem" }}>
//         <h3>show renters your {itemName}</h3>
//         <CustomFileInput
//           multiple
//           formControlProps={{
//             fullWidth: true,
//           }}
//           inputProps={{
//             placeholder: "upload your images",
//           }}
//           endButton={{
//             buttonProps: {
//               round: true,
//               color: "info",
//               justIcon: true,
//               fileButton: true,
//             },
//             icon: <Layers />,
//           }}
//         />
//       </div>

//       {/* item name */}

//       <Grid container spacing={3}>
//         <Grid item xs={6}></Grid>
//       </Grid>
//     </Grid>

//     {/* second grid */}
//     <Grid
//       item
//       xs={6}
//       md={4}
//       style={{ margin: "2rem 5rem 2rem 1rem" }}
//     >
//       <div style={{ marginBottom: "2rem" }}>
//         <div className={classes.title}>
//           <h3>Textarea</h3>
//         </div>
//         <Card>
//           <CardHeader color="primary">
//             <strong>Posting Description</strong>
//           </CardHeader>

//           <CardBody>
//             <CustomInput
//               variant="outlined"
//               labelText="You can write your text here..."
//               id="textarea-input"
//               formControlProps={{
//                 fullWidth: true,
//               }}
//               inputProps={{
//                 multiline: true,
//                 rows: 5,
//               }}
//             />
//           </CardBody>
//         </Card>

//         {/* <TextareaAutosize
//           aria-label="minimum height"
//           rowsMin={5}
//           placeholder="Minimum 5 rows"
//         /> */}
//       </div>
//     </Grid>
//   </Grid>

//   <div>
//     <Button
//       type="submit"
//       variant="contained"
//       className={classes.button}
//       onClick={() => setDirection("back")}
//     >
//       Back
//     </Button>
//     <Button
//       type="submit"
//       variant="contained"
//       color="primary"
//       className={classes.button}
//       onClick={() => setDirection("forward")}
//     >
//       Continue
//     </Button>
//   </div>
// </Form>
// )}
// </Formik> */}
