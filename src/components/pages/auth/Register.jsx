import React, {useRef} from 'react';
import axios from 'axios';
import './register.css';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '100%',
    },
  },

  btn1: {
    backgroundColor: 'rgb(13, 136, 136)',
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    maxWidth: '30%',
    padding: '10px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'rgb(13, 136, 136)',
      color: '#fff',
    }
  }

}));

const Register = () => {
  const classes = useStyles();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const gender = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.current.value) return toast.error('Username is required');
    if (!email.current.value) return toast.error('Email address is required');
    if (!password.current.value) return toast.error('Password is required');
    if (!gender.current.value) return toast.error('Gender is required');

    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      gender: gender.current.value
    } 

    try {
      let res = await axios.post('http://localhost:7000/api/v1/auth/register', user);
      if(res.data.success) toast.success(res.data.msg);
      history.push('/verify-user');
    }catch(err) { 
      if(!err.response.data.success) return toast.error(err.response.data.msg);
    }

  }

  return (
    <div className="register">
      <div className="holder">
        <h3>User Signup</h3>
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
          <TextField 
            type="text" 
            id="outlined-basic" 
            label="Username" 
            variant="outlined" 
            inputRef={username}
          />

          <TextField 
            type="email"
            id="outlined-basic" 
            label="Email address" 
            variant="outlined" 
            inputRef={email}
          />

          <TextField 
            type="password"
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            inputRef={password}
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              inputRef={gender}
              label="Gender"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" className={classes.btn1} variant="contained">
            Signup
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register;
