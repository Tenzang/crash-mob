import React, { Component } from 'react';
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

class Abilities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            strength: props.values.abilities.strength,
            dexterity: props.values.abilities.dexterity,
            constitution: props.values.abilities.constitution,
            intelligence: props.values.abilities.intelligence,
            wisdom: props.values.abilities.wisdom,
            charisma: props.values.abilities.charisma
        };

        this.scoreUpdate = this.scoreUpdate.bind(this);
    }

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    };

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    };

    scoreUpdate(event) {
        const {ability, score} = event.target.value
        this.setState( { [ability]: score } );
    }    

    render() {
        const { setScores, values } = this.props;
        return(
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <AppBar title="Abilities" />
                        <h2>Choose your Abilities</h2>
                        { Object.keys(this.state).map( ability => {
                            return (
                                <div>
                                    {ability}:
                                    {this.state[ability]}
                                    <Select
                                        onChange={this.scoreUpdate}
                                    >
                                        {[16, 15, 14, 13, 12, 10, 8].map((score, index) => {
                                            return (
                                                <MenuItem key={index} value={{ability: ability, score: score}}>{score}</MenuItem>
                                            );
                                        })}
                                    </Select>
                                </div>
                            )
                        })}

                        <br/>

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={(event) => {
                                setScores(this.state);
                                this.back(event);
                            }}
                        >Back</Button>

                        <Button
                            color="primary"
                            variant="contained"
                            onClick={(event) => {
                                setScores(this.state);
                                this.continue(event);
                            }}
                        >Continue</Button>
                        
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }
}

export default Abilities;