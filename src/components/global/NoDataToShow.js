import React from "react";

export default function (props){
  const {text,...rest} = props;

  return (
    <h3 style={{textAlign: 'center'}}>{text || "No items to show"}</h3>
  )
}
