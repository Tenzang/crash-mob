import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Select } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { MenuItem } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

class Level extends Component {
    
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    };
    back = event => {
        event.preventDefault();
        this.props.prevStep();
    };


    render(){
        const { handleChange } = this.props;
        return(
            <Dialog
                open
                fullWidth
                maxWidth='sm'
            >
                <AppBar title="Character Level" />
                <h2 class="headings">Character Level</h2>
                <InputLabel id="character-level">Level</InputLabel>
                    <Select
                        label="Level"
                        onChange={handleChange('level')}
                        value={this.props.values.level}
                    >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={6}>Six</MenuItem>
                        <MenuItem value={7}>Seven</MenuItem>
                        <MenuItem value={8}>Eight</MenuItem>
                        <MenuItem value={9}>Nine</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={11}>Eleven</MenuItem>
                        <MenuItem value={12}>Twelve</MenuItem>
                        <MenuItem value={13}>Thirteen</MenuItem>
                        <MenuItem value={14}>Fourteen</MenuItem>
                        <MenuItem value={15}>Fifteen</MenuItem>
                        <MenuItem value={16}>Sixteen</MenuItem>
                        <MenuItem value={17}>Seventeen</MenuItem>
                        <MenuItem value={18}>Eighteen</MenuItem>
                        <MenuItem value={19}>Nineteen</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <br/>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                >Continue</Button>
                <br/>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                >Back</Button>
                <br/>
                <Button onClick={ () =>  window.location.href='/characters' }>Exit</Button>
            </Dialog>
        )
    }
};

export default Level;