import React, { Component } from "react";
import axios from "axios";

class Role extends Component {
    state = {
        classes: []
      }

    componentDidMount() {
        axios.get(`https://www.dnd5eapi.co/api/classes`)
          .then(res => {
            const classes = res.data.results;
            this.setState({ classes });
        })
    }

    render(){
        return(
            <label>Class
                <form>
                    <select>
                        {
                        this.state.classes.map( ( {index, name} ) => {
                            return <option key={index}>{name}</option>})
                        }
                    </select>
                </form>
            </label>
            
        )
    }
};

export default Role;