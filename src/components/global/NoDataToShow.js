import React from "react";
import Typography from "@material-ui/core/Typography";

export default function (props){
  const {text,...rest} = props;

  return (
    <Typography style={{textAlign: 'center'}}>{text || "No items to show"}</Typography>
  )
}
