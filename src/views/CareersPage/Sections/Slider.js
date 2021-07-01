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
    label: "- Aaron O'Neill, Director of Community Trust & Safety ",
    description: '“You can leave your mark on the business, product and people that you work with. Your ideas and contribution matter as much as your colleagues no matter the role, and they actually are heard and implemented and not tossed into the abyss. You drive positive change and progression with yourself, company & product.” '
  },
  
  {
  label: "-  Ziad El Shourbagy, Toronto City Growth Manager ",
  description: '“Rently has empowered its employees to work remotely, and without geographical barriers. That means picking the best talent, wherever it is! With its initiatives like team alignments, Lunch & Learn, and Trivia Night, we are encouraged to work collaboratively, while still being autonomous." '
  },
  {
    label: "-  Adrienne Taylor, Social Marketing Manager  ",
    description: '“Finding a company this valuable and intangible is rare. We are leaders within the sharing economy but internally at Rently we are sharing experiences. We share experiences through communication, collaboration and a common goal... to change the world.” '
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
      <div>
      <Typography className={[classes.desc].join(' ')}>{tutorialSteps[activeStep].description}</Typography>
      </div>
      <div square elevation={0} className={classes.header}>
        <p> {tutorialSteps[activeStep].label}</p>
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
