import React, { Component } from "react";

class Level extends Component {
    render(){
        return(
            <label> Level
                <input type="number" required min="1" max="20" placeholder="1" />
            </label>
        )
    }
};

export default Level;