import { Fragment,useEffect,useState } from "react";
import PageHeaderTwo from "../component/layout/pageheader";
import { Link } from "react-router-dom";
const playerTitle = "Registered Teams";

const TournamentFunc = (props)=>{

    
    const [Tournament, setTournament] = useState([]);
    const [TeamList,setTeamList] = useState([]);
     function getID(){
        let pair = window.location.search.substring(1).split("=");
        return pair[1];
    };
    useEffect(() => {
            let val = getID();
        const value = async () => {
            let requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: val})
            };
            let response = await fetch(
                `http://localhost:3001/api/tournament/getById`,
                requestOptions
            );
            let data = await response.json();
                let arr = [];
            if (response.status === 200) {
                setTournament(data.tournament);
                for(let i = 0;i<data.tournament.team.length;i++){
                requestOptions={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: data.tournament.team[i]})
                };
                response = await fetch(
                `http://localhost:3001/api/team/getById`,
                requestOptions
            );

            data = await response.json();
            if(response.status ===200){
                console.log(data.teams);
                let v = data.teams;
                arr.push({v});
            }
            else{
                props.showAlert("Something went wrong!!","danger");
            }
                }
                setTeamList(arr);
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
                <PageHeaderTwo title={Tournament.name} curPage={Tournament.name}/>
                <div className="about-team padding-top padding-bottom">
                    <div className="container">

                    </div>
                </div>

                <div className="player-section padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>{playerTitle}</h2>
                        </div>
                        
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center">
                                {
                            (props.isLoggedIn)?(<>
                             <div className="col-12">
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-content gradient-bg-yellow">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><Link to={`/teamform?tourID=${Tournament._id}`}>Create New Team</Link></h4>
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
                        {
                            (TeamList.map((val,i)=>(
                                    <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                        <div className="player-item">
                                            <div className="player-inner">
                                                <div className="player-thumb">
                                                    <img src={`${val.image}`} alt="hello_thumbnail" />
                                                </div>
                                                <div className="player-content text-center">
                                                    <div className="player-info-list">
                                                        <h3 className="mb-0">{val.teamName}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )))
                             
                        }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    );
};
export default TournamentFunc;