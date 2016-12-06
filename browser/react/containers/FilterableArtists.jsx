import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';
import AUDIO from '../audio';

import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import FilterInput from '../components/FilterInput.jsx'
import Artists from '../components/Artists'

import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

export default class FilterableArtists extends Component {
    constructor(props){
        super(props);
        this.changeFunc = this.changeFunc.bind(this);
        this.state={
            currentInput: ''
        }
    }

    changeFunc(e){
        this.setState({currentInput: e.target.value})
    }

    filterArtists(){

        return this.props.artists.filter((artist) => 
            artist.name.slice(0, this.state.currentInput.length).toLowerCase()  === 
                this.state.currentInput.toLowerCase()
        );
    }

    render(){
        return(
            <div className="filtered-artists">
                <FilterInput changeFunc={this.changeFunc} />
                <div className="artist-list">
                    <Artists artists={this.filterArtists()}/>
                </div>
            </div>
        )
    }
}