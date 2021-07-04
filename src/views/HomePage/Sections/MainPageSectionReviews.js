import {get} from "../../../functions/request";
import React, {useState} from "react";
import dg2 from "../../../assets/img/dg2.jpg";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import CardAvatar from "../../../components/Card/CardAvatar";
import cardProfile1Square from "../../../assets/img/faces/card-profile1-square.jpg";
import cardProfile4Square from "../../../assets/img/faces/card-profile4-square.jpg";
import cardProfile2Square from "../../../assets/img/faces/card-profile2-square.jpg";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import testimonialsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle";
import StarIcon from "@material-ui/icons/Star";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const useStyles = makeStyles(testimonialsStyle);


const StyledRating = withStyles({
  iconFilled: {
    color: '#3f3f3f',
  },
})(Rating);


export default function MainPageSectionReviews(props) {
  const classes = useStyles();
  const [reviews, setReviews] = useState(null)
  const [overallReview, setOverallReview] = useState(null)
  const [isLoading, setIsLoading] = useState(true)



  useState(()=>{
    get(`/apprate/`)
    .then(response => {
      
      setReviews(response.data.res)
    })
    .catch(err=>console.log(err))
    .finally(()=>{
      setIsLoading(false)
    })
    },[]);


  const average = (reviews) =>{
    let totalCount = 0
    reviews.forEach(review=>{
      totalCount+=review.rating
    })
    return totalCount/reviews.length
  }

  return (
      <div>
          {
            reviews &&
            (
                <>
                <GridContainer  justify="center">
                {

                    reviews.map(review=>(
                        <GridItem xs={12} sm={6} md={4} lg={3} key={review._id}>
                          <Card testimonial className={classes.card1}>
                            <div className={classes.icon}>
                              <FormatQuote />
                            </div>
                            <CardBody>
                              <h5 className={classes.cardDescription}>{review.comment}</h5>
                            </CardBody>
                            <CardFooter testimonial>
                              <div >
                        <span style={{color: 'gold'}}>
                          {Array(review.rating).fill(0).map((_, i) => <StarIcon/>)}
                        </span>
                                <span className={classes.cardDescription}>
                          {Array(5-review.rating).fill(0).map((_, i) => <StarIcon/>)}
                        </span>
                              </div>
                              <h4 className={classes.cardTitle}>{review.rater.username}</h4>
                              <CardAvatar testimonial testimonialFooter>
                                <img src={review.rater.photo} alt={review.rater.username} style={{objectFit:'cover', width:'100px', height:'100px'}}/>
                              </CardAvatar>
                            </CardFooter>
                          </Card>
                        </GridItem>
                    ))
                  }


                </GridContainer>

                  <Button component={Link} to="/app-rate" color="primary" style={{margin: '2rem auto 0'}}>
                    App Reviews
                  </Button>
                </>
            )
          }
      </div>
    
  )
}
