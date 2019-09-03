/*
    This file contains the main component called App. This component is rendered to the html page. 
    Other components are embedded within this main component.
*/
import React, { Component } from 'react';
import Projects from './Projects';
import Profiles from './SocialProfiles';
import PersonalPic from '../assets/PersonalPic.jpg';
import Title from './Title';
import Jokes from './Jokes'


class App extends Component {

    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState ({displayBio: !this.state.displayBio});
    }
    render() {
        return (
            <div>
                <img src = {PersonalPic} alt = 'social-profile' className = 'profile' />
                <h1> Hello! </h1>
                <p> <i> My name is Ubaid </i> </p>
                <Title />
                <p> <i> I am always looking forward to learn new technologies. </i> </p>
                {
                    // Ternary operator //
                    this.state.displayBio ? (
                        <div>
                            <p> <i> I work in Lahore as an AI and IoT engineer. </i> </p>
                            <p> <i> My curiosity to learn new tools and technology is what keeps me motivated. </i> </p>
                            <p> <i> Besides coding, I like playing table tennis. </i></p>
                            <button onClick = {this.toggleDisplayBio}>Read less</button>
                        </div>
                    ) : (
                        <div> 
                            <button onClick = {this.toggleDisplayBio}> Read more </button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <Profiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;
