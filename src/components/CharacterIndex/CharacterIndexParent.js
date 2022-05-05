import React, {Component} from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
const sourceURL = 'http://localhost:3000/characters.json';

class CharacterIndexParent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
        }
        this.handleDelete = this.handleDelete.bind(this);
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
        axios.delete(`http://localhost:3000/characters/${id}`, {withCredentials:true} ).then((response)=> {
            console.log(response);
            const newCharacters = this.state.characters.filter(character=> character.id !== id);
            this.setState({ characters: newCharacters })
        })
   }

    render(){
        const indexStyle = {marginTop: '10%'}
        return(
            <div style={indexStyle}>
                <CharacterCard handleDelete={this.handleDelete} characters={ this.state.characters } />
            </div>
        )
    }
}
export default CharacterIndexParent;