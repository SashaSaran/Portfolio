import React, { Component } from 'react';

class Jokes extends Component {
    state = { joke : {}};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(responce => console.log('reponse',responce));
    }
    render() {
        <div>
            WORK
        </div>

    }

}

export default Jokes;