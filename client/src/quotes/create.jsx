import React from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import CInput from "../components/CInput";
import { useState } from "react";
import QuoteService from "../quote-service";

const FormData = { name: "", quote: "" };

const CreateQuote = (props) => {

    const [formValue, setFormValue] = useState(FormData);

    const submit = () => {
        QuoteService.post(formValue)
            .then(success => {
                setFormValue(FormData);
                props.submit(formValue);
            }).catch(error => {
                console.log("Error in saving quote", error);
            });
    }

    const onChange = (name, value) => {
        console.log(name, value)
        setFormValue({ ...formValue, [name]: value });
    }

    return <Container maxWidth="md">
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <CInput id="inp-name" label="Name" variant="outlined" name="name"
                    value={formValue.name}
                    onChange={(e) => onChange("name", e.target.value)} />
            </Grid>
            <Grid item xs={6}>
                <CInput id="inp-quote" label="Quote" variant="outlined" color="secondary" name="quote"
                    value={formValue.quote}
                    onChange={(e) => onChange("quote", e.target.value)} />
            </Grid>
            <Grid item xs={2}>
                <Button id="submit-btn" variant="contained" color="primary" onClick={submit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    </Container>
}

export default CreateQuote;