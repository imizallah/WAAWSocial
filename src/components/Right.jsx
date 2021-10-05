import { 
  Container, 
  makeStyles, 
  Typography, 
  Avatar } from '@material-ui/core'
import React from 'react'
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0
  } 
}))

const Right = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography>
        Online Friends
      </Typography>

      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </Container>
  )
}

export default Right
