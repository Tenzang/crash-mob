import React, {Component} from "react";

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import Level from "./Level";
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
            level: ''
        }
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
    
    render(){
        const { step } = this.state;
        const { name, race, role, level } = this.state;
        const values = { name, race, role, level};

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
                    <Level
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    
                );
            case 5:
                return(
                    <h1>End of form</h1>
                );
        }
    }
}
export default NewCharacterParent;