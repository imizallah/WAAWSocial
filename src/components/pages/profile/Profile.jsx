import React from 'react';
import MainWrapper from '../mainWrapper/MainWrapper';
import { Container, makeStyles } from '@material-ui/core';
import './profile.css';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}))

const Profile = () => {
  const classes = useStyles();

  return (
    <MainWrapper>
      <Container className={classes.container}>
        This the main wrapper
      </Container>
    </MainWrapper>
  )
}

export default Profile;
