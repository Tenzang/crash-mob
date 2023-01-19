import React, { Component } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./indexstyle.css";

const sourceURL = process.env.REACT_APP_SOURCE_URL;

class CharacterIndexParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser("/characters");

    // Fetch Characters
    axios(sourceURL + "characters.json", { withCredentials: true }).then(
      (response) => {
        const characters = response.data;
        this.setState({ characters: characters });
      }
    );
  }

  handleDelete(id) {
    axios
      .delete(sourceURL + "characters/" + String(id), { withCredentials: true })
      .then((response) => {
        console.log(response);
        const newCharacters = this.state.characters.filter(
          (character) => character.id !== id
        );
        this.setState({ characters: newCharacters });
      });
  }

  render() {
    const indexStyle = { marginTop: "10%" };
    return (
      <>
        {this.state.characters.length > 0 ? (
          <div style={indexStyle}>
            <CharacterCard
              handleDelete={this.handleDelete}
              characters={this.state.characters}
            />
          </div>
        ) : (
          <h1>Hey N00b. Create your first character!</h1>
        )}
      </>
    );
  }
}
export default CharacterIndexParent;
