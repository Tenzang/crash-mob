import React, { Component } from "react";
import axios from "axios";

class Race extends Component {
    state = {
        races: []
      }

    componentDidMount() {
        axios.get(`https://www.dnd5eapi.co/api/races`)
          .then(res => {
            const races = res.data.results;
            this.setState({ races });
        })
    }

    render(){
        return(
            <label>Race
                <form>
                    <select>
                        {
                        this.state.races.map( ( {index, name} ) => {
                            return <option key={index}>{name}</option>})
                        }
                    </select>
                </form>
            </label>
            
        )
    }
};

export default Race;