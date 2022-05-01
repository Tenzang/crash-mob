import React, { Component } from 'react'
import axios from 'axios'
import { Button, Grid, Paper, Avatar, TextField, Typography, Link} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';

export default class extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        const{
            email,
            username,
            password,
            password_confirmation
        } = this.state;
        
        event.preventDefault();

        axios.post("http://localhost:3000/registrations",{
            user:{
                email: email,
                username: username,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
        ).then((response) => {
            if (response.data.status==="created"){
            console.log(response.data)
            this.props.handleSuccessfulAuth('/', response.data);
            }
        }).catch(error=>{
            console.log('registration error', error)
        });
    }

    componentDidMount(){
        this.props.fetchUser();
    }

  render() {
        const paperStyle = {padding :20, height: 500, width:340, margin: '20px auto'}
        const avatarStyle = {backgroundColor:'#3DDC97'}
        const btnstyle = {margin:'20px 0'}
    return (
        <div>
             <form onSubmit={this.handleSubmit}>
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><CreateIcon/></Avatar>
                    <h2>Create an Account</h2>
                </Grid>
                <TextField label='Email' name='email' value={this.state.email} placeholder="Enter Email" fullWidth onChange={this.handleChange} required></TextField>
                <TextField label='Username' name='username' value={this.state.username} placeholder="Username" fullWidth onChange={this.handleChange} required></TextField>
                <TextField label='Password' name='password' value={this.state.password} placeholder="Enter Password" type="password" fullWidth onChange={this.handleChange} required></TextField>
                <TextField label='Password_Confirmation' name='password_confirmation' value={this.state.password_confirmation} placeholder="Confirm Password" type="password" fullWidth onChange={this.handleChange} required></TextField>              
                <Button variant='contained' color="primary" style={btnstyle} type='submit' fullWidth>Sign-UP</Button>
                <Typography> Already have an account? <br></br>
                    <Link href="/auth/login" onClick={()=>this.props.navRegistration}>
                        {/* NOT WORKING , OR REDIRECTING TO SIGN UP HOW FIX????????????? */}
                        Login
                    </Link>
                </Typography>
            </Paper>
            </Grid>
            </form>
        </div>
    )
  }
}
