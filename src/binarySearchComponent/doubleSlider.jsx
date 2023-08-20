import React, {useEffect} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "../App.css";

const useStyles = makeStyles({
    root: {
        width: 400,
    },
});


const CSlider = withStyles({
    root: {
       // color: "#ffffff",
        height: 3,
        width: 400,
        padding: "13px 0",

    },
    track: {
        height: 4,
        borderRadius: 2,
    },
    thumb: {
        backgroundColor: "#fff",
        //color: "#fff",
    },
})(Slider);

function valuetext(value) {
    return `${value}`;
}



export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([props.lower, props.upper]);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    const handleCommit = (event, newValue) => {
        console.log(newValue);
    };
    useEffect(()=>{
        setValue([props.lower,props.upper]);
    },[props.lower,props.upper])
    return (
        <div className={classes.root}>
            <CSlider id="slide"
                disabled
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleCommit}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                max={props.max}
            />
            <Typography id="range-slider" gutterBottom>
                <span>Binary Search</span>
            </Typography>
        </div>
    );
}
