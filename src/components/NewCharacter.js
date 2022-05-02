import React, {Component} from "react";

class NewCharacter extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
           
            <div>New Characters coming soon</div>
        )
    }
}
export default NewCharacter;