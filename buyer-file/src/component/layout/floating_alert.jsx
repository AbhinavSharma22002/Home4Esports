import "./Floating_Alert.css";
import { React, useState } from "react";

const FloatingFunc = () => {

    const [index, setIndex] = useState(0);
    const [active, setActive] = useState(false);
    let Social = [
        {
            IconName: 'icofont-linkedin',
            IconLink: '#',
        },
        {
            IconName: 'icofont-facebook',
            IconLink: '#',
        },      
        {
            IconName: 'icofont-ebuddy',
            IconLink: '#',
        },
        {
            IconName: 'icofont-youtube-play',
            IconLink: '#',
        },
        {
            IconName: ' icofont-instagram',
            IconLink: '#',
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