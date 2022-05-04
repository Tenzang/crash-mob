import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

import CharacterCard from './CharacterCard';

const sourceURL = 'http://localhost:3000/characters.json';

class CharacterIndexParent extends Component{
    constructor() {
        super();

        this.state = {
            characters: [],
        }
    }
        
    componentDidMount() {
        this.props.fetchUser();

        // Fetch Characters
        axios(sourceURL, {withCredentials:true}).then(response => {
            const characters = response.data;
            this.setState({ characters: characters });
        });
    }

   handleDelete(id){
        axios.delete(`http://localhost:3000/characters/${id}.json`).then((response)=>console.log(response))
   }

    render(){
        return(
           
            <div>
                <CharacterCard characters={ this.state.characters } />
            </div>
        )
    }
}
export default CharacterIndexParent;