import React, { Component } from 'react';

const TITLE = [
    'A Software Developer',
    'A Ryerson Alumni',
    'An Avid Traveller',
    'A Fanatical Learner'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};

    componentDidMount() {
        this.timeOut = setTimeout(()=> this.setState({ fadeIn: false}), 2000);

        this.animateTitles();
    }
    
    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeOut);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1)%TITLE.length;
            this.setState({titleIndex});
            this.setState({ fadeIn: true });
            this.timeOut = setTimeout(()=> this.setState({ fadeIn: false}), 2000);
        }, 4000);
    }

    render() {
        const {fadeIn ,titleIndex} = this.state;
        const title = TITLE[titleIndex];
        

        return(
            <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'} > I Am {title}</p>
        )
    }
}

export default Title;