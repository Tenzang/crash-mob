import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Details extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    };

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <AppBar title="Character Details" />
                        <h2>Character Details</h2>
                        <TextField
                            placeholder="Personality Traits"
                            label="Personality Traits"
                            onChange={handleChange('personality')}
                            defaultValue={values.personality}
                            margin="normal"
                            fullWidth
                        />
                        <br/>
                        <TextField
                            placeholder="Ideals"
                            label="Ideals"
                            onChange={handleChange('ideals')}
                            defaultValue={values.ideals}
                            margin="normal"
                            fullWidth
                        />
                        <br/>
                        <TextField
                            placeholder="Bonds"
                            label="Bonds"
                            onChange={handleChange('bonds')}
                            defaultValue={values.bonds}
                            margin="normal"
                            fullWidth
                        />
                        <br/>
                        <TextField
                            placeholder="Flaws"
                            label="Flaws"
                            onChange={handleChange('flaws')}
                            defaultValue={values.flaws}
                            margin="normal"
                            fullWidth
                        />
                        <br/>

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Back</Button>
                        <br/>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</Button>
                        <Button onClick={event =>  window.location.href='/characters'}>Exit</Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }
}

export default Details;