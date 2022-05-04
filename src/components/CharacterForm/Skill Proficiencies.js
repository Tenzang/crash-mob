import React, { Component } from "react";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

class SkillProficiencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      race: props.values.race,
      role: props.values.role,
      starting_proficiencies: [],
      proficiency_choices: []
      //proficiency_choices_1: [],
      //proficiency_choices_2: []
    };
  }

  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  componentDidMount() {
      axios.get('https://www.dnd5eapi.co/api/classes/' + this.state.role.toLowerCase())
      .then(res => {
     // console.log(res)     
          const proficiency_choices = res.data.proficiency_choices[0].from
          console.log(proficiency_choices);
          this.setState({ proficiency_choices });

          //const proficiency_choices = res.data.proficiency_choices[0].from
          //this.setState({ proficiency_choices });
      })
          axios.get('https://www.dnd5eapi.co/api/races/' + this.state.race.toLowerCase())
          .then(res => {
          //console.log(res)         
            const starting_proficiencies = res.data.starting_proficiencies;
            this.setState({ starting_proficiencies });
            console.log(starting_proficiencies);
      })
  }

  render() {
    const { values, handleChange } = this.props;
    return (   
    <MuiThemeProvider>
      <>
              <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                    >
              <AppBar title="Skill Proficiency" />
              <h2>Skill Proficiencies</h2>
              <Select
                  placeholder="Choose your Character's Proficiency 1"
                  label= "Skill Proficiency 1"
                  onChange={handleChange('proficiency_choices')}
                  defaultValue={values.proficiency_choices}
                  margin="normal"
                  fullWidth
              >
                      {this.state.proficiency_choices.map( ( {name} ) => {
                      return <MenuItem value={name}>{name}</MenuItem>})}
              </Select>
              <Select
                  placeholder="Choose your Character's Proficiency 2"
                  label= "Skill Proficiency 2"
                  onChange={handleChange('proficiency_choices')}
                  defaultValue={values.proficiency_choices}
                  margin="normal"
                  fullWidth
              >
                      {this.state.proficiency_choices.map( ( {name} ) => {
                      return <MenuItem value={name}>{name}</MenuItem>})}
              </Select>
              <br/>

              <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
              >Back</Button>

              <Button
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
              >Continue</Button>
              
            </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
};
    
export default SkillProficiencies;
