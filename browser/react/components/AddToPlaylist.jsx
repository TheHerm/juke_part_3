import React from 'react';

const AddToPlaylist = (props) => {
    return(
        <div>
            <div>
                <h2>Playlist Name</h2>
                <h2>List of Songs</h2>
            </div>
            <form className="form-group" style={{marginTop: '20px'}}>
                <input
                    className="form-control"
                    placeholder="Enter artist name"
                    onChange={props.changeFunc}
                />
            </form>
        </div>
    );
}

export default AddToPlaylist;