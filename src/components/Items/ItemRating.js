import React from 'react'
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';


const StyledRating = withStyles({
    iconFilled: {
        color: '#3f3f3f',
    },
})(Rating);

const average = ratings => {
    if(!ratings){
        return 0
    }
    return ratings.reduce((a, b) => { (a + b) }, 0) / ratings.length;
}

export default function ItemRating(props) {
    const { itemRate } = props
    const result = average(itemRate)
    return (
        <span>
            <StyledRating name="read-only" value={result} size="small" readOnly />
        </span>
    )
}
