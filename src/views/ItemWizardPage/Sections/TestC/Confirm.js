import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Headerr } from './RentHeader';

const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export const Confirm = ({ formData, prevStep, nextStep }) => {
  const classes = useStyles();
  const { category, subCategory, itemName, condition,quantity,occupation } = formData;
  return (
    <>
      {/* <Headerr title='Confirm User Data' /> */}
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary='occupation'
              secondary={occupation}
              className={classes.textCenter}
            />
          </ListItem>
           <ListItem>
            <ListItemText
              primary='category'
              secondary={category}
              className={classes.textCenter}
            />
          </ListItem>
           <ListItem>
            <ListItemText
              primary='condition'
              secondary={condition}
              className={classes.textCenter}
            />
          </ListItem>
           <ListItem>
            <ListItemText
              primary='Item Name'
              secondary={itemName}
              className={classes.textCenter}
            />
          </ListItem>
         {/* <ListItem>
            <ListItemText
              primary='Item Name'
              secondary={itemName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Condition'
              secondary={condition}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Quantity'
              secondary={quantity}
              className={classes.textCenter}
            />
          </ListItem> */}
      
        </List>
        <div className={classes.textCenter}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => nextStep()}
          >
            Submit & Review
          </Button>
        </div>
      </div>
    </>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
