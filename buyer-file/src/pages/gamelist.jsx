import { Component, Fragment } from "react";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import PageHeader from "../component/layout/pageheader";
import GameList from "../component/section/gamelist";
import VideoSection from "../component/section/video";

class GameListSection extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'MOST POPULAR GAME'} curPage={'MATCHE'} />
                <GameList />
                <VideoSection />
                <Footer />
            </Fragment>
        );
    }
}
 
export default GameListSection;