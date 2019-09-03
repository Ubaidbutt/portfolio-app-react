import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const Profile = props => {
    const {link, image} = props.profile;
    return (
        <span>
            <a href = {link} target = "_blank">
            <img src = {image} alt = 'profile' style = {{ width: 35, height: 35, margin: 10}} />
            </a>
        </span>
    )
}

const Profiles = () => {
    return (
        <div>
            <h2> Social Links </h2>
            <div>
                {
                    SOCIAL_PROFILES.map (SocProf => {
                        return (
                            <Profile key = {SocProf.id} profile = {SocProf} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profiles;