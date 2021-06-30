import React, { useState, useEffect } from "react";
// import { Switch, Route, Link, NavLink } from "react-router-dom";
// import classNames from "classnames";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

import { get } from "functions/request";
import {FaStar} from 'react-icons/fa';
 // ! WARNING 

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};
export default function ItemReview({user}) {

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    console.log("props .. ",user);
   
    const handleClick = value => {
      setCurrentValue(value)
    }
   
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
   
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
    // const id = props.match.params.id;
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     get(`/user/${id}`)
    //       .then((response) => {
    //         setUser(response.data);
    //       })
    //       .catch((err) => {});
    //   }, []);
  return (
    <div>
<div style={styles.container}>
      <h2> React Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
      />

      <button
        style={styles.button}
      >
        Submit
      </button>
      
    </div>
    </div>
  );
}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
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
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };
  