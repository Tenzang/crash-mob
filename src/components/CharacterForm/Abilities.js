import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

class Abilities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            abilities: [ 
                { label: "strength", score: props.abilities[0] },
                { label: "dexterity", score: props.abilities[1] },
                { label: "constitution", score: props.abilities[2] },
                { label: "intelligence", score: props.abilities[3] },
                { label: "wisdom", score: props.abilities[4] },
                { label: "charisma", score: props.abilities[5] }
            ]
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
        const score = event.target.value;
        const index =  event.target.name;

        const {abilities} = this.state;
        let newState = {
            abilities: [ 
                { label: "strength", score: abilities[0].score },
                { label: "dexterity", score: abilities[1].score },
                { label: "constitution", score: abilities[2].score },
                { label: "intelligence", score: abilities[3].score },
                { label: "wisdom", score: abilities[4].score },
                { label: "charisma", score: abilities[5].score }
            ]
        };

        newState.abilities[index].score = score;
        
        this.setState( newState );
        this.props.setScores( event );
    }    

    render() {
        return(
            <Dialog
                open
                fullWidth
                maxWidth='sm'
            >
                <AppBar title="Abilities" />
                <h2>Choose your Abilities</h2>

                { this.state.abilities.map( (ability, index) => {
                    return (
                        <div>
                            {ability.label}
                            <Select
                                onChange={ this.scoreUpdate }
                                value={ ability.score }
                                name={index}
                                key={index + 6}
                            >
                                {[15, 14, 13, 12, 10, 8].map((score, index) => {
                                    return (
                                        <MenuItem key={ index } value={ score }>{ score }</MenuItem>
                                    );
                                })}
                            </Select>
                        </div>
                    );
                }) }

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
        );
    }
}

export default Abilities;