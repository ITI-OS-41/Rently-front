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
import {post} from "../../functions/request";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Grid from "@material-ui/core/Grid";
import {UserContext} from "../../Context";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";

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
    const {user} = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const {item, priceSelect,deliveryPrice, ...rest} = props;
    const [paymentType, setPaymentType] = useState('');
    const [rent, setRent] = useState({
        owner: item.owner._id,
        renter: user._id,
        item: item._id,
        insurance: 10,
        status: "pending",
        totalPrice: 0
    });
    const [selectedDate, setSelectedDate] = React.useState( {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const handleRentRequest = () => {
        post(`/rent/`, rent)
            .then((res) => {
                let response = res.data;
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const handleClickOpen = () => {
        setOpen(true);
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

        setRent(prevState => ({
            ...prevState,
            totalPrice: Math.round(cost)
        }))
    };



    useEffect(()=>{
        if(selectedDate.startDate && selectedDate.endDate){
            console.log(selectedDate)
            setRent(prevState => ({
                ...prevState,
                from: new Date(selectedDate.startDate.toString()),
                to: new Date(selectedDate.endDate.toString()),
            }))
            calculateTotalPrice()
        }
    },[selectedDate]);

    // calculate total price
    useEffect(()=>{
        if(paymentType){
            calculateTotalPrice()
        }
    },[paymentType]);

    return (
        <div>
            <Grid>
              <Select
                    style={{width: '100%'}}
                    variant="outlined"
                    value={paymentType}
                    onChange={e=>{setPaymentType(e.target.value)}}
                >
                    {
                        Object.keys(item.price).map((time) => {
                            if (parseInt(item.price[time]) > 0){
                                return(
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
                    <Button
                        fullWidth
                        color="info"
                        onClick={()=>{setOpen(true)}}
                    >
                        Set Dates
                    </Button>
                </Grid>

                <hr/>

                {
                    (rent.totalPrice > 0 && paymentType) && (
                        <>
                            <h4>{paymentType} <span style={{float: 'right'}}>{item.price[paymentType]}$</span></h4>
                            <h4>Delivery Price: <span style={{float: 'right'}}>{deliveryPrice}$</span></h4>
                            <h4 style={{fontWeight: 'bold'}}>Total price: <span style={{float: 'right'}}>{rent.totalPrice + deliveryPrice}$</span></h4>
                            <hr/>
                        </>
                    )
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
                onClose={()=>{setOpen(false)}}
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
