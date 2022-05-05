import React, {Component} from "react";
import axios from 'axios';
import Name from "./Name";
import Stats from "./Stats";
import Scores from './Scores';
import Skills from "./Skills";
import SavingThrows from "./SavingThrows";
import Languages from "./Languages"
import Health from "./Health";
import Equipment from './Equipment'
import Bonds from './Bonds'
import Flaws from './Flaws'
import Ideals from './Ideals'
import Speed from './Speed'
import TempHp from './TempHp'
import HitDice from "./HitDice";
import DeathThrows from './DeathThrows'
import { Button, Grid, Paper, Card } from "@material-ui/core";
import { grid } from "@mui/system";


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
        const { abilities, skills, proficiencyMod, name, race, role, level, saveProfs, hitpoints, hitDice, hit_dice, dSaveSucc, dSaveFail, speed, languages, inspiration, xp, equipment, tempHP, ideals, bonds, flaws, image  } = this.state;
        const headerStyle = {display: "grid", gridTemplateColumns:"20% 80%", paddingTop: '20px'}
        const headerInfo ={ gridTemplateRows:"50% 50%" }
        const sheetStyle = {display: "grid", gridTemplateRows:"27% 73%", padding :20, maxHeight: '1060px', width:'50%', margin: '10% auto',}
        const paperStyle= {display: "grid", gridTemplateColumns: "0.5fr 0.8fr 0.8fr 0.8fr", gridGap: '1%', padding:'20px'}
        const tempDiceThrows = {display: 'grid', gridTemplateColumns:"33% 33% 33%"}
        const speedHealth ={display: 'grid', gridTemplateColumns:"50% 50%"}
        const imageStyle = { height: '100%', borderRadius:'2em'}
        const charInfo = {display: "grid", gridTemplateColumns: "40% 60%"}
        const smallData = {display: 'grid', gridTemplateColumns: '40% 60%', paddingTop:'5%'}

        return(
            <div style={sheetStyle}>
                <Paper style={headerStyle}>
                    <Card align="center">
                        <img style={imageStyle} src={image}/>
                    </Card>
                    <Card style={headerInfo}>
                        <div style={charInfo}>
                            <div>
                                <Name name={ name } />
                            </div>
                            <div>
                                <Stats race={ race } role={ role } level={level} xp={xp} />
                            </div>
                        </div>
                        <div style={smallData}>
                            <div align= 'center' style={speedHealth}>
                                <Speed speed={speed}/>
                                <Health abilities={ abilities } hitpoints={ hitpoints } level={ level } hitDice={ hitDice } />
                            </div>
                            <div align="center" style={tempDiceThrows}>
                                <TempHp tempHP= {tempHP}/>
                                <HitDice hitDice= {hit_dice}/>
                                <DeathThrows dSaveSucc= {dSaveSucc} dSaveFail={dSaveFail}/>
                            </div>   
                        </div>
                    </Card>
                </Paper>
                <Paper style={paperStyle} >
                    <Card>
                        <Scores abilities={ abilities } />
                    </Card>
                    <Card>
                        <Skills abilities={ abilities } skills={ skills } proficiency={ proficiencyMod } />
                    </Card>
                    <Card>
                        <SavingThrows abilities={ abilities } saveProfs={ saveProfs } proficiency={ proficiencyMod }/>
                        <Equipment equipment={ equipment }/>
                        <Languages languages={languages}/>
                    </Card>
                    <Card>
                        <Ideals ideals={ideals}/>
                        <Bonds bonds={bonds}/>
                        <Flaws flaws={flaws}/>
                    </Card>
                </Paper>
            </div>
        );
    }
   
}
export default CharacterSheetParent;