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
      race_proficiencies: [],
      race_proficiencies_options: [],
      class_proficiency_options: [],
      skills: []
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
        // Getting proficiencies choices from API (Classes)
          const class_proficiency_options = res.data.proficiency_choices[0].from
          console.log(class_proficiency_options);
          this.setState({ class_proficiency_options });
      })
          // Getting starting proficiencies from API (Race)
          axios.get('https://www.dnd5eapi.co/api/races/' + this.state.race.toLowerCase())
          .then(res => {      
            const race_proficiencies = res.data.starting_proficiencies.map( ( {name} ) => name );
            this.setState({ race_proficiencies });
            this.props.knownSkills(race_proficiencies);
            const race_proficiencies_options = res.data.starting_proficiency_options.from;
            this.setState({ race_proficiencies_options });
      })
  }

  render() {
    const { values, handleSkillChange } = this.props;
    return (   
    <MuiThemeProvider>
      <>
              <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                    >
              <AppBar title="Skill Proficiency" />
              <h1>Skills</h1>
              <br/>
              <h3>Starting Proficiencies</h3>
              <p>{this.state.race_proficiencies.map( ( name ) => {
                    return <MenuItem value={name}>{name}</MenuItem>})}</p>
              <h3>Race Proficiencies Choices</h3>
              <Select
                  placeholder="Choose your Character's Race Proficiency"
                  label= "Race Proficiency"
                  onChange={handleSkillChange('skills')}
                  defaultValue={values.race_proficiencies_options}
                  margin="normal"
                  fullWidth
              >
                      {this.state.race_proficiencies_options.map( ( {name} ) => {
                      return <MenuItem value={name}>{name}</MenuItem>})}
              </Select>
              <h3>Class Proficiencies</h3>
              <Select
                  placeholder="Choose your Character's Class Proficiency 1"
                  label= "Class Proficiency 1"
                  onChange={handleSkillChange('skills')}
                  defaultValue={values.class_proficiency_options}
                  margin="normal"
                  fullWidth
              >
                      {this.state.class_proficiency_options.map( ( {name} ) => {
                      return <MenuItem value={name}>{name}</MenuItem>})}
              </Select>
              <Select
                  placeholder="Choose your Character's Class Proficiency 1"
                  label= "Class Proficiency 2"
                  onChange={handleSkillChange('skills')}
                  defaultValue={values.class_proficiency_options}
                  margin="normal"
                  fullWidth
              >
                      {this.state.class_proficiency_options.map( ( {name} ) => {
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
