/*eslint-disable*/
import React, {useContext, useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";

import shoppingCartStyle from "../../assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";
import product2 from "../../assets/img/product2.jpg";
import CartPageParallax from "./CartPageParallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import {get,del} from "../../functions/request";

import defaultPhoto from '../../assets/img/noimagelarge.png'
import {currency, dateTime} from "../../functions/helpers";
import SubmitButton from "../../components/global/SubmitButton";
import {UserContext} from "../../Context";
import {TextField} from "@material-ui/core";
import Checkout from "../../components/global/Checkout";
import toast from "../../functions/toast";

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    const {user,setUser} = useContext(UserContext);

    const [isCheckingOut,setIsCheckingOut]=useState(false);
    const [rents,setRents]=useState([]);
    const [temp,setTemp]=useState(0);


    useEffect(()=>{
        get(`rent?status=approved&renter=${user._id}&isPaid=false`)
            .then(res=>{
                let data = res.data.res;
                setRents(data)
            })
            .catch(e=>console.log(e))
    },[temp])


    useEffect(()=>{
        get('user/infor')
            .then(res=>{
                let allData = {
                    ...user,
                    ...res.data
                };
                setUser(allData)
            })
            .catch(e=>console.log(e))
    },[]);


    const getTotalPrice=()=>{
        let total =0;
        rents.forEach(rent=>{
            total+=rent.totalPrice||0
        })
        return total;
    }

    const handleRemoveRent=(rentId)=>{
        const conf = confirm("Are you sure to delete this rent?")
        if(!conf){
            return
        }
        del(`rent/${rentId}`)
            .then(res=>{
                setTemp(temp+1);
            })
            .catch(e=>{
                console.log(e)
            })
    }

    const handleCheckout = () =>{
        setIsCheckingOut(true);
        alert("handle ckechout booooy @_@")
    }


    return (
        <div>
            <Header/>

            <CartPageParallax/>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div style={{padding: '2rem 4rem'}}>
                    <Card plain>
                        <CardBody plain>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={8} md={9}>

                                    <h3 className={classes.cardTitle}>
                                        Shopping Cart

                                        <span style={{float: 'right'}}>({rents.length}) rent{rents.length>1&&'s'} in your cart</span>
                                    </h3>
                                    <table style={{width: '100%'}}>
                                        <thead>
                                            <th colSpan={2}>Item</th>
                                            <th>Period</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th>Remove</th>
                                        </thead>
                                        <tbody>
                                        {
                                            rents.length ? (
                                                rents.map(rent=>(
                                                    <tr key={rent._id} style={{borderBottom: '1px solid #ddd', margin: '2rem'}}>
                                                        <td width={'100px'}>
                                                            <img src={rent.item?.photo[0] || defaultPhoto} style={{width: '100%'}} className={classes.img}/>
                                                        </td>
                                                        <td>
                                                            <h3 className={classes.tdNameAnchor}>{rent.item.name}</h3>
                                                        </td>

                                                        <td>
                                                            <p>From: {dateTime(rent.from)}</p>
                                                            <p>To: {dateTime(rent.to)}</p>
                                                        </td>
                                                        <td>{rent.quantity}</td>
                                                        <td>{currency(rent.totalPrice || 0)}</td>
                                                        <td>
                                                            <Tooltip
                                                                title="Remove item"
                                                                placement="top"
                                                                classes={{tooltip: classes.tooltip}}
                                                            >
                                                                <Button onClick={()=>{handleRemoveRent(rent._id)}} link className={classes.actionButton}>
                                                                    <Close/>
                                                                </Button>
                                                            </Tooltip>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : ''
                                        }



                                        <tr>
                                            <td colSpan={4} style={{textAlign: 'right'}}><h3>Total: </h3></td>
                                            <td><h3>{currency(getTotalPrice())}</h3></td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </GridItem>
                                <GridItem xs={12} sm={4} md={3}>

                                    {
                                        rents.length ? (

                                        <Card >
                                            <CardBody>
                                                <h4>
                                                    Rates
                                                    <span style={{float: 'right'}}>{currency(getTotalPrice())}</span>
                                                </h4>
                                                <h4 style={{fontWeight: 'bold'}}>
                                                    Wallet
                                                    <span style={{float: 'right'}}>- {currency(user.wallet || 0)}</span>
                                                </h4>
                                                <hr/>
                                                <h4 style={{fontWeight: 'bold'}}>
                                                    Order Total
                                                    <span style={{float: 'right'}}>{currency(
                                                        (user.wallet - getTotalPrice()) >= 0 ? 0: ((getTotalPrice() - (user.wallet || 0)))
                                                    )}</span>
                                                </h4>

                                                <Checkout total={Math.abs(getTotalPrice())} products={rents}/>


                                                <GridContainer justify="center" style={{marginTop: '1rem'}}>
                                                    <GridItem xs={6} sm={6} md={6} style={{
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}>
                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAnCAMAAAACaSdPAAAAt1BMVEX///8AV5/6phoASZkAVZ4ATJoAUp0AUJzO2ObEzN8ARJcATpv+6ND6oAAAR5hkhbbF0eIAQZbq7vSesM73+ftqibjw8/fj6PBLda3/qgB4lL4AT6XX3uqNosa2w9kAPJQdXKH+9esvXJisvNWDm8JVfLE4aaj+79/8yo/6qS35mQD8z5oAMZD6rDj91qr7vWz7wHbnoD12mMmKdnDpnzDEjk+ohWWbfmtVY4f/xm7Vm1RjZ4Lu5+Eg9eihAAAEyUlEQVRYhXVYCXejOAyGtQ3BTEgghNBcpZOUztHd7u7M7P3/f9eCLcmWTfVeX598SLL06SDJh4BekoDaFdJ2Zok7sFNdcdn3Q5qO/XG3akMZyQFv0danz1++rBl95Veuj8KS7ieueQXuceef6WuVZ1KmqZRZLqrnMxOxy3QFt65u9enrz+v1T47Wv7BLfZZaqub3bgVyK6d1EHgGSF99CTtNG/mFyX55Y5r9raaCK3KY2ZsCVjR4YlPJNCDtB6Gr3EbWBwF4+tUpXj/5xpZwpTSOPcLLZAn77ZCHWlOZtUsS5h2VhPTy2wPq/eAtj/gY0RmvAytH3M8itW7TUOq7Q3M4zvT7N1DsI+uMsck2hkefZUe7f1eeOvjDs5YK4alNFYu8PVB//G41v7nFO3pRmCzqaub15FCTxHwC15BmYvrH0NOz6Of3SG8nZPnDKP7sFhX6NTXsSjAzKNzTwt3mTrM9Sj9bPMviEFiaQnn644EBi5wE77shRiBOOT5Gbz1BNy+I9wB2OtZ7mYSe/nzwgbXB9+jOHkEptX0MmpXtY3EJs4yqwDk6Ypw4v5gqR4tuRrnPmEbWXVRFsjhs8HTAXY4Wl7f4kJFy+vGwfgtuUXVCb4EdV9yXeVyTDUEayrGBxMBE8MmWxNN3qliUrYPlO9ST7/h7pxNNLM+l4QSPMPE9spVFfnxYW56wqKAJnDF9VWH4xpVAqS+xwGQPcak7fINUsWdAbPkNgEUoquAs+RXLzuglp5JR6FowfC7Ll/JdYCXCijl9t8BKA1Q5Q9Doq1fzpxwegmqEpVndnM1qAViQNtlff8/cCoVSz9twOE/Us/SUYmRhHsC3onU5t5RyiN/TPzNHvWfAfXRr9kyeHHhfyHThxG2ZKoXQjvUeAH7y37liYcqXOFq0GN7SYagdFVMsa+drdI8tqpj79ULKgWPS6j9XI6XtgJ5ZvKsca973NUaloV5mWASWWCURIe7n4KN9LiBUrTkmV6PwNUsJ66gIelChAvd5hKCbqkqH1rpJiiYH1QXXBl+zAMTimoZOhUm1AKwDQHgKPmLMocp1vSy6eCsdvmCIuoYCqEXEeinAgrCrnFsIzuF0NlG7cfgS7DR1AoSZ7uLr2C7VFWOpHfywbC4MDYnDBoxiVFOlLA0pmtS28eWCnINvc/2D8LlUcqYXa6bXjSKTZkPI5gvAwopKQ6B20KXus5QJiZv50irxWndMrup4NPLjfnXZYQRrE6A2KPB8wr/xcsJpQe+Fz0O+S+80qxj28PrMAkWDown/8O5z/W8NR1vWYUxFDwVLC+dCZCK9F7YjNjuaoExoVlX6Poki1tuyMZvluORQM1Vk+vjLJ4WZcOE0oaGBUGYewVq5NCL0foPxUJU0wUy7h4iYz8/gDn2LyXG/cYSVdwlYOy/ArGdRQkL+jcsRrGarLjRnM/CR3AW9K8/RLFEJodrCYlltbXyIDvCKrHERtsKlIbB0kWIzGCJdlma10aHK2YPaWOo+M3gkae5ZABb1v3DWDWf2xyx8ca439iHuNwL+2Ym+zJeAtasF/obBgyOUoQq+MlfHYf5VY9IuZ9Qqnd5By/lVwdFgpmlhQyw0lqTbErH1AslZ0xS7+6Yfh7HfX67uaeeFo4GM/wG/EUmzg+s8lwAAAABJRU5ErkJggg==" style={{width: '100%', maxHeight: '35px'}} alt=""/>
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={6} style={{
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}>
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/773px-Mastercard-logo.svg.png" style={{width: 'auto', maxHeight: '35px'}} alt=""/>
                                                    </GridItem>
                                                </GridContainer>


                                            </CardBody>
                                        </Card>
                                        ) : ''
                                    }
                                </GridItem>
                            </GridContainer>

                        </CardBody>
                    </Card>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
