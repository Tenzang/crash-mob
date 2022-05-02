import React, {Component} from "react";
import axios from 'axios';

import Name from "./Name";
import Race from "./Race";
import Role from "./Role";
import Level from "./Level";

import Scores from './Scores';
import Skills from "./Skills";
import SavingThrows from "./SavingThrows";
import Health from "./Health";


const modifier = score => Math.floor((score - 10) / 2);

class CharacterSheetParent extends Component{
    constructor() {
        super();

        this.state = {
            abilities: { // will update with data from SERVER
                strength: { score: 0, modifier: modifier(11) },
                dexterity: { score: 0, modifier: modifier(14) },
                constitution: { score: 0, modifier: modifier(18) },
                intelligence: { score: 0, modifier: modifier(14) },
                wisdom: { score: 0, modifier: modifier(7) },
                charisma: { score: 0, modifier: modifier(18) }
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
            URL: {character: "http://localhost:3000/characters/3.json" , score: "http://localhost:3000/scores/3.json" },
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
        const fetchData = URL => {
            // data from character table
            axios(URL.character).then(response => {
                const { data } = response;
                const newState = {};
                for (const key in data) {
                    newState[key] = data[key];
                }
                this.setState(newState);
            });
            // data from score table
            axios(URL.score).then(response => {
                console.log(response)
                const { data } = response
                const newAbilities = { abilities: {} }
                for (const key in data) {
                    console.log(data)
                    newAbilities.abilities[key] = { score: data[key], modifier: modifier(data[key]) }
                }
                this.setState(newAbilities);
            });
            // TODO: data from proficiency tables
        }

        fetchData(this.state.URL);
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
            </div>
        );
    }
}
export default CharacterSheetParent;