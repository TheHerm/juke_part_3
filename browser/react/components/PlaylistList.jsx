import React from 'react';
import { Link } from 'react-router';


const PlaylistList = (props) => {
    return(
        <div id="playlistList">
            {
                props.playlists.map( playlist => 
                    <div key={playlist.id}>
                        <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
                    </div>
                )  
            }
            <hr/>
        </div>
    );
}

export default PlaylistList;