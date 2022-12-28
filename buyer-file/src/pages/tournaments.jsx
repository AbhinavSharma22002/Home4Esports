import { Fragment,useEffect,useState } from "react";
import PageHeader from "../component/layout/pageheader";
import { Link } from "react-router-dom";
const TournamentFunc = (props)=>{

    
    const [TournamentsList, setTournamentsList] = useState([]);
    useEffect(() => {
        const value = async () => {
            const requestOptions = {
                method: "GET"
            };
            const response = await fetch(
                `http://localhost:3001/api/tournament/getAll`,
                requestOptions
            );
            const data = await response.json();
            if (response.status === 200) {
                setTournamentsList(data.tournament);
            }
            else {
                props.showAlert("Something went wrong!!","danger");
            }
		}
		value();
	});

    return (
        <>
            <Fragment>
            <PageHeader title={'Tournaments'} curPage={'TOURNAMENTS'} />
                <section className="match-section padding-top padding-bottom" style= {{backgroundImage: "url(../assets/images/match/bg.jpg)"}}>
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row mb-5">

                        {
                            (props.isLoggedIn)?(<>
                             <div className="col-12">
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-content gradient-bg-yellow">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><Link to='/TournamentForm'>Create New Tournament</Link></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>):(<>
                            </>)
                        }

                            {TournamentsList.map((val, i) => (
                                <div className="col-12" key={i}>
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info">{val.noOfTeams} <span className="fw-bold">{val.noOfTeams * val.teamSize}</span></p>
                                            </div>
                                            
                                            <div className="match-content gradient-bg-yellow">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-2">
                                                        <div className="match-game-team">
                                                            <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                                <li className="match-team-thumb">
                                                                    <a href={`/team?id=${val._id}`}><img src={val.image} alt='tournament_THUMBNAIL' /></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><a href="/team-single">{val.name}</a></h4>
                                                            <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                <span className="match-date">{val.startDate} </span>
                                                            </p>
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
            </Fragment>
        </>
    );
};
export default TournamentFunc;