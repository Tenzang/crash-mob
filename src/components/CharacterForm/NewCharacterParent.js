import React, {Component} from "react";
import Abilities from "./Abilities";

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import CharacterSubmit from "./CharacterSubmit";
// import Level from "./Level";

// import Scores from './Scores';
// import Skills from "./Skills";
// import SavingThrows from "./SavingThrows";
// import Health from "./Health";

// const SERVER_URL = 'http://localhost:3000/character.json'

class NewCharacterParent extends Component{
    constructor() {
        super();

        this.state = {
            step: 1,
            name: '',
            race: '',
            role: '',
            abilities: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0
            },
        };
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
        step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    };

    setScores = abilities => this.setState({ abilities: abilities });
    
    render(){
        const { step } = this.state;
        const { name, race, role, abilities } = this.state;
        const values = { name, race, role, abilities };

        switch(step) {
            case 1:
                return(
                    <Name 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return(
                    <Race
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return(
                    <Role
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return(
                    <Abilities
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        setScores={this.setScores}
                        values={values}
                    />
                );
            case 5:
                return(
                    <CharacterSubmit character={this.state} />
                );

        }
    }
}
export default NewCharacterParent;