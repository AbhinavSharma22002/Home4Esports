import { Fragment,useEffect,useState } from "react";
import PageHeaderTwo from "../component/layout/pageheader";
import { Link } from "react-router-dom";
import Teams from "../component/layout/Teams";
const playerTitle = "Registered Teams";

const TournamentFunc = (props)=>{

    
    const [Tournament, setTournament] = useState([]);
    const [TeamList,setTeamList] = useState([]);
     function getID(){
        let pair = window.location.search.substring(1).split("=");
        return pair[1];
    }
    useEffect(() => {
            let val = getID();
        const value = async () => {
            let requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: val})
            };
            fetch(
                `http://localhost:3001/api/tournament/getById`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                setTournament(json.tournament);
            })
		}
		value();
        
	},[]);
     useEffect(() => {
        const teamValue = async(teamARr)=>{
            let arr = [];
            for(let i = 0;i<teamARr.length;i++){
                let requestOptions={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: teamARr[i].id})
                };
                const response = await fetch(
                `http://localhost:3001/api/team/getById`,
                requestOptions
                );
                let data = await response.json();
                if(response.status===200){
                    let v = data.teams;
                    arr.push({v});
                }
            }
            setTeamList(arr);
        }
        teamValue(Tournament.team);
	},[Tournament]);
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
                                <Teams val={val} key={i} Tournament={Tournament}/>
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