import React, {createContext, useEffect, useState} from "react";
import {get, patch} from "./functions/request";
import Geocode from "react-geocode";


export const UserContext = createContext({});


function Context(props) {


    const {children, ...rest} = props;
    const [demmy, setDummy] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('rently-user')) || {});
    const [rentUsers,setRentUsers]= useState([]);




    //get user location and save it to profile
    useEffect(() => {
        if (user.username) {
            get(`/user/infor`)
                .then(res=>{
                    setUser({
                        ...user,
                        ...res.data
                    })

                })
                .catch(e=>{console.log(e)})



            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log(position.coords.latitude, position.coords.longitude)

                    // get real address
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                        (response) => {
                            const location = {
                                type: 'Point',
                                coordinates: [position.coords.latitude, position.coords.longitude],
                                address: response.results[0].formatted_address
                            };
                            // update user location
                            patch('/user/update', {
                                location
                            })
                                .then(res => {
                                    setUser({
                                        ...user,
                                        location
                                    })
                                })
                        },
                        (error) => {
                            console.error(error);
                        }
                    );


                });
            } else {
                alert("Geolocation is not supported by this browser!");
            }
        }
    }, [demmy]);


    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default Context;
