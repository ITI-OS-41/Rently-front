import React, {useState} from "react";
import SendIcon from '@material-ui/icons/Send';
import TextField from "@material-ui/core/TextField";
import Button from '../../components/CustomButtons/Button.js';


export default function (props) {
    const {onSubmit} = props;
    const [msg,setMsg] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!msg.length){
            return
        }
        setMsg(msg.replace(/\n\r?/g, '<br />'))
        onSubmit(msg);
        setMsg('')
    };

    return (
        <form  autoComplete="off" onSubmit={handleSubmit} style={{display: 'flex', margin: '0.5rem 0'}}>
            <TextField
                multiline
                rows={3}
                value={msg}
                label="Message"
                onChange={e=>{setMsg(e.target.value)}}
                style={{flexGrow: '1', padding: '0 1rem 0 0'}}
            />
            <Button justIcon round color="primary" type="submit">
                <SendIcon style={{ color: "#FFFFFF" }} />
            </Button>
        </form>
    )
}
