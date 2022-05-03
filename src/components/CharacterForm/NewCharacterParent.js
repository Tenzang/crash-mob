import React, {Component} from "react";

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import SkillProficiencies from "./Skill Proficiencies";
// import Level from "./Level";

// import Scores from './Scores';
// import Skills from "./Skills";
// import SavingThrows from "./SavingThrows";
// import Health from "./Health";

class NewCharacterParent extends Component{
    constructor() {
        super();

        this.state = {
            step: 1,
            name: '',
            race: '',
            role: ''
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
        const { name, race, role } = this.state;
        const values = { name, race, role };

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
                    <SkillProficiencies
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        race={this.state.race}
                        role={this.state.role}
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