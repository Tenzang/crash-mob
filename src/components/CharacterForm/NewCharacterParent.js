import React, {Component} from "react";
import axios from 'axios';

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import Level from "./Level";

// import Scores from './Scores';
// import Skills from "./Skills";
// import SavingThrows from "./SavingThrows";
// import Health from "./Health";

const SERVER_URL = 'http://localhost:3000/character.json'




class NewCharacterParent extends Component{
    constructor() {
        super();

        this.state = {
            step: 1,
            name: '',
            race: ''
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
        const { name, race } = this.state;
        const values = { name };

        switch(step) {
            case 1:
                return(
                    <Name 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <Race
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}></Race>
                )
            case 3:
                return(
                    <h1>Third window</h1>
                )
        }

        // return(
        //     <div>
        //         <Name />
        //         <Race />
        //         <Role />
        //         <Level />
        //         <button>Create!</button>
        //     </div>
        // );
    }
}
export default NewCharacterParent;