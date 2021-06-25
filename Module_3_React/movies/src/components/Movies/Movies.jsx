import React, { Component } from 'react';
import Movie from '../Movie/Movie';
class Movies extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
            </React.Fragment>
        );
    }
}

export default Movies;