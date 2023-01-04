import "./Floating_Alert.css";
import { React, useState } from "react";

const FloatingFunc = () => {

    const [index, setIndex] = useState(0);
    const [active, setActive] = useState(false);
    let Social = [
        {
            IconName: 'icofont-linkedin',
            IconLink: 'https://www.linkedin.com/company/crowd-control-esports/mycompany/',
        },
        {
            IconName: 'icofont-facebook',
            IconLink: 'https://www.facebook.com/CrowdControlEsportsFB',
        },      
        {
            IconName: 'icofont-ebuddy',
            IconLink: 'https://discord.com/invite/4fWwCjaFwG',
        },
        {
            IconName: 'icofont-youtube-play',
            IconLink: 'https://www.youtube.com/c/CrowdControlEsports1',
        },
        {
            IconName: ' icofont-instagram',
            IconLink: 'https://www.instagram.com/crowd_control_esports/',
        },
    ]

    setTimeout(() => {
        if (index === 4) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }, 5000);
    return (
        <>
            <a href={`${Social[index].IconLink}`}><i className={`${Social[index].IconName}`}></i></a>
        </>
    );
};

export default FloatingFunc;