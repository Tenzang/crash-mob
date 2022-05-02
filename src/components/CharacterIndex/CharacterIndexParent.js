import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios'

import CharacterCard from './CharacterCard';

const sourceURL = 'http://localhost:3000';

class CharacterIndexParent extends Component{
    constructor() {
        super();

        this.state = {
            characters: [],
        }
    }
        
    componentDidMount(){
        this.props.fetchUser();

        // Fetch Characters
        axios(sourceURL + '/characters.json').then(response => {
            const characters = response.data;
            this.setState(this.state.characters = characters);
        });
    }

    render(){
        return(
           
            <div>
                <nav><Link to="/charactersheet">Character Sheet </Link></nav>
                
                <CharacterCard characters={ this.state.characters } />
            </div>
        )
    }
}
export default CharacterIndexParent;