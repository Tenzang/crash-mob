import React, { Component } from "react";

class Name extends Component {
    render(){
        return(
            <label>Name
                <input type="text" required placeholder="Name"/>
            </label>
        )
    }
};

export default Name;