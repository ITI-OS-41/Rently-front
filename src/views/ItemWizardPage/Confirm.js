import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import { Formik } from "formik";
import { post } from "functions/request";
import Header from "../../components/global/Header";

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const Confirm = ({ formData, prevStep, nextStep }) => {
  const [isRequesting, setIsRequesting] = useState(false);

  const submitForm = (formData) => {
    setIsRequesting(true);

    let send = { ...formData };

    send.location = {
      type: "Point",
      coordinates: [1, 2],
      address: "asd",
    };
    send.subcategory = "60d23b41ebfe6a461c8c4b50",
    send.owner = "60d0e7957af53611781c0e72",
    send.photo = "2",
    send.stock = send.stock.toString();
    send.deposit = "2000"
    send.status = "true"
    send.deliverable = "true"


    post("item", send, "Submitted successfully!")
      .then((response) => {
        console.log(response);
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
    subCategory,
    name,
    condition,
    stock,
    description,
    price: { day, hour, week, month },
  } = formData;
  return (
    <>
      {/* <Headerr title='Confirm User Data' /> */}
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
            <List>
              <ListItem>
                <ListItemText
                  primary="category"
                  secondary={category}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="condition"
                  secondary={condition}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Item Name"
                  secondary={name}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Item Description"
                  secondary={description}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Quantity"
                  secondary={stock}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Hourly"
                  secondary={hour}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Daily"
                  secondary={day}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Weekly"
                  secondary={week}
                  className={classes.textCenter}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Monthly"
                  secondary={month}
                  className={classes.textCenter}
                />
              </ListItem>
            </List>
            <div className={classes.textCenter}>
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
