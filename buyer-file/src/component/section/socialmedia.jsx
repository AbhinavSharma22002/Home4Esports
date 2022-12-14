import { Component, Fragment } from "react";


class SocialMedia extends Component {
    render() { 
        return (
            <Fragment>
                <li>
                    <a href="#"><img src="assets/images/match/social-1.png" alt="vimeo" /></a>
                </li>
                <li>
                    <a href="#"><img src="assets/images/match/social-2.png" alt="youtube" /></a>
                </li>
                <li>
                    <a href="#"><img src="assets/images/match/social-3.png" alt="twitch" /></a>
                </li>
            </Fragment>
        );
    }
}
 
export default SocialMedia;