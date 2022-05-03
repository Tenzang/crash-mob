import React, { Component } from "react";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  Select  from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

class Race extends Component {
    constructor(props){
        super(props);
        this.state = {
        races: []
        }
     }

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    componentDidMount() {
        axios.get(`https://www.dnd5eapi.co/api/races`)
          .then(res => {
            const races = res.data.results;
            this.setState({ races });
        })
    }

    render(){
        return(
            <MuiThemeProvider>
                <Dialog
                open
                fullWidth
                maxWidth='sm'
                >
                <AppBar title="Enter User Details" />
                    <Select
                    placeholder="2"
                    label= "Character Race">
                            {this.state.races.map( ( {index, name} ) => {
                            return <MenuItem value={name}>{name}</MenuItem>})}
                    </Select>
                       
                    <br/>
                    <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                >Continue</Button>
                    
                </Dialog>    
            </MuiThemeProvider>
        )
    }
};

export default Race;