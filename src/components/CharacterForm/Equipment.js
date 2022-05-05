import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
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
            <Dialog
                open
                fullWidth
                maxWidth='sm'
            >
                <AppBar title="Character Equipment" />
                <h2 class="headings">Character Equipment</h2>
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
                    color="primary"
                    variant="contained"
                    onClick={ (event)=> {
                        this.props.getHitDice()
                        this.continue(event)
                    }}

                >Continue</Button>

                <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                >Back</Button>

                <Button onClick={ () =>  window.location.href='/characters' }>Exit</Button>
                    
            </Dialog>
        );
    }







}
export default Equipment;