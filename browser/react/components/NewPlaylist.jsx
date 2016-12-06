import React from 'react';
import { Link } from 'react-router';

const NewPlaylist = (props) => {
    return(
        <div>
            <h2>New Playlist</h2>
            {
                props.playlistName.length > 15 ?
                    <div className="alert-danger" style={{borderRadius: "5px"}}>
                        <h3>NAME IS TOO LONG</h3>
                    </div>
                    :
                    null
            }
            <form onSubmit={function(e){props.addPlaylist(e); props.selectPlaylist(e)}} className="form-group" style={{marginTop: '20px'}}>
                <input
                    type="text"
                    name="newList"
                    className="form-control"
                    placeholder="New Playlist"
                    onChange={props.playlistNameUpdate}
                    style={{marginBottom: '10px'}}
                />
                {
                    props.playlistName.length > 15 || props.playlistName.length < 1 ?
                    <button type="submit" className="btn-default" disabled >Create Playlist</button>
                    :
                    <button type="submit" className="btn-success" >Create Playlist</button>

                }
            </form>
        </div>
    );
}

export default NewPlaylist;
