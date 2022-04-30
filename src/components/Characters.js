import React, {Component} from "react";

import { Routes, Route, Link } from "react-router-dom";

class Characters extends Component{
    render(){
        return(
           
            <div>
                <nav><Link to="/charactersheet">Character Sheet </Link></nav>
                
                Characters coming soon
            </div>
        )
    }
}
export default Characters;