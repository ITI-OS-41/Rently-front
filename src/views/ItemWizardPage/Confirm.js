import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import { Formik } from "formik";
import { post } from "functions/request";
import Header from "../../components/global/Header";
import history from "../../functions/history";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { uploadImage } from "functions/helpers";

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  inline: {
    display: "inline",
    padding: "1rem 0.2rem",
  },
}));

export const Confirm = ({ formData, prevStep, nextStep }) => {
  const [isRequesting, setIsRequesting] = useState(false);

  const submitForm = async (formData) => {
    setIsRequesting(true);

    let send = { ...formData };

    send.isAvailable = "true";
    send.isSubmitted = "true";
    send.isPublished = "false";

    console.log("send", send);
    for (let i = 0; i < send.photo.length; i++) {
      await uploadImage(send.photo[i], "item").then((res) => {
        send.photo[i] = res.data.url;
      });
    }

    post("item", send, "Submitted successfully!")
      .then((response) => {
        history.push("/profile/my-postings");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsRequesting(false);
      });
  };
  const classes = useStyles();
  const {
    category,
    subcategory,
    name,
    condition,
    stock,
    description,
    cancellation,
    isDeliverable,
    deposit,
    price: { day, week, month },
  } = formData;
  return (
    <>
      {console.log(formData)}
      <Formik
        initialValues={formData}
        onSubmit={(formData) => {
          submitForm(formData);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={12}>
                <div style={{ margin: "2rem" }}>
                  <Card style={{ width: "100%", margin: "auto" }}>
                    <CardHeader color="info">Basic Info</CardHeader>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Category"
                          secondary={values.cat}
                        />
                        <ListItemText
                          primary="Sub-Category"
                          secondary={values.subCat}
                        />
                      </ListItem>
                      <hr />
                      <ListItem>
                      <ListItemText
                          primary="Item Name"
                          secondary={name}
                        />
                        <ListItemText
                          primary="Item Condition"
                          secondary={condition}
                        />
                      </ListItem>
                      <hr />
                      <ListItem>
                        <ListItemText primary="Quantity" secondary={stock} />                        
                      </ListItem>
                      <ListItem></ListItem>
                    </List>
                  </Card>
                </div>
              </Grid>

              <Grid item xs={6} md={6}>
                <div style={{ margin: "2rem" }}>
                  <Card
                    style={{ width: "100%", margin: "auto", height: "17rem" }}
                  >
                    <CardHeader color="success">
                      Pricing And Protection
                    </CardHeader>
                    <List component="nav">
                      <ListItem>
                        <ListItemText
                          primary="Daily"
                          secondary={`${day ? `${day} EGP` : `0.00`}`}
                        />
                        <ListItemText
                          primary="Weekly"
                          secondary={`${week ? `${week} EGP` : `0.00`}`}
                        />
                        <ListItemText
                          primary="Monthly"
                          secondary={`${month ? `${month} EGP` : `0.00`}`}
                        />
                      </ListItem>
                      <hr />
                      <ListItem>
                        <ListItemText primary="Deposit" secondary={deposit} />
                      </ListItem>
                    </List>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={6} md={6}>
                <div style={{ margin: "2rem" }}>
                  <Card
                    style={{ width: "100%", margin: "auto", height: "17rem" }}
                  >
                    <CardHeader color="danger">Cancellation Policy</CardHeader>
                    <List component="nav">
                      <ListItem>
                        <ListItemText
                          primary="Cancellation"
                          secondary={cancellation}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Item Delivery"
                          secondary={`${
                            isDeliverable === "true" ? "yes" : "no"
                          }`}
                        />
                      </ListItem>
                    </List>
                  </Card>
                </div>
              </Grid>
            </Grid>

            <div
              className={classes.textCenter}
              style={{ marginBottom: "3rem" }}
            >
              <Button
                color="secondary"
                variant="contained"
                className={classes.button}
                onClick={() => prevStep()}
              >
                Back
              </Button>

              <Button
                disabled={isRequesting}
                id="submit"
                name="submit"
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Submit & Review
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
