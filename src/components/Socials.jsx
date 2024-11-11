import React, {useContext} from 'react';
import {ImFacebook, ImInstagram, ImTwitter, ImPinterest, ImYoutube} from 'react-icons/im'
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return <div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href="http://www.facebook.com" target='_blank'></a><ImFacebook/></li>
      <li><a href="http://www.instagram.com" target='_blank'></a><ImInstagram/></li>
      <li><a href="http://www.twitter.com" target='_blank'></a><ImTwitter/></li>
      <li><a href="http://www.pinterest.com" target='_blank'></a><ImPinterest/></li>
      <li><a href="http://www.youtube.com" target='_blank'></a><ImYoutube/></li>
    </ul>
  </div>;
};

export default Socials;