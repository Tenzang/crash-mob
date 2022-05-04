import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Equipment extends Component{
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
                        <AppBar title="Character Equipment" />
                        <h2>Character Equipment</h2>
                        <TextField
                            placeholder="Armour"
                            label="Armour"
                            onChange={handleChange('armour')}
                            defaultValue={values.armour}
                            margin="normal"
                            fullWidth
                        />
                        <br/>
                        <TextField
                            placeholder="Weapons"
                            label="Weapons"
                            onChange={handleChange('weapons')}
                            defaultValue={values.weapons}
                            margin="normal"
                            fullWidth
                        />
                        <br/>
                        <TextField
                            placeholder="Equipment"
                            label="Equipment"
                            onChange={handleChange('equipment')}
                            defaultValue={values.equipment}
                            margin="normal"
                            fullWidth
                        />
                        <br/>

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Back</Button>
                        
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={ (event)=> {
                                this.props.getHitDice()
                                this.continue(event)
                            }}

                        >Continue</Button>
                         
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }







}
export default Equipment;