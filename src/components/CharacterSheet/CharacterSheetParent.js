import React, {Component} from "react";
import axios from 'axios';
import _ from 'lodash';
import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import Level from "./Level";
import Scores from './Scores';
import Skills from "./Skills";
import SavingThrows from "./SavingThrows";
import Health from "./Health";
import { Button } from "@material-ui/core";


const sourceURL = 'http://localhost:3000';

const modifier = score => Math.floor((score - 10) / 2);

class CharacterSheetParent extends Component{
    constructor() {
        super();

        this.state = {
            characterId: "",
            abilities: { // will update with data from SERVER
                strength: { score: 10, modifier: modifier(11) },
                dexterity: { score: 10, modifier: modifier(14) },
                constitution: { score: 10, modifier: modifier(18) },
                intelligence: { score: 10, modifier: modifier(14) },
                wisdom: { score: 10, modifier: modifier(7) },
                charisma: { score: 10, modifier: modifier(18) }
            },
            skills: {
                acrobatics: { proficient: false, ability: 'dexterity' },
                animalHandling: { proficient: false, ability: 'wisdom' },
                arcana: { proficient: false, ability: 'intelligence' },
                athletics: { proficient: false, ability: 'strength' },
                deception: { proficient: false, ability: 'charisma' },
                history: { proficient: false, ability: 'intelligence' },
                insight: { proficient: false, ability: 'wisdom' },
                intimidation: { proficient: false, ability: 'charisma' },
                investigation: { proficient: false, ability: 'intelligence' },
                medicine: { proficient: false, ability: 'wisdom' },
                nature: { proficient: false, ability: 'intelligence' },
                perception: { proficient: false, ability: 'wisdom' },
                performance: { proficient: false, ability: 'charisma' },
                persuasion: { proficient: false, ability: 'charisma' },
                religion: { proficient: false, ability: 'intelligence' },
                sleightOfHand: { proficient: false, ability: 'dexterity' },
                stealth: { proficient: false, ability: 'dexterity' },
                survival: { proficient: false, ability: 'wisdom' },
            },
            proficiencyMod: 2,
            URL: {character: `${sourceURL}/characters/`, score: `${sourceURL}/scores/`, skills: `${sourceURL}/skills/`, abilities: `${sourceURL}/abilities/` },
            name: "???",
            race: "???",
            role: "???",
            level: 0,
            saveProfs: {
                strength: false,
                dexterity: false,
                constitution: false,
                intelligence: false,
                wisdom: false,
                charisma: false
            },
            hitDice: 8
        };

    }


    componentDidMount() {
        let characterID = window.location.href;
        characterID = characterID.slice(-2)
        console.log("making request with characterID = ", characterID);
        this.props.fetchUser('/charactersheet/' + characterID);
        console.log(this.props)
        const fetchData = URL => {
            // data from character table
            axios(URL.character + characterID + ".json").then(response => {
                console.log("character data requested:")
                console.log(response);
                const { data } = response;
                const newState = {};
                for (const key in data) {
                    newState[key] = data[key];
                }
                this.setState(newState);
            });
            // data from score table
            axios(URL.score + characterID + ".json").then(response => {
                console.log("score data requested:")
                console.log(response);
                const { data } = response
                const newAbilities = { abilities: {} }
                for (const key in data) {
                    newAbilities.abilities[key] = { score: data[key], modifier: modifier(data[key]) }
                }
                this.setState(newAbilities);
            });
           // TODO: data from proficiency tables
           // data from skill table
            axios(URL.skills + characterID + ".json").then(response => {
                const{ data } = response
                const newSkills = { skills: {  
                Acrobatics: { proficient: false, ability: 'dexterity' },
                AnimalHandling: { proficient: false, ability: 'wisdom' },
                Arcana: { proficient: false, ability: 'intelligence' },
                Athletics: { proficient: false, ability: 'strength' },
                Deception: { proficient: false, ability: 'charisma' },
                History: { proficient: false, ability: 'intelligence' },
                Insight: { proficient: false, ability: 'wisdom' },
                Intimidation: { proficient: false, ability: 'charisma' },
                Investigation: { proficient: false, ability: 'intelligence' },
                Medicine: { proficient: false, ability: 'wisdom' },
                Nature: { proficient: false, ability: 'intelligence' },
                Perception: { proficient: false, ability: 'wisdom' },
                Performance: { proficient: false, ability: 'charisma' },
                Persuasion: { proficient: false, ability: 'charisma' },
                Religion: { proficient: false, ability: 'intelligence' },
                SleightOfHand: { proficient: false, ability: 'dexterity' },
                Stealth: { proficient: false, ability: 'dexterity' },
                Survival: { proficient: false, ability: 'wisdom' }, } 
            }
                
                data.forEach(skill => {
                    console.log(skill);
                    newSkills.skills[skill].proficient = true} )
                console.log(newSkills);
                this.setState(newSkills);
            })
            
            axios(URL.abilities + characterID + ".json").then(response => {
                const { data } = response 
                console.log("abilities data requested:")
                console.log(data); 
                const newProfs = { saveProfs: {
                    strength: false,
                    dexterity: false,
                    constitution: false,
                    intelligence: false,
                    wisdom: false,
                    charisma: false } 
                } 
                data.forEach(ability => newProfs.saveProfs[ability] = true)
                this.setState(newProfs)                 
            })
            

        
        // when you set state data should look like this : 
        // { abilities: ['Athletics', 'Persuasion', 'Stealth'] }
        }

        fetchData(this.state.URL);
    }
    createNewCharacter(){
        console.log('createnew');
    }

    render(){
        const { abilities, skills, proficiencyMod, name, race, role, level, saveProfs, hitpoints, hitDice } = this.state;
        return(
            <div>
                <Name name={ name } />
                <Race race={ race } />
                <Role role={ role } />
                <Level level={ level } />
                
                <Scores abilities={ abilities } />
                <SavingThrows abilities={ abilities } saveProfs={ saveProfs } proficiency={ proficiencyMod }/>

                <Skills abilities={ abilities } skills={ skills } proficiency={ proficiencyMod } />

                <Health abilities={ abilities } hitpoints={ hitpoints } level={ level } hitDice={ hitDice } />

                    <Button variant="contained" size="small" color="primary">Edit</Button>
                   
            
            </div>
        );
    }
   
}
export default CharacterSheetParent;