// import "./Floating_Alert.css";
import {React,useState} from "react";


const styleCSS = {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position:'fixed',
    bottom: '10px',
    right: '10px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    opacity: '0'
};
const FloatingFunc = ()=>{
    
const [index,setIndex] = useState(0);
const [active,setActive] = useState(false);
let SocialMideaList = [
    {
        IconName: 'icofont-facebook-messenger',
        IconLink: '#',
    },
    {
        IconName: 'icofont-twitter',
        IconLink: '#',
    },
    {
        IconName: 'icofont-vimeo',
        IconLink: '#',
    },
    {
        IconName: 'icofont-skype',
        IconLink: '#',
    },
    {
        IconName: 'icofont-rss-feed',
        IconLink: '#',
    },
];
setTimeout(()=>{
    if(index===4){
        setIndex(0);
    }
    else{
        setIndex(index+1);
    }
},5000);
    return (
        <>
        <div className="floating-alert">
            <a href={`${SocialMideaList[index].IconLink}`} className="fb"><i className={`${SocialMideaList[index].IconName}`}></i></a>
        </div>
        </>
    );
};

export default FloatingFunc;