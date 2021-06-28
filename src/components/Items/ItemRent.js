import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button.js";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Typography from '@material-ui/core/Typography';
import { DateRange } from 'react-date-range';
import { post } from "../../functions/request";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },

});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
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
        textTransform: 'capitalize',
    },
})(Button);

export default function ItemRent(props) {
    const [open, setOpen] = React.useState(false);
    const [openRent, setOpenRent] = React.useState(false);
    const { item, user, priceSelect } = props
    // console.log(item)

    const [selectedDate, setSelectedDate] = React.useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const handleRentRequest = () => {

        console.log(selectedDate);
        post(`/rent/`,
            {
                "owner": item.owner._id,
                "renter": user,
                "item": item._id,
                "from": selectedDate[0].startDate.toString(),
                "to": selectedDate[0].endDate.toString(),
                "insurance": 10,
                "totalPrice": priceSelect,
                "status": "pending",
            })
            .then(res => {
                let response = res.data
                console.log(response)
            })
            .catch(e=>{
                console.log(e)
            })
    };
    console.log(props)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpenRent = () => {
        setOpenRent(true);
    };
    const handleCloseRent = () => {
        setOpenRent(false);
    };

    return (
        <div>
            <StyledButton round onClick={handleClickOpen}  >
                Set Dates &nbsp;
            </StyledButton>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Set Dates
                </DialogTitle>
                <DialogContent dividers>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setSelectedDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={selectedDate}
                    />
                </DialogContent>
                <DialogActions>
                    <StyledButton autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </StyledButton>
                </DialogActions>
            </Dialog>
            <StyledButton round onClick={handleClickOpenRent && handleRentRequest}  >
                Request to Rent &nbsp; <ShoppingCart />
            </StyledButton>
            <Dialog onClose={handleCloseRent} aria-labelledby="customized-dialog-title" open={openRent}>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseRent}>
                    Booking Total
                </DialogTitle>
                <DialogContent dividers>
                    $40.00
                </DialogContent>
                <DialogActions>
                    <StyledButton autoFocus onClick={handleCloseRent} color="primary">
                        The booking has been Sent to Owner
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
