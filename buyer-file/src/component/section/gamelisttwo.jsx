import { Component, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./socialmedia";


const GameListTwo = () => {

    const [items, setItems] = useState([]);
    const[todayMatches,setTodayMatches] = useState([]);
    const[futureMatches,setFutureMatches] = useState([]);

    useEffect(()=>{
        const someFunc = async ()=>{
            let array = [];
                const requestOptions = {
                method: "GET"
            };
            const response = await fetch(
                `http://localhost:3001/api/match/todayMatches`,
                requestOptions
            )
            const data = await response.json();
            setTodayMatches(data.matches);
    };
            someFunc();
            filterItem('match-one');

                

                const someFunc2 = async ()=>{
                    let array = [];
                        const requestOptions = {
                        method: "GET"
                    };
                    const response = await fetch(
                        `http://localhost:3001/api/match/futureMatches`,
                        requestOptions
                    )   
                    const data = await response.json();
                    setFutureMatches(data.matches);
            };
                    someFunc2();
    },[]);


    
    const filterItem = (section) => {

        if(section ==="match-one"){
            setItems(todayMatches);
        }else{
            setItems(futureMatches);
        }
    }

    function handleSection(section) {
        let allArrays = todayMatches.concat(futureMatches);
            setItems(allArrays);
    }
    return (
        <section className="match-section padding-top padding-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <ul className="match-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">  
                        <li onClick={() => filterItem('match-one') }>Today's matches</li>
                        <li onClick={() => filterItem('match-two')  }>Upcoming matches</li>
                        <li onClick={() =>  handleSection('today') }>All matches</li>
                    </ul>
                    <div className="row mb-5">
                            {items.map((val, i) => (
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
                                                                    <a href={`${val.link}`} className="default-button reverse-effect"><span>{val.btntextTwo} <i className="icofont-play-alt-1"></i></span></a>
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
                </div>
            </div>
        </section>
    );
}
 
export default GameListTwo;

