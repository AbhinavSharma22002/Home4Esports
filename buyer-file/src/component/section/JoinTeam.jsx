import { Fragment,useEffect,useState } from "react";
import PageHeaderTwo from "../layout/pageheader";
import { Link } from "react-router-dom";
import Suggestion from "../layout/Suggestion";
const playerTitle = "Suggested Teams";

const TournamentFunc = (props)=>{

    
    const [Tournament, setTournament] = useState([]);
    const [suggestionList,setSuggestionList] = useState([]);

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
                body: JSON.stringify({id: val,type: "suggestion"})
            };
            fetch(
                `http://localhost:3001/api/tournament/getById`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                setTournament(json.tournament);
                setSuggestionList(json.list);
            })
		}
		value();
	},[]);
    return (
        <>
            <Fragment>
                <PageHeaderTwo title={Tournament.name} curPage={Tournament.name+"/Join Team"}/>
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
                        <div className="section-wrapper">
                        <div className="row g-4">
                        {
                            (props.isLoggedIn && suggestionList.length>0)?(<>
                             {
                                suggestionList.map((val, i) => (
                                    <Suggestion val={val} key={i}/>
                            ))
                            }
                            </>):(<>
                            </>)
                        }
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    );
};
export default TournamentFunc;