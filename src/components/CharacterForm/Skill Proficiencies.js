import React, { Component } from "react";
import axios from "axios";

class SkillProficiencies extends Component {
    state = {
        skill_proficiencies: []
      }

    componentDidMount() {
        axios.get(`https://www.dnd5eapi.co/api/races`)
          .then(res => {
            const skillProficiencies = res.data.results;
            this.setState({ skillProficiencies });
        })
    }

    render(){
         return(
             <div>
                 
             </div>
        //     <label>Skill Proficiencies
        //         <form>
        //             <select>
        //                 {
        //                 this.state.skill_proficiencies.map( ( {index, name} ) => {
        //                     return <option key={index}>{name}</option>})
        //                 }
        //             </select>
        //         </form>
        //     </label>
            
         )
    }
};

export default SkillProficiencies;