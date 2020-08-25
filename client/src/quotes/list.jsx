import React from "react";
import { Container, Grid, TextField, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, makeStyles, Typography, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import CInput from "../components/CInput";
import { useState } from "react";
import QuoteService from "../quote-service";
import ImageIcon from '@material-ui/icons/FaceRounded';
import DeleteIcon from '@material-ui/icons/Delete';

const FormData = { name: "", quote: "" };

const useStyles = makeStyles({
    quote: {
        color: "teal",
        fontWeight: "bold",
        fontSize: "16px"
    },
    name: {
        color: "#FFFFFF",
    },
    date: {
        color: "#cecece",
        fontSize: 12
    },
    delete: {
        color: "#FFeFee"
    }
})

const ListQuotes = (props) => {

    const classes = useStyles();

    return <Container maxWidth="md">
        <List>
            {
                props.quotes.map(quote => {
                    return <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon style={{ color: "teal" }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography
                            component="div"
                            variant="body2"
                            className={classes.quote}
                            color="textPrimary"
                        >
                            {quote.quote}
                        </Typography>}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        className={classes.name}
                                        color="textPrimary"
                                    >
                                        {quote.name}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        className={classes.date}
                                        color="textPrimary"
                                    >
                                        {new Date(quote.publishedOn).toLocaleDateString()}
                                    </Typography>
                                </React.Fragment>
                            } />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon className={classes.delete} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                })
            }
        </List>
    </Container>
}

export default ListQuotes;