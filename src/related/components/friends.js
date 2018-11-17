import React from 'react'
import PictureContainer from './picture-container';
import FriendsName from './friends-name';
import './friends.css'


const Friends = (props) => (
  <div className="Friends">
    <PictureContainer>
      <img src={props.picture} width={50}/>
    </PictureContainer>
    <FriendsName name={props.name}/>
  </div>
)

export default Friends
