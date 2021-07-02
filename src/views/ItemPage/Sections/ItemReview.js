import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Context";

import SectionComments from "./SectionComments";
import { post, get } from "functions/request";
import { FaStar } from "react-icons/fa";
import LoginPage from "views/LoginPage/LoginPage";
import { RestaurantSharp } from "@material-ui/icons";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
export default function ItemReview(props) {
  const {item, ...rest} = props;

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const [rent, setRents] = useState([]);
  const [alreadyRated, setAlreadyRated] = useState(false);

  const { user: loggedInUser } = useContext(UserContext);
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const OwnerId = item?.owner?._id;
  console.log("OwnerId  22 ",OwnerId);
console.log("Propssssssssssssssssssssssssssskhjhhkhssssss" ,item._id);

  const [comment, setComment] = useState(null);
  const [isRenter, setIsRenter] = useState(true);

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const review = {
      item: item._id,
      rater: loggedInUser._id,
      comment: comment,
      rating: currentValue,
    };

        post(`/itemRate/`, review, "Your review addede successfully ♥")
        .then((res) => {
          setRents([
            ...rents,
            review
          ])
          let response = res.data;
          console.log("response poooo65897645138513", response);
        })
        .catch((e) => {
          console.log("error");
        });
  };
  useEffect(() => {
    get(`/itemRate?item=${item._id}`)
      .then((response) => {
        let res = response.data.res;
        setRents(res);
        
        for (let i = 0; i < res.length; i++) {
          if (loggedInUser._id == res[i].rater._id) {
            setAlreadyRated(true);
            break;
          }
        }

        console.log("itemrate . ", res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    get(`/rent/?renter=${loggedInUser._id }&item=${item._id}`)
      .then((response) => {
        let res = response.data.res;
        console.log("sss",res.length);
        if (res.length == 0 )
        {
            
            console.log("res is emmmmpty**********************");
            setIsRenter(false)

        }
        // if (res.status == "returned") {
        //     console.log("[[[[[[[[[[[[[[[[[[ ",res.status);
        //     setIsRenter(false)
        // }
        for (let i = 0; i < res.length; i++) {
            // if ((loggedInUser._id == res[i].renter ) && ( res[i].status == 'returned') )
            // setIsRenter(true)
            if (res[i].status == "returned")
             {
                // console.log("[[[[[[[[[[[[[[[[[[ ",res[i].status);
                setIsRenter(true)
            }
            console.log("isRenter ",res[i].status);
        }
        console.log(" isrenter ",isRenter );
        
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

console.log("what is HHHHHHHEEEEEEEEEERRRRRRRRRRRRRREEEEEEEEEE  ",loggedInUser._id ,OwnerId,alreadyRated,!!isRenter);
  return (
    <div>
      <div>
        {rent.map((rent, i) => {
          return (
            <div>
              {/* <SectionComments loggedInUser={loggedInUser} /> */}
              {/* <SectionComments rate={rent} loggedInUser={loggedInUser}  /> */}
              <SectionComments rate={rent} loggedInUser={loggedInUser} itemId = {item._id} />
            </div>
          );
        })} 
      </div>
      {!(loggedInUser._id == OwnerId || alreadyRated || !isRenter )    && (
        <form>
          <div style={styles.container}>
            <h2> Leave you review =D </h2>
            <div style={styles.stars}>
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={
                      (hoverValue || currentValue) > index
                        ? colors.orange
                        : colors.grey
                    }
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </div>
            <textarea
              placeholder="What's your experience?"
              style={styles.textarea}
              id="comment"
              onChange={handleComment}
            />

            <button style={styles.button} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};
