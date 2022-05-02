import React, { Component} from 'react'
import axios from 'axios'
import { Button, Grid, Paper, Avatar, TextField, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from "react-router-dom";

const sessionsURL = "http://localhost:3000/sessions"
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            loginErrors: '',
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
            password,
        } = this.state;
        
        event.preventDefault();

        axios.post(sessionsURL,{
            user:{
                email: email,
                password: password
            }
        },
        { withCredentials: true }
        ).then((response) => {
            if (response.data.logged_in){
            console.log(response.data)
            this.props.handleSuccessfulAuth('/', response.data);
            }
        }).catch(error=>{
            console.log('login error', error)
        });
    }

    componentDidMount(){
        this.props.fetchUser('/auth/login');
    }

  render() {
    const paperStyle = {padding :20, height: 500, width:340, margin: '20px auto'}
    const avatarStyle = {backgroundColor:'#3DDC97'}
    const btnstyle = {margin:'20px 0'}
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                            <h2>Sign In</h2>
                        </Grid>
                        <Grid align='center'>
                            <TextField label='Email' name='email' value={this.state.email} placeholder="Enter Email" fullWidth onChange={this.handleChange} required></TextField>
                            <TextField label='Password' name='password' value={this.state.password} placeholder="Enter Password" type="password" fullWidth onChange={this.handleChange} required></TextField>       
                            <Button variant='contained' color="primary" style={btnstyle} type='submit' fullWidth>Login</Button>
                        </Grid>
                    </form>
                    <Typography> Do you have an account? <br></br>
                        <Link to='/auth/registration'>
                            Create Account
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
  }
}
