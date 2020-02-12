import React, { Component } from 'react';
import Projects from './Projects';
import Socials from './Socials';
import Headshot from '../assets/HeadShot.png'
import Title from './Title'
import Jokes from './Jokes'


class App extends Component {
    state = { displayBio: false};

    toggleDisplayBio = () => {
        this.setState({ displayBio:!this.state.displayBio });
    }
    render(){
        return (

            <div>
                <img src ={Headshot} alt ='profile' className ='headShot' />
                <h1>
                    Hello!
                </h1>
                <p>
                    My name is Sasha.
                </p>
                <Title /> 
                <p>
                    I'm always looking forward to working on meaningful projects.
                </p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in toronto</p>
                            <p>My love tech</p>
                            <p>Tons of hobbies and super cool</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                        
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <Socials />
            </div>

        )

    }

}

export default App;