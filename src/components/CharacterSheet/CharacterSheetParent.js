import React, {Component} from "react";

import Scores from './Scores';
import Skills from "./Skills";

const modifier = score => Math.floor((score - 10) / 2);

class CharacterSheetParent extends Component{
    constructor() {
        super();

        this.state = {
            abilities: { // will update with data from SERVER
                strength: { score: 11, modifier: modifier(11) },
                dexterity: { score: 14, modifier: modifier(14) },
                constitution: { score: 18, modifier: modifier(18) },
                intelligence: { score: 14, modifier: modifier(14) },
                wisdom: { score: 7, modifier: modifier(7) },
                charisma: { score: 18, modifier: modifier(18) }
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
            proficiencyMod: 2
        };

    }

    render(){
        return(
            <div>
                <Scores abilities={ this.state.abilities } />
                <Skills abilities={ this.state.abilities } skills={ this.state.skills } proficiency={ this.state.proficiencyMod } />
            </div>
        );
    }
}
export default CharacterSheetParent;