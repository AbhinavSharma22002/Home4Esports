import { Component, Fragment } from "react";
import discord from '../../assets/images/footer/icons/discord.png'
import youtube from '../../assets/images/footer/icons/youtube.png'
import insta from '../../assets/images/footer/icons/insta.png'

class SocialMedia extends Component {
    render() { 
        return (
            <Fragment>
                <li>
                    <a href="https://discord.com/invite/4fWwCjaFwG" target="_blank"><img src={discord} alt="discord" /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/c/CrowdControlEsports1" target="_blank"><img src={youtube} alt="youtube" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/crowd_control_esports/" target="_blank"><img src={insta}alt="twitch" /></a>
                </li>
            </Fragment>
        );
    }
}
 
export default SocialMedia;