import React, {Component} from "react";
import axios from "axios";

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import Abilities from "./Abilities";
import Level from "./Level";
import SkillProficiencies from "./Skill Proficiencies";
import Details from "./Details";
import Languages from "./Languages";
import Equipment from "./Equipment";
import Portrait from "./Portrait";
import ReviewCharacter from "./ReviewCharacter";


// import Skills from "./Skills";
// import SavingThrows from "./SavingThrows";

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
            flaws: '',
            image: '',
            skills: []

        }
        this.createNewCharacter = this.createNewCharacter.bind(this);
        this.getHitDice = this.getHitDice.bind(this);
        this.knownLanguage=this.knownLanguage.bind(this);
        this.knownSkills=this.knownSkills.bind(this);
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

    // Helper functions for known languages
    knownLanguage = (languages) => {
        this.setState({languages: languages})
    }

    // Helper function to join known languages with chosen languages
    handleLanguageChange = input => event => {
        console.log('changing languages')
        console.log(event)
        this.setState({languages: [...this.state.languages, event.target.value]})
    };

    // Helper function for known skills
    knownSkills = (skills) => {
        this.setState({skills: skills})
    }
    // Helper function to join known skills with chosen starting skills
    handleSkillChange = input => event => {
        console.log('changing Skills')
        console.log(event)
        this.setState({skills: [...this.state.skills, event.target.value]})
    };

    
    setScores = (event) => {
        const {name, value} = event.target;
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
       });
    }

    render(){
        const { step } = this.state;
        const { name, race, role, level, abilities, languages, personality, ideals, bonds, flaws, portrait, skills } = this.state;
        const values = { name, race, role, level, abilities, languages, personality, ideals, bonds, flaws, portrait, skills };

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
                        handleLanguageChange={this.handleLanguageChange}
                        knownLanguage={this.knownLanguage}
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
                            getHitDice = {this.getHitDice}
                    />
                )
            case 9:
                return(
                    <Portrait
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 10:
                return(
                    <SkillProficiencies
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleSkillChange={this.handleSkillChange}
                        knownSkills={this.knownSkills}
                        values={values}
                    />
                )       
            case 11:
                return(
                    <ReviewCharacter
                        createNewCharacter={this.createNewCharacter}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        portrait={values.portrait}
                    />
                )
            default:
                return(
                <div>
                    <p>something went wrong...</p>
                </div>)
        }
    };
}
export default NewCharacterParent;