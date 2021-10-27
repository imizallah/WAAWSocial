import React, {useContext, useState, useEffect} from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Post from './Post';
import Share from './Share';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';


const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}))

const MainFeed = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  const getPosts = async () => {
    let res = await axios.get("http://localhost:7000/api/v1/post", {
      headers: {
        'content-type': 'application/json',
        'access-token': user.token
      }
    });

    setPosts(res.data.allPosts);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <Container className={classes.container}>
      <Share />
      {
        posts.map(post => (
          <Post key={post._id} data={post} />
        ))
      }
    </Container>
  )
}

export default MainFeed
