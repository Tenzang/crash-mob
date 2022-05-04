import React, {Component} from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import CharacterCard from './CharacterCard';
const sourceURL = 'http://localhost:3000/characters.json';

class CharacterIndexParent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
        }
        this.getCharacterid = this.getCharacterid.bind(this)
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
       console.log(this.props)
        axios.delete(`http://localhost:3000/characters/${id}`, {withCredentials:true} ).then((response)=>console.log(response))
        const newCharacters = this.state.characters.filter(character=> character.id != id)
        this.setState({ characters: newCharacters })
   }

   getCharacterid(id){
       this.props.inheritCharacterId(id)
   }

    render(){
        const indexStyle = {marginTop: '10%'}
        return(
            <div style={indexStyle}>
                <CharacterCard  getCharacterid = {this.getCharacterid} handleDelete={this.handleDelete} characters={ this.state.characters } />
            </div>
        )
    }
}
export default CharacterIndexParent;