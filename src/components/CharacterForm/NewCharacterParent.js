import React, {Component} from "react";

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import SkillProficiencies from "./Skill Proficiencies";
import Details from "./Details";
import Languages from "./Languages";
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
            role: '',
            languages: [],
            personality: '',
            ideals: '',
            bonds: '',
            flaws: '',
            skills: []

        }

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

    
    render(){
        const { step } = this.state;
        const { name, race, role, languages, personality, ideals, bonds, flaws, skills } = this.state;
        const values = { name, race, role, languages, personality, ideals, bonds, flaws, skills };

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
                    <Languages
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleLanguageChange={this.handleLanguageChange}
                        knownLanguage={this.knownLanguage}
                        values={values}
                    />
                );
            case 5:
                return(
                    <Details
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 6:
                return(
                    <SkillProficiencies
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleSkillChange={this.handleSkillChange}
                        knownSkills={this.knownSkills}
                        values={values}
                    />
                );
            case 7:
                return(
                    <h1>End of form</h1>
                );
        }
    }
}
export default NewCharacterParent;