// @noflow

import React,{useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {post} from "../../functions/request";
import StripeCheckout from "react-stripe-checkout";
import toast from "../../functions/toast";
import {SERVER} from "../../config";


const Checkout = (props) => {
    const {total, products,...rest} = props;

    console.log({products})
    // const [product] = useState(products);



    async function handleToken(token, addresses) {
        const response = await post(
            `${SERVER}/checkout`,
            { token, products, total }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            alert('success')
            console.log("Success! Check email for details", { type: "success" });
        } else {
            alert('error')
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
