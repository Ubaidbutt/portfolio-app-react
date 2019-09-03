import React, { Component } from 'react';

const TITLES = [
    'a Software Engineer',
    'a Music Lover',
    'a Enthusiactic Learner',
    'a Motivational Speaker'
]

class Title extends Component {
    state = {titleIndex: 0, fadeIn: true};

    componentDidMount () {
        this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
        console.log (`Title component has mounted!`);

        this.animateTitle();
    }
    
    componentWillUnmount () {
        console.log ('The title component is unmount');
        clearInterval(this.titleInterval);
        clearInterval(this.timeout);
    }

    animateTitle = () => {
        this.titleInterval = setInterval (() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState ({titleIndex, fadeIn: true});
            setTimeout(() => this.setState({fadeIn: false}), 2000);
        }, 4000);

        //console.log (`The title interval is : ${this.titleInterval}`);
    }



    render() {
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'}> I am {title} </p>
        );
    }
}

export default Title;