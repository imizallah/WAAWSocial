import React, {useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent,
  CardActions, 
  Collapse, 
  Avatar, 
  IconButton, 
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Comment } from '@material-ui/icons';
import { format } from 'timeago.js';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4)
  },
  media: {
    // height: 250,
    // paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function RecipeReviewCard({data}) {
  const {user} = useContext(AuthContext);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(data.likes.length);
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    setUserLiked(data.likes.includes(user.user._id));
  }, [user.user._id, data.likes]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likePost = async () => {
    try {
      let likeRes = await axios.put(`http://localhost:7000/api/v1/post/${data._id}/like`, {},
      {
        headers: {
          'content-type': 'application/json',
          'access-token': user.token
        }
      });

      if (likeRes.data.success) {
        setLikes(userLiked ? likes - 1 : likes + 1);
        setUserLiked(!userLiked)
      }
    }catch (e) {
      console.log(e)
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar 
          className={classes.avatar} 
          src={
            data.user ?
            data.user.avatar
            :
            ''
          }
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.user.username}
        subheader={format(data.createdAt)}
      />
      {
        data.mediaType === 'image' ? (
          <CardMedia
            className={classes.media}
            src={
              data.media
            }
            title="Post"
            component="img"
          />
        ) : 
        data.mediaType === 'video' ?
          <CardMedia
            className={classes.media}
            src={
              data.media
            }
            title="Post"
            component="video"
            controls
          /> : null
      }

      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={likePost} aria-label="add to favorites">
          <FavoriteIcon color={userLiked ? "secondary" : ""} />
            {
              likes > 0 &&
              <span style={{fontSize: "14px"}}>{likes}</span>
            }
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}