import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Left from '../../Left';
import MainFeed from '../../MainFeed';
import Navbar from '../../Navbar';
import Right from '../../Right';
import Add from '../../Add';
import AddIcon from '@material-ui/icons/Add';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';

const useStyles = makeStyles(theme => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const Timeline = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid className={classes.left} item sm={2} xs={2}>
          <Left />
        </Grid>

        <Grid className={classes.center} item sm={7} xs={10}>
          <MainFeed />
        </Grid>

        <Grid className={classes.right} item sm={3} >
          <Right />
        </Grid>
      </Grid>
      
      <Add Icon={AddIcon} iconName='post' color='secondary' />
      <Add Icon={ForumRoundedIcon} iconName='chat' color='primary' />
      <Add Icon={PeopleOutlineRoundedIcon} iconName='friends' color='warning' />
    </div>
  )
}

export default Timeline;
