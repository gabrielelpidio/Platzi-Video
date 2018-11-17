import React from 'react'
import Logo from '../../../images/logo.png'
import './related.css'
import Friends from './friends'
import Playlists from './user-playlists';

function Related(props){
    
    return(
        
        <div className="Related">
            <img src={Logo} width={250} alt=""/>
            <h1>
                Tus Playlists
            </h1>
            <div className="Playlists">
            {
                props.playlists.map((item) => {
                    
                    return <Playlists
                    title={item.get('title')}
                    key={item.get('id')}
                    />
                })
            }
            </div>
            <h1>
                Tus Amigos
            </h1>
            <div className="FriendsList">
            {
                props.users.map((item) => {
                    return <Friends
                    name={item.get('name')}
                    picture={item.get('picture')}
                    key={item.get('id')}
                    />
                })
            }
            </div>

        </div>
    )
}
export default Related