import StoreForm from "../../../components/forms/StoreForm";
import React, {useEffect, useState} from "react";
import {get} from "../../../functions/request";
import LoadingContainer from "../../../components/global/LoadingContainer";
import Button from "../../../components/CustomButtons/Button";
import {Link} from "react-router-dom";
import {primaryColor} from "../../../assets/jss/material-kit-pro-react";

const id = localStorage.getItem("rently-userid");

export default function StorePage() {
  const [user, setUser] = useState(null);
  const [isRequesting, setIsRequesting] = useState(true)

  useEffect(() => {
    get(`/user/infor`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {});
  }, []);


  return (
    user ?
      <>
      <StoreForm data={user} type="update"/>

    <div style={{textAlign: 'center'}}>
      <Button
        round
        variant="contained"
        color="primary"
        component={Link} to={`/user/${user._id}`}>Go to store</Button>
    </div>

      </>
      :
      <LoadingContainer />
  )
}
