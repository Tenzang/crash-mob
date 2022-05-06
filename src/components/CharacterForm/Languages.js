import React, { Component } from "react";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

class Languages extends Component {
    constructor(props){
        super(props);

        this.state = {
            race: props.values.race,
            language_desc: '',
            language_options: [],
            languages: [],
            language_choice: ''
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
        axios.get('https://www.dnd5eapi.co/api/races/' + this.state.race.toLowerCase())
        .then(res => {
            // Get language description from API
            const language_desc = res.data.language_desc;
            this.setState({ language_desc });

            // Get known languages from API
            const languages = res.data.languages.map( ( {name} ) => name);
            this.setState({ languages })
            this.props.knownLanguage(languages);

            // Get extra language choices from API (if applicable)
            if(res.data.hasOwnProperty('language_options')){
                const language_options = res.data.language_options.from;
                this.setState({ language_options });
            }

        })
    }

    render() {
        const { values, handleLanguageChange } = this.props;
        return (
            <Dialog
                open
                fullWidth
                maxWidth='sm'
            >
                <AppBar title="Character Languages" />
                <h2 class="headings">Character Languages ({this.state.race})</h2>
                <p>{this.state.language_desc}</p>
                <br/>
                <h3>Known Languages</h3>
                <p>{this.state.languages.map( ( language ) => {
                        return <MenuItem value={language}>{language}</MenuItem>})}</p>
                { this.state.language_options.length > 0 ? (
                    <h3>Extra Language</h3> ) : (<p></p>)
                }
                { this.state.language_options.length > 0 ? (
                    <Select
                        placeholder="Extra Language (Race)"
                        label= "Extra Language (Race)"
                        onChange={handleLanguageChange('languages')}
                        defaultValue={values.language_options}
                        margin="normal"
                        fullWidth
                    >
                            {this.state.language_options.map( ( {name}, index ) => {
                            return <MenuItem key={index} value={name}>{name}</MenuItem>})}
                    </Select>
                ) : (<p></p>)
                }
                
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                >Continue</Button>
                <br/>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                >Back</Button>
                <br/>
                <Button onClick={ () =>  window.location.href='/characters' }>Exit</Button>

            </Dialog>
        );
    }
}

export default Languages;