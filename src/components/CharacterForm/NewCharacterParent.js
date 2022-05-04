import React, {Component} from "react";
import Abilities from "./Abilities";

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import CharacterSubmit from "./CharacterSubmit";
import Level from "./Level";
import Details from "./Details";
import Languages from "./Languages";
import Equipment from "./Equipment";
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
            name: 'Poobert',
            race: 'Human',
            role: `Fighter`,
            level: '1',
            abilities: [ 
                10,
                10,
                10,
                10,
                10,
                10
            ],
            languages: [],
            personality: '',
            ideals: '',
            bonds: '',
            flaws: ''
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
    
    setScores = (event) => {
        const {name, value} = event.target;
        console.log(name);
        let newAbilities = [...this.state.abilities];
        newAbilities[name] = value;
        this.setState( { abilities: newAbilities } );
    };
    
    render(){
        const { step } = this.state;
        const { name, race, role, level, abilities, languages, personality, ideals, bonds, flaws } = this.state;
        const values = { name, race, role, level, abilities, languages, personality, ideals, bonds, flaws };

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
                    
                    <Abilities
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        setScores={this.setScores}
                        abilities={values.abilities}
                    />
                );
            case 5:
                return(
                    <CharacterSubmit character={this.state} />
                );
            case 6:
                return(
                <Details
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 7:
                return(
                    <Languages
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 8:
                    return(
                        <Equipment

                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                    />
                )

        }
    };
}
export default NewCharacterParent;