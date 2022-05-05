import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Name extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <Dialog
                open
                fullWidth
                maxWidth='sm'
            >
                <AppBar title="Character Name" />
                <h2>Character Name</h2>
                <TextField
                    placeholder="Enter Your Character's Name"
                    label="Character Name"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                >Continue</Button>
                <Button onClick={event =>  window.location.href='/characters'}>Exit</Button>
            </Dialog>
        );
    }
}

export default Name;