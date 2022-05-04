import React, {Component} from "react";
import Abilities from "./Abilities";
import axios from "axios";

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import CharacterSubmit from "./CharacterSubmit";
import Level from "./Level";
import Details from "./Details";
import Languages from "./Languages";
import Equipment from "./Equipment";
import ReviewCharacter from "./ReviewCharacter";
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
        this.createNewCharacter=this.createNewCharacter.bind(this);
        this.getHitDice = this.getHitDice.bind(this);
    
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
    
    createNewCharacter(){
        console.log('this is the state',this.state)
    axios.post('http://localhost:3000/characters',this.state, {withCredentials: true}).then(response=>console.log(response)).catch(error=>{console.log(error)})

    }

    getHitDice(){
        axios.get(`https://www.dnd5eapi.co/api/classes/${this.state.role.toLowerCase()}`).then( response => { 
            const hd = response.data.hit_die
            this.setState({hit_dice: hd})
           
    })
    }

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
                            createNewCharacter={this.createNewCharacter}
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            getHitDice = {this.getHitDice}
                    />
                )
                case 9:
                    return(
                        <ReviewCharacter
                            createNewCharacter={this.createNewCharacter}
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