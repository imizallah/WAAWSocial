import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Left from '../../Left';
import Navbar from '../../Navbar';
import Right from '../../Right';
import Add from '../../Add';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';

const useStyles = makeStyles(theme => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const MainWrapper = ({children}) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid className={classes.left} item sm={2} xs={2}>
          <Left />
        </Grid>

        <Grid className={classes.center} item sm={7} xs={10}>
          {children}
        </Grid>

        <Grid className={classes.right} item sm={3} >
          <Right />
        </Grid>
      </Grid>
      
      <Add Icon={ForumRoundedIcon} iconName='chat' color='primary' />
      <Add Icon={PeopleOutlineRoundedIcon} iconName='friends' color='secondary' />
    </div>
  )
}

export default MainWrapper;
