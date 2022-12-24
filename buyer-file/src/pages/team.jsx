import { Component, Fragment } from "react";
import PageHeader from "../component/layout/pageheader";
import PlayerSectionTwo from "../component/section/playertwo";
import CtaSection from "../component/section/cta";

class TeamPage extends Component {
    render() { 
        return (
            <Fragment>
                <PageHeader title={'OUR TEAM'} curPage={'Team'} />
                <PlayerSectionTwo />
                <CtaSection imgUrl={'assets/images/cta/02.png'} />
            </Fragment>
        );
    }
}
 
export default TeamPage;