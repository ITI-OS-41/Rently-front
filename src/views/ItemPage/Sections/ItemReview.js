import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Context";

import SectionComments from "./SectionComments";
import { post, get } from "functions/request";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
export default function ItemReview(props) {
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
  const OwnerId = props.item?.owner?._id;

  const [comment, setComment] = useState(null);
  const [isRater, setIsRater] = useState(false);

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    const review = {
      item: props.item._id,
      rater: loggedInUser._id,
      comment: comment,
      rating: currentValue,
    };
    console.log("rev0 > ", review);

    post(`/itemrate/`, review, "Your review addede successfully ♥")
      .then((res) => {
        let response = res.data;
        console.log("response", response);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  useEffect(() => {
    get(`/itemRate`)
      .then((response) => {
        let res = response.data.res;
        setRents(res);

        for (let i = 0; i < res.length; i++) {
          if (loggedInUser._id == res[i].rater._id) {
            setAlreadyRated(true);
            break;
          }
        }

        console.log("setRents . ", res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);



  return (
    <div>
      <div>
        {rent.map((rent, i) => {
          return (
            <div>
              <SectionComments rate={rent} loggedInUser={loggedInUser} />
            </div>
          );
        })}
      </div>
      {!(loggedInUser._id == OwnerId || alreadyRated) && (
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
