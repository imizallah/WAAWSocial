import React, {useContext, useState, useRef} from 'react';
import './share.css';
import {AuthContext} from '../context/AuthContext';
import Avatar from '@material-ui/core/Avatar';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { Cancel, EmojiEmotions, Label, Room } from '@material-ui/icons';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import toast from 'react-hot-toast';
import axios from 'axios';

const Share = () => {
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();

    if (!post) return toast.error('Please type a post');

    const noImage = {};

    if (image) {
      const data = new FormData();
      data.append("postMedia", image);
      data.append('description', post);
      data.append('mediaType', 'image');

      try {
        let postRes = await axios.post('https://api-waawsoc.herokuapp.com/api/v1/post', 
        data, 
        {
          headers: {
            'content-type': 'application/json',
            'access-token': user.token
          }
        });

        if(postRes.data.success) return toast.success(postRes.data.msg);
        window.location.reload();
      }catch(err) {
        if(!err.response.data.success) return toast.error(err.response.data.msg);
      }
    }else{
      noImage.description = post;
      noImage.mediaType = '';

      try {
        let postRes = await axios.post('https://api-waawsoc.herokuapp.com/api/v1/post', 
        noImage, 
        {
          headers: {
            'content-type': 'application/json',
            'access-token': user.token
          }
        });

        if(postRes.data.success) return toast.success(postRes.data.msg);
        window.location.reload();
      }catch(err) {
        if(!err.response.data.success) return toast.error(err.response.data.msg);
      }
    }

  }



  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__wrapper__top">
          <Avatar 
            src={
              user ?
              user.user.avatarSmall
              : ''
            } 
            alt="user"
            className="share__profile__img"
          />

          <input 
            type="text"
            placeholder={
              `What's on your mind ${user ? user.user.username : ''}?`
            }
            className="share__input"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>

        <hr className="shareHr" />
        {
          image && (
            <div className="share__preview__container">
              <img className="share__img__preview" src={URL.createObjectURL(image)} alt="" />
              <Cancel className="share__cancel" onClick={() => setImage(null)} />
            </div>
          )
        }

        <form className="share__bottom" onSubmit={submitForm}>
          <div className="share__options">
            <label htmlFor="media" className="share__option">
              <PermMediaIcon htmlColor="green" className="share__icon" />
              <span className="share__text">Image</span>
              <input 
                style={{ display: 'none' }} 
                type="file"
                id="media"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>

            <div className="share__option">
              <VideoLibraryIcon className="share__icon" htmlColor="red" />
              <span className="share__text">Video</span>
            </div>

            <div className="share__option">
              <Room className="share__icon" htmlColor="blue" />
              <span className="share__text">Location</span>
            </div>

            <div className="share__option">
              <EmojiEmotions className="share__icon" htmlColor="goldenrod" />
              <span className="share__text">Feelings</span>
            </div>
          </div>

          <button className="share__button" type="submit">Post</button>
        </form>

      </div>
    </div>
  )
}

export default Share;
