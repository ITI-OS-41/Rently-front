import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


const Share = (props) => {
    const url = window.location.href;
    return (
        <div className="share" {...props} style={{marginBottom: '1rem'}}>
            <p style={{marginBottom: '0.1rem', fontWeight: 'bold'}}>Share</p>
            <div className="d-inline-block icons">
                <a href={`https://wa.me/?text=${url}`} data-action="share/whatsapp/share" target="_blank" className="whatsapp">
                    <IconButton aria-label="whatsapp">
                        <WhatsAppIcon fontSize="small" />
                    </IconButton>
                </a>
                <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" className="facebook">
                    <IconButton aria-label="facebook">
                        <FacebookIcon fontSize="small" />
                    </IconButton>
                </a>
                <a href={`https://twitter.com/share?url=${url}`} target="_blank" className="facebook">
                    <IconButton aria-label="facebook">
                        <TwitterIcon fontSize="small" />
                    </IconButton>
                </a>
            </div>
        </div>
    )
};


export default Share;
