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
    
    render(){
        
        return(
            <div>
                <Name />
                <Race />
                <Role />
                <Level />
                <button>Create!</button>
            </div>
        );
    }
}
export default NewCharacterParent;