import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

import initialState from '../initialState';
import AUDIO from '../audio';

import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import AddToPlaylist from '../components/AddToPlaylist.jsx';
import NewPlaylist from '../components/NewPlaylist.jsx';

import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

export default class Playlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPlaylist: {},
            newPlaylist: ""
        }
        this.playlistNameUpdate = this.playlistNameUpdate.bind(this);
        this.selectPlaylist = this.selectPlaylist.bind(this);
    }

    selectPlaylist(e){
        e.preventDefault();
        var selectedPlaylist = e.target.value
        return this.setState({ selectedPlaylist })
        .then(state => hashHistory.push(`/api/playlist/`)

    }

    componentWillUpdate(){
        let playlistId = this.props.routeParams.playlistId || null;
        if(playlistId){
            this.selectPlaylist(this.props.playlists.find(playlist => playlist.id === playlistId))
        }
    }

    playlistNameUpdate(e){
        this.setState({ newPlaylist: e.target.value })
    }

    render(){
        return(
            <div>
                {
                    this.props.routeParams.playlistId ?
                    <AddToPlaylist selectedPlaylist={this.selectPlaylist}/>
                    :
                    <NewPlaylist 
                        playlistNameUpdate={this.playlistNameUpdate} 
                        playlistName={this.state.newPlaylist}
                        addPlaylist={this.props.addPlaylist}
                        selectPlaylist={this.selectPlaylist}/>
                }
            </div>
        );
    }
}