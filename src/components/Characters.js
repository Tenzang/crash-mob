import React, {Component} from "react";

import { Routes, Route, Link } from "react-router-dom";
import CHaracterSheet from "./ChracterSheet";

class Characters extends Component{
    render(){
        return(
           
            <div>
                <nav><Link to="/charactersheet">Character Sheet </Link></nav>
                <Routes>
                    <Route path="/charactersheet" element={<><CHaracterSheet /></>}/>
                </Routes>
                
                Characters coming soon
            </div>
        )
    }
}
export default Characters;