import React, {useContext, useEffect, useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import {DateRange} from "react-date-range";
import {patch, post} from "../../functions/request";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Grid from "@material-ui/core/Grid";
import {UserContext} from "../../Context";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import history from "../../functions/history";
import TextField from "@material-ui/core/TextField";
import toast from "../../functions/toast";


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const StyledButton = withStyles({
    root: {
        width: "100%",
        border: 0,
        height: 40,
        background: "#00acc1",
    },
    label: {
        textTransform: "capitalize",
    },
})(Button);

export default function ItemRent(props) {
    const {user,setUser} = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const {item, priceSelect, maxQuantity , deliveryPrice, ...rest} = props;
    const [rentPrice, setRentPrice] = useState(0);
    const [paymentType, setPaymentType] = useState('');

    const [needToBePaid, setNeedToBePaid] = useState(0)
    const [walletAfter, setWalletAfter] = useState(0)

    const [addDeliveryRate, setAddDeliveryRate] = useState(false);
    const [rent, setRent] = useState({
        owner: item.owner._id,
        renter: user._id,
        item: item._id,
        insurance: 10,
        status: "pending",
        totalPrice: 0,
        quantity: 1
    });
    const [selectedDate, setSelectedDate] = React.useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const handleRentRequest = () => {
        if (!user.isVerified){
            toast.error("Please verify your account to rent");
            return;
        }
        post(`/rent/`, {
            ...rent,
            totalPrice: needToBePaid+user.wallet
        },
            "rent request sent successfully")
            .then((res) => {
                history.push('/profile/renting');
            })
            .catch((e) => {
                console.log(e);
            });
    };


    const handleClose = () => {
        setOpen(false);
    };
    const getPriceMonthly = () => {
        return item.price.month || (getPriceWeekly() * 30) / 7 || getPriceDaily() * 30;
    };
    const getPriceWeekly = () => {
        return item.price.week || getPriceDaily() * 7;
    };
    const getPriceDaily = () => {
        return item.price.day;
    };
    const calculateTotalPrice = () => {
        // To calculate the time difference of two dates
        const Difference_In_Time = Math.abs(new Date(selectedDate.endDate.toString()).getTime() - new Date(selectedDate.startDate.toString()).getTime());


        // To calculate the no. of days between two dates
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


        const totalMonths = Difference_In_Days / 30;
        const totalWeeks = Difference_In_Days / 7;
        const totalDays = Difference_In_Days;

        let cost = 0;
        if (totalMonths >= 1) {
            cost = totalMonths * getPriceMonthly();
        } else if (totalWeeks >= 1) {
            cost = totalWeeks * getPriceWeekly();
        } else {
            cost = totalDays * getPriceDaily();
        }
        setRentPrice(Math.round(cost)* rent.quantity);

        setRent(prevState => ({
            ...prevState,
            totalPrice: Math.round(cost)
        }))
    };


    useEffect(() => {
        if (selectedDate.startDate && selectedDate.endDate) {
            setRent(prevState => ({
                ...prevState,
                from: new Date(selectedDate.startDate.toString()),
                to: new Date(selectedDate.endDate.toString()),
            }))
            calculateTotalPrice()
        }
    }, [selectedDate]);

    // calculate total price
    useEffect(() => {
        if (paymentType) {
            calculateTotalPrice()
        }
    }, [addDeliveryRate,rent.quantity]);


    useEffect(() => {
        setNeedToBePaid(( rentPrice + (addDeliveryRate ? deliveryPrice : 0) - user.wallet||0 ) < 0 ? 0 : ( rentPrice + (addDeliveryRate ? deliveryPrice : 0) - user.wallet||0 ) )
        setWalletAfter(((user.wallet||0) - rentPrice - (addDeliveryRate ? deliveryPrice : 0)) > 0 ? ((user.wallet||0) - rentPrice - (addDeliveryRate ? deliveryPrice : 0)) : 0)
    }, [rent, addDeliveryRate, deliveryPrice, user]);

    return (
        <div>
            <Grid>
                <Select
                    style={{width: '100%'}}
                    variant="outlined"
                    value={paymentType}
                    onChange={e => {
                        setPaymentType(e.target.value)
                    }}
                >
                    {
                        Object.keys(item.price).map((time) => {
                                if (parseInt(item.price[time]) > 0) {
                                    return (
                                        <MenuItem
                                            value={time}
                                            key={time}
                                        >
                                            {`${item.price[time]}$ per ${time}`}
                                        </MenuItem>
                                    )
                                }
                            }
                        )
                    }
                </Select>


                <Grid>
                    <TextField
                        style={{margin: '1rem auto'}}
                        type="number"
                        variant="outlined"
                        fullWidth
                        label="quantity"
                        value={rent.quantity}

                        inputProps={{
                            max: maxQuantity,
                            min: 1
                        }}

                        onChange={e=>setRent(prevState => (
                            {
                                ...prevState,
                                quantity: e.target.value
                            }
                        ))}
                    />
                </Grid>


                <Grid>
                    <Button
                        fullWidth
                        color="primary"
                        onClick={() => {
                            setOpen(true)
                        }}
                    >
                        <DateRangeOutlinedIcon/>
                        Set Dates
                    </Button>
                </Grid>


                <Grid>
                    <Button
                        fullWidth
                        color="info"
                        onClick={() => {
                            setAddDeliveryRate(true)
                        }}
                    >
                        <LocalShippingOutlinedIcon/>
                        Add delivery
                    </Button>
                </Grid>


                <hr/>

                {

                    (rent.totalPrice && paymentType) ? (
                        <>
                            <h4>per {paymentType} <span style={{float: 'right'}}>{item.price[paymentType]}$</span></h4>
                            <h4>Total Rent price: <span style={{float: 'right'}}>{rentPrice}$</span></h4>
                            {

                                addDeliveryRate && <h4>
                                    Delivery Price:<span style={{float: 'right'}}>{deliveryPrice}$</span>

                                    <IconButton
                                        onClick={() => {
                                            setAddDeliveryRate(false)
                                        }}
                                        aria-label="delete" size="small">
                                        <HighlightOffOutlinedIcon fontSize="inherit"/>
                                    </IconButton>
                                </h4>

                            }
                            <Typography color={"primary"}>Wallet:<span
                                style={{float: 'right'}}>-{user.wallet}$</span></Typography>
                            <h4 style={{fontWeight: 'bold'}}>Total price: <span
                                style={{float: 'right'}}>{needToBePaid}$</span></h4>
                            <h4 style={{fontWeight: 'bold'}}>Wallet credits later: <span
                                style={{float: 'right'}}>{walletAfter}$</span>
                            </h4>
                            <hr/>
                        </>
                    ) : ''
                }


                <Grid>
                    <Button
                        fullWidth
                        disabled={!(rent.totalPrice)}
                        onClick={handleRentRequest}
                    >
                        Request to Rent &nbsp; <ShoppingCart/>
                    </Button>
                </Grid>
            </Grid>


            <Dialog
                onClose={() => {
                    setOpen(false)
                }}
                open={open}
            >
                <DialogContent dividers>
                    <DateRange
                        moveRangeOnFirstSelection={true}
                        minDate={new Date()}
                        onChange={e => setSelectedDate(e.selection)}
                        ranges={[selectedDate]}
                    />
                </DialogContent>

                <DialogActions>
                    <StyledButton autoFocus onClick={handleClose} color="primary">
                        Save
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
