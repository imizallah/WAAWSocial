import { Container, makeStyles, Typography, alpha, IconButton } from '@material-ui/core'
import { Home } from '@material-ui/icons';
import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AppsIcon from '@material-ui/icons/Apps';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles(theme => ({
  whitener: {
    color: 'white'
  },

  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    position: 'sticky',
    top: 0
  },

  linkItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer'
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.15)
    }
  },

  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: '18px'
    }
  },

  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  }
}))

const Left = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.linkItem}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>

      <div className={classes.linkItem}>
        <PeopleAltIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>

      <div className={classes.linkItem}>
        <ListAltIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>

      <div className={classes.linkItem}>
        <PermMediaIcon className={classes.icon} />
        <Typography className={classes.text}>Images</Typography>
      </div>

      <div className={classes.linkItem}>
        <VideoLibraryIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>

      <div className={classes.linkItem}>
        <AppsIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>

      <div className={classes.linkItem}>
        <CollectionsBookmarkIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>

      <div className={classes.linkItem}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>

      <div className={classes.linkItem}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>

      <div className={classes.linkItem}>
        <PowerSettingsNewIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  )
}

export default Left
