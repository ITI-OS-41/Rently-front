// @noflow

import React, {useContext, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {patch, post} from "../../functions/request";
import StripeCheckout from "react-stripe-checkout";
import toast from "../../functions/toast";
import {SERVER} from "../../config";

import history from '../../functions/history'
import {UserContext} from "../../Context";

const Checkout = (props) => {
    const {total, products,...rest} = props;
    const {user,setUser} = useContext(UserContext);

    console.log({products})



    async function handleToken(token, addresses) {
        const response = await post(
            `${SERVER}/checkout`,
            { token, products, total: (total-user.wallet) }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {

            for (let i = 0; i < products.length; i++) {
                await patch(`/rent/checkout/${products[i]._id}`)
                    .then(res=>{
                        console.log(res)

                        const newWalletValue = (user.wallet > total  ? user.wallet - total : 0)
                        patch('/user/update', {

                            wallet: newWalletValue
                        }, )
                            .then(r => {
                                setUser(
                                    {
                                        ...user,
                                        wallet: newWalletValue
                                    }
                                )
                                console.log(r)})
                            .catch(e=>{
                                console.log(e)
                            })


                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
            console.log('finished')

            toast.success('Paid successfully')
            history.push('/profile/renting')

            console.log("Success! Check email for details", { type: "success" });
        } else {
            toast.error('Something went wrong, contact the Administrator')

            console.log("Something went wrong", { type: "error" });
        }
    }

    return (
        products ? (
            <div className="container">
                <div className="product">
                    {/*<h1>{product.name}</h1>*/}
                    {/*<h3>On Sale · ${product.price}</h3>*/}
                </div>
                <StripeCheckout
                    stripeKey="pk_test_51J72gVH4P1CollSvrHWgJ2OyJNqEdMQlk88ALoMM1SkrZtVrcgtKJt4uc2eOxrtbumeCSIDxbqymaeu5bgxotVlf00Fjhgz1hc"
                    token={handleToken}
                    amount={total * 100}
                    name="Tesla Roadster"
                    billingAddress
                    shippingAddress
                />
            </div>
        ) : ''
    );
};

export default Checkout;
