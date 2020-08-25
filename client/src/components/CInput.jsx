import React from "react";
import { TextField, withStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "teal"
        },
        "& .MuiInputLabel-outlined": {
            color: "#FFFFFF"
        }
    }
});

const CInput = (props) => {
    const classes = useStyles();

    return <TextField
        id={props.id}
        label={props.label}
        variant={props.variant || "outlined"}
        color={props.color || "primary"}
        fullWidth
        size="small"
        inputProps={{ style: { color: 'white' } }}
        InputLabelProps={{
            shrink: true,
        }}
        className={classes.root}
        {...props}
    />
}

export default CInput;