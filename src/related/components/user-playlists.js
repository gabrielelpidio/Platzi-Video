import React from 'react'
import './user-playlists.css'

const Playlists = (props) => (
  <div className="PlaylistTitle">
    <a href="">
      {props.title}
    </a>
  </div>
)

export default Playlists