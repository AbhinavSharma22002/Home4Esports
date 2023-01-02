
import { Fragment,useEffect,useState } from "react";
import PageHeader from "../layout/pageheader";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const MyTournament = (props)=>{
    const [myTournaments,setMyTournamentsList] = useState([]);
    const [isOpen,setIsOpen] = useState(false);
    const [currId,setCurrId] = useState('');

    
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [game,setGame] = useState('');
    const [teamSize,setTeamSize] = useState('');
    const [noOfTeams,setNoOfTeams] = useState('');
    const [startDate,setStartDate] = useState('');
    const [priceMoney,setPriceMoney] = useState('');

const openModal = (msg,e)=>{
        e.preventDefault();
        setCurrId(msg);
        let requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: msg})
        };
            fetch(
                `http://localhost:3001/api/tournament/getById`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                json = json.tournament;
                setName(json.name);
                setDescription(json.description);
                setGame(json.game);
                setTeamSize(json.teamSize);
                setNoOfTeams(json.noOfTeams);
                setStartDate(json.startDate);
                setPriceMoney(json.priceMoney);
            })
    setIsOpen(true);
}

const closeModal = ()=>{
    setIsOpen(false);
    setCurrId('');
    setName('');
    setDescription('');
    setGame('');
    setTeamSize('');
    setNoOfTeams('');
    setStartDate('');
    setPriceMoney('');
}
const handleDelete= async ()=>{
    const data = {
        id:currId,
        type:'deLete',
        body: {}
    };
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token'),
                    'Content-Type': 'application/json' 
                    },
                body: JSON.stringify(data),
            };
            const response = await fetch(
                `http://localhost:3001/api/tournament/getByIdAndUpdate`,
                requestOptions
        );
        if(response.status===200){
            props.showAlert("Tournament Deleted!!","success");
            window.location.reload(true);
        }
}
    
    useEffect(()=>{
        const value = async () => {
            const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token')
                    }
            };
            const response = await fetch(
                `http://localhost:3001/api/tournament/getMyTournaments`,
                requestOptions
            );
            const data = await response.json();
            if (response.status === 200) {
                setMyTournamentsList(data.tournaments);
            }
            else {
                props.showAlert("Something went wrong!!","danger");
            }
		}
		value();
    },[]);
      
    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
        id:currId,
        type:[
            "name","description","game","teamSize","noOfTeams","startDate","priceMoney"
        ],
        body: [
            name,description,game,teamSize,noOfTeams,startDate,priceMoney
        ]
    };
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token'),
                    'Content-Type': 'application/json' 
                    },
                body: JSON.stringify(data),
            };
            const response = await fetch(
                `http://localhost:3001/api/tournament/getByIdAndUpdate`,
                requestOptions
        );
        if(response.status===200){
            props.showAlert("Tournament Update Success!!","success");
            window.location.reload(true);
        }
    }   
    const getDate = (startDate)=>{
         let date = new Date(startDate);
        let year = date.toLocaleString("default", { year: "numeric" });
        let month = date.toLocaleString("default", { month: "2-digit" });
        let day = date.toLocaleString("default", { day: "2-digit" });
        var formattedDate = year + "-" + month + "-" + day;
        return formattedDate;
    }

    return (
        <>
        <Fragment>
                <PageHeader title={'MY TOURNAMENTS'} curPage={'MyTournament'} />
                <div className="achievement-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="achievement-area">
                                <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                                    <li className="nav-item mx-5" role="presentation">
                                     Index
                                    </li>
                                    <li className="nav-item " role="presentation">
                                     Name
                                    </li>
                                    <li className="nav-item mx-5" role="presentation">
                                     Start Date
                                    </li>
                                    <li className="nav-item" role="presentation">
                                     Game
                                    </li>
                                    <li className="nav-item mx-5" role="presentation">
                                     Edit
                                    </li>
                                </ul>
                                {
                                    myTournaments.length!==0?(
                                        <>
                                    <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {myTournaments.map((val, i) => (
                                                    <tr key={i}>
                                                        <td>{i+1}</td>
                                                        <td><b>{val.name}</b></td>
                                                        <td>{getDate(val.startDate)}</td>
                                                        <td>{val.game}</td>
                                                        <td className="open-modal" onClick={(event)=> openModal(val._id,event)} style={{cursor: "Pointer"}}><u>Edit</u></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                        </>
                                    ):(
                                        <>
                                        <h3>Nothing available</h3>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={isOpen} onHide={closeModal} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   <p style={{color: 'black'}}>Edit Tournament</p>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{color: 'black'}}>
                <form className="account-form">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={name} 
                                    onChange={(e)=>{setName(e.target.value);}}
                                    placeholder="Enter Name*"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={description} 
                                    onChange={(e)=>{setDescription(e.target.value);}}
                                    placeholder="Enter Description*"
                                />
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
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    value={teamSize} 
                                    onChange={(e)=>{setTeamSize(e.target.value);}}
                                    placeholder="Enter Team Size*"
                                />
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    value={noOfTeams} 
                                    onChange={(e)=>{setNoOfTeams(e.target.value);}}
                                    placeholder="Enter The Number Of Teams*"
                                />
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    value={startDate} 
                                    onChange={(e)=>{setStartDate(e.target.value);}}
                                    placeholder="Enter Start Date*"
                                />
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    value={priceMoney} 
                                    onChange={(e)=>{setPriceMoney(e.target.value);}}
                                    placeholder="Enter Price Money*"
                                />
                        </form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={handleUpload}>Update</Button>
                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={closeModal}>Close</Button>
                </Modal.Footer>
                </Modal>
            </Fragment>
        </>
    );

};
export default MyTournament;