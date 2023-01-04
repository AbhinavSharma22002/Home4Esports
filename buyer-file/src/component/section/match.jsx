import { Component,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./socialmedia";

const title = "All matches schedule";
const subtitle = "Anywhere, Anytime";
const btnText = "Browse All Matches";
const Upcomingtitle = "Upcoming Matches";
const Previoutitle = "Previous Matches";
const btntextTwo=  "Watch Now";

const MatchSection = (props)=>{

    const [MatchInfoListOne,setMatchInfoListOne] = useState([]);
    const [MatchInfoListTwo,setMatchInfoListTwo] = useState([]);
    const [MatchInfoListThree,setMatchInfoListThree] = useState([]);
    useEffect(() => {
        const value1 = async () => {
            let requestOptions = {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            };
            fetch(
                `http://localhost:3001/api/match/previousMatches`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                setMatchInfoListThree(json.matches);
            })
		}
        const value2 = async () => {
            let requestOptions = {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            };
            fetch(
                `http://localhost:3001/api/match/todayMatches`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                setMatchInfoListOne(json.matches);
            })
		}
        const value3 = async () => {
            let requestOptions = {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            };
            fetch(
                `http://localhost:3001/api/match/futureMatches`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                setMatchInfoListTwo(json.matches);
            })
		}

		value1();
        value2();
        value3();

        
	},[]);
    return (
        <>
        <section className="match-section padding-top padding-bottom" style= {{backgroundImage: "url(/assets/images/match/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row mb-5">
                            {MatchInfoListOne.map((val, i) => (
                                <div className="col-12" key={i}>
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                            </div>
                                            <div className="match-content gradient-bg-yellow">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-2">
                                                        <div className="match-game-team">
                                                            <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                                <li className="match-team-thumb">
                                                                    <a href="/team-single"><img src={val.imageone} alt={val.alt1} /></a>
                                                                </li>
                                                                <li className="text-center">
                                                                    <img className="w-75 w-md-100" src="assets/images/match/vs.png" alt="vs" />
                                                                </li>
                                                                <li className="match-team-thumb">
                                                                    <a href="/team-single"><img src={val.imagetwo} alt={val.alt2} /></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><a href="/team-single">{val.title}</a></h4>
                                                            <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                <span className="match-date">{val.matchdate} </span>
                                                                <span className="match-time">{val.matchtime}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-3">
                                                        <div className="match-game-social">
                                                            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
                                                            
                                                                <li>
                                                                    <a href="#" className="default-button reverse-effect"><span>{btntextTwo} <i className="icofont-play-alt-1"></i></span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{Upcomingtitle}</h3>
                                    <div className="row g-3 MatchStyleOne">
                                        {MatchInfoListTwo.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center"><img src={val.imageone} alt={val.alt1} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single"><img src={val.imagetwo} alt={val.alt2} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><Link to="/team-single">{val.title}</Link>
                                                                        </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchdate} </span>
                                                                            <span className="match-time">{val.matchtime}</span>
                                                                        </p>
                                                                         <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            
                                                                            
                                                                            <a href="#" className="default-button reverse-effect"><span>{btntextTwo} <i className="icofont-play-alt-1"></i></span></a>
                                                                
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{Previoutitle}</h3>
                                    <div className="row g-3 MatchStyleTwo">
                                        {MatchInfoListThree.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center">
                                                                            <img src={val.imageone} alt={val.alt1} />
                                                                        </Link>
                                                                    </div>

                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single">
                                                                            <img src={val.imagetwo} alt={val.alt2} />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        {/*<h4><Link to="/team-single">{val.result}</Link></h4>*/}
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchdate} </span>
                                                                            <span className="match-time">{val.matchtime}</span>
                                                                        </p>
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            
                                                                            
                                                                            <a href="#" className="default-button reverse-effect"><span>{btntextTwo} <i className="icofont-play-alt-1"></i></span></a>
                                                                
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="button-wrapper text-center mt-5">
                            <Link to="/game-list" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


 
export default MatchSection;