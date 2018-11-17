import React, {Component} from 'react';
import MediaContainer from '../containers/media'
import './playlist.css'
import { Play, Pause, FullScreen, Volume} from '../../icons/components/controls'

function Playlist (props){
        return (
            <div className="playlist">
                {
                     props.playlist.map((mediaId) => {
                        return <MediaContainer
                        openModal = {props.handleOpenModal} 
                        id={mediaId} 
                        key={mediaId}
                        />
                    }
                 )
                }
             </div>
        );

}

export default Playlist
