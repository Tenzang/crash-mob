import React, {Component} from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios'

const CHARACTER_URL = 'http://localhost:3000/characters'
class Characters extends Component{
    constructor(){
        super()
        this.state={}
    }
    

    componentDidMount(){
        this.props.fetchUser('/characters');
    }

    fetchCharacters(){
        axios(CHARACTER_URL).then((response))
    }

    render(){
        return(
           
            <div>
                <nav><Link to="/charactersheet">Character Sheet </Link></nav>

            </div>
        )
    }
}
export default Characters;