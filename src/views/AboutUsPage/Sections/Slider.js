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
    label: 'Rently and the United Way ',
    description: 'Rrently partnered with the United Way to connect socially-isolated and vulnerable people in numerous communities with the technology they needed to access support services during the COVID-19 pandemic. Ruckify sourced and distributed used/donated technology people in our communities could remain connected. '
   },
  {
    label: 'BiRently and Flood Relief rd',
    description:'Rrently and our community played an instrumental role in helping those in need during the flood relief efforts in Ottawa and surrounding areas in early 2019 by sourcing, delivering, and installing pumps and generators. Our community also came together to provide relief workers with tents, heaters, and fire extinguishers.',
  },
  {
    label: 'Rently Partners with Local Charities',
    description: 'As a Renter, Rently gives you access to anything you might need to use temporarily for an event, project, or hobby. As an Owner, you are given the opportunity to post any of your items on Ruckify to earn money or share your items at a low cost.'
  },
  {
    label: 'Earn More With Our Referral Programs',
    description: 'You can earn real money and RuckBucks that you can use to benefit your organization or rent items that you might need for a special project or event with Ruckify’s referral programs.'

  },
  {
    label: 'Help us Help Your Community',
    description: 'Do you want to make a difference in your community? Learn how Ruckify partners with non-profits to improve communities across the globe.'

  },
  {
  label: 'Rently Partners with Local Charities ',
  description: 'As a Renter, Rrently gives you access to anything you might need to use temporarily for an event, project, or hobby. As an Owner, you are given the opportunity to post any of your items on Ruckify to earn money or share your items at a low cost.'
  },
  {
  label: 'Rrently and Flood Relief ',
  description: 'Rrently and our community played an instrumental role in helping those in need during the flood relief efforts in Ottawa and surrounding areas in early 2019 by sourcing, delivering, and installing pumps and generators. Our community also came together to provide relief workers with tents, heaters, and fire extinguishers.'
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
      <div style={{textAlign: "center"}}>
        <Button variant="contained"  className={classes.btn}>
        <Link href="/read-more" className={[classes.link, classes.btnColor].join(' ')}>READ MORE</Link>
        </Button>
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
