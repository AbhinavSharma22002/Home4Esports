import { Component, Fragment } from "react";
import discord from '../../assets/images/footer/icons/discord.png'
import youtube from '../../assets/images/footer/icons/youtube.png'
import insta from '../../assets/images/footer/icons/insta.png'

class SocialMedia extends Component {
    render() { 
        return (
            <Fragment>
                <li>
                    <a href="#" target="_blank"><img src={discord} alt="discord" /></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src={youtube} alt="youtube" /></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src={insta}alt="twitch" /></a>
                </li>
            </Fragment>
        );
    }
}
 
export default SocialMedia;