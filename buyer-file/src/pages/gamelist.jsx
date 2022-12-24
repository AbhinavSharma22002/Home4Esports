import { Component, Fragment } from "react";
import PageHeader from "../component/layout/pageheader";
import GameList from "../component/section/gamelist";
import VideoSection from "../component/section/video";

class GameListSection extends Component {
    render() { 
        return (
            <Fragment>
                <PageHeader title={'MOST POPULAR GAME'} curPage={'MATCHE'} />
                <GameList />
                <VideoSection />
            </Fragment>
        );
    }
}
 
export default GameListSection;