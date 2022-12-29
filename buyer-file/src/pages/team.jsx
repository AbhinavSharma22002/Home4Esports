import { Fragment,useEffect,useState } from "react";
import PageHeader from "../component/layout/pageheader";
import CtaSection from "../component/section/cta";
import { Link } from "react-router-dom";
import SocialMedia from "../component/section/socialmedia";

const TeamPage = (props)=>{
const [team,setTeam]=useState({});
const [members,setMembers] = useState([]);

const subtitle = "Our Team Players";
const title = "Meet Our Players";
function getID(){
    let pair = window.location.search.substring(1).split("=");
    return pair[1];
}

useEffect(()=>{
    const value = async ()=>{
            let val = getID();

            let requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: val})
            };
            
            const response = await fetch(
            `http://localhost:3001/api/team/getByIdAndUpdate`,
            requestOptions
            );
            let data = await response.json();
            if(response.status===200){
                setTeam(data.item);
            }
    };
    value();
},[]);
useEffect(()=>{
    const value = async ()=>{
        let arr = [];
        for(let i =0;i<team.teamMembers.length;i++){
            let requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: team.teamMembers[i].id})
            };
            
            const response = await fetch(
            `http://localhost:3001/api/user/getById`,
            requestOptions
            );
            let data = await response.json();
            if(response.status===200){
                let v = data.item;
                
                arr.push( {
                    bgImgUrl: 'assets/images/team/home-2/1.jpg',
                    imgUrl: v.image,
                    imgAlt: 'Player Thumb',
                    title: v.fname+" "+v.lname,
                });
            }
        }
        setMembers(arr);            
    };
    value();
},[team]);
console.log(team);
console.log(members);
return (
    <>
            <Fragment>
                <PageHeader title={`${team.teamName}`} curPage={'Team'} />
                <section className="player-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            {members.map((val, i) => (
                                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                    <div className="player-item-2 text-center" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                        <div className="player-inner-2">
                                            <div className="player-thumb-2">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="player-content-2">
                                                <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                    <SocialMedia />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
                <CtaSection imgUrl={'assets/images/cta/02.png'} />
            </Fragment>
     
    </>
);
};
 
export default TeamPage;