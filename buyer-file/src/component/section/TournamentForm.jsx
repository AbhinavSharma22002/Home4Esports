import { Fragment, useState } from "react";
import {useNavigate  } from "react-router-dom";
import PageHeader from "../layout/pageheader";



const TournamentForm = (props)=> {
    const title = "HOST TOURNAMENT";

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [game,setGame] = useState('');
    const [team,setTeam] = useState('');
    const [teamSize,setTeamSize] = useState('');
    const [noOfTeams,setNoOfTeams] = useState('');
    const [startDate,setStartDate] = useState('');
    const [priceMoney,setPriceMoney] = useState('');
    const[image,setImage] = useState('');

    const navigate =useNavigate();
    const addFile = async (e)=>{
        const formData = new FormData();
        formData.append("image",e.target.files[0]);
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token')
                    },
                body : formData                
            };
        const response = await fetch(
                `http://localhost:3001/aws/image/upload`,
                requestOptions
        );
		const data = await response.json();
        setImage(data.val)
    }
    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
            name,description,game,team,teamSize,noOfTeams,startDate,priceMoney
        };
        console.log(data);
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token'),
                    'Content-Type': 'application/json' 
                    },
                body: JSON.stringify(data),
            };
            const response = await fetch(
                `http://localhost:3001/api/products/create`,
                requestOptions
        );
        if(response.status===200){
            props.showAlert("Tournament Host Success!!","success");
            navigate("/");
        }
    }

    return (
        <>
        <Fragment>

            <PageHeader title={'HOST TOURNAMENT '} curPage={'host tournament'} />
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={name} 
                                    onChange={(e)=>{setName(e.target.value);}}
                                    placeholder="Enter Name*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={description} 
                                    onChange={(e)=>{setDescription(e.target.value);}}
                                    placeholder="Enter Description*"
                                />
                            </div>
                            <div className="form-group">
                                <select name=""
                                    id=""
                                    value={game}
                                    onChange={(e)=>{setGame(e.target.value);}}
                                    >
                                         <option>-Select Game-</option>
                                     <option value="pokemon">Pokemon Unite</option>
                                    <option value="dota 2">Dota 2</option>
                                     <option value="rocket-league">Rocket League PC And Mobile</option>
                                    <option value="cs-go">CS GO</option>
                                    <option value="valorant">Valorant</option>
                                    <option value="free-fire">Free Fire Max</option>
                                    <option value="clsah-royale">Clash Royale</option>
                            </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={team} 
                                    onChange={(e)=>{setTeam(e.target.value);}}
                                    placeholder="Enter Team Name*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    value={teamSize} 
                                    onChange={(e)=>{setTeamSize(e.target.value);}}
                                    placeholder="Enter Team Size*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    value={team} 
                                    onChange={(e)=>{setTeamSize(e.target.value);}}
                                    placeholder="Enter Team Size*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    value={noOfTeams} 
                                    onChange={(e)=>{setNoOfTeams(e.target.value);}}
                                    placeholder="Enter The Number Of Teams*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    value={startDate} 
                                    onChange={(e)=>{setStartDate(e.target.value);}}
                                    placeholder="Enter Start Date*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    value={priceMoney} 
                                    onChange={(e)=>{setPriceMoney(e.target.value);}}
                                    placeholder="Enter Price Money*"
                                />
                            </div> 
                            <div className="form-group">
                                <input 
                                    type="file"
                                    name=""
                                    id="image"
                                    onChange={addFile}
                                    placeholder="Please Select Product Image*"
                                />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button" onClick = {handleUpload}><span>HOST TOURNAMENT</span></button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </Fragment>
        </>
    );
}

export default TournamentForm;