import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Post from './Post';
import Share from './Share';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}))

const MainFeed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Share />
      <Post />
      
    </Container>
  )
}

export default MainFeed
