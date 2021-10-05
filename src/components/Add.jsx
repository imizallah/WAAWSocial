import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fabino: {
    position: 'fixed',
  },

  post: {
    bottom: 20,
    right: 23
  },

  chat: {
    bottom: 90,
    right: 23
  },

  friends: {
    bottom: 160,
    right: 23
  }
}));

const Add = ({Icon, iconName, color}) => {
  const classes = useStyles();

  return (
    <Fab className={
      `${classes.fabino}
      ${iconName == 'post' ? classes.post : iconName == 'chat' ? classes.chat :  classes.friends}
      `
    } 
    color={
      color == 'secondary' ? 'secondary' : color == 'primary' ? 'primary' : 'green'
    } 
    aria-label="add">
      <Icon />
    </Fab>
  )
}

export default Add
