import React, { Component } from "react";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Languages extends Component {
    constructor(props){
        super(props);

        this.state = {
            race: props.values.race,
            language_desc: '',
            language_options: [],
            languages: []
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
            // console.log(res.data.language_desc)
            const language_desc = res.data.language_desc;
            this.setState({ language_desc });

            const language_options = res.data.language_options;
            this.setState({ language_options });

            const languages = res.data.languages.name;
            this.setState({ languages })
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
                        <AppBar title="Character Languages" />
                        <h2>Character Languages</h2>
                        <p>{this.state.language_desc}</p>
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
        );
    }
}

export default Languages;