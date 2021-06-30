import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Link from '@material-ui/core/Link';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Rent For a Cause',
    description: 'Rently’s rent for a cause program allows you to host your own unique Rently Adventure to raise funds for your non-profit. You can leverage your RentlyStore to rent items for the event so the profit goes right back into your pocket. Learn more about hosting your own Rently Adventure here.'
  },
  
  {
  label: 'Earn More with Rently’s Referral Programs',
  description: 'Take advantage of our referral programs by turning rentals into donations. You can earn real money and RuckBucks that you can use to benefit your non-profit or rent items that you might need for a special project or event. Learn more about Rently’s referral programs here.'
  },


];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    margin: "auto",
    marginTop: theme.spacing(4),
  
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    fontWeight:"500",

  },
  desc: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(1),
      
  },
  btn :{
    marginBottom: theme.spacing(2),
    backgroundColor: "#038C7F",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#038C7F",
  },
  },
  btnColor: {
      color: "#fff",
      textDecoration: "none",
      "&:hover": {
        color: "#fff",
        backgroundColor: "#038C7F",
        textDecoration: "none",
    },
  },
  color: {
    color: "#038C7F",
  }
}));

export default function Slider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root} >
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.color} ><h3 style={{fontWeight: "500"}}> {tutorialSteps[activeStep].label}</h3></Typography>
      </Paper>
      <div>
      <Typography className={[classes.desc].join(' ')}>{tutorialSteps[activeStep].description}</Typography>
      </div>
    
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {/* {Math.abs(activeStep - index) <= 2 ? (
              <p className={classes.img}></p>
            ) : null} */}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        // variant="text"
        activeStep={activeStep}
        nextButton={
          <Button className={classes.color} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button  className={classes.color} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
