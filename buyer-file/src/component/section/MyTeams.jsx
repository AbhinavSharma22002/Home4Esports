
import { Fragment,useEffect,useState } from "react";
import PageHeader from "../layout/pageheader";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import * as XLSX from "xlsx";

const MyTournament = (props)=>{
    const [myTeams,setMyTeamsList] = useState([]);
    const [isOpen,setIsOpen] = useState(false);
    const [currId,setCurrId] = useState('');

    const [request,setRequest] = useState([]);
    const [accept,setAccept] = useState(false);

const openModal = (msg,e)=>{
        e.preventDefault();
        setCurrId(msg);
        let requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json',
                "auth-token":localStorage.getItem('token') },
                body: JSON.stringify({teamId: msg})
        };
            fetch(
                `http://localhost:3001/api/team/getTeamById`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                json = json.requests;
                setRequest(json);
            })
    setIsOpen(true);
}
const closeModal = ()=>{
    setIsOpen(false);
    setAccept(false);
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
                `http://localhost:3001/api/team/getMyTeams`,
                requestOptions
            );
            const data = await response.json();
            if (response.status === 200) {
                console.log(data.teams);
                setMyTeamsList(data.teams);
            }
            else {
                props.showAlert("Something went wrong!!","danger");
            }
		}
		value();
    },[]);
      
    const handleDelete = async (e)=>{
        e.preventDefault();
        const data = {
            requestId:currId,
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
                `http://localhost:3001/api/team/deleteMember`,
                requestOptions
        );
        if(response.status===200){
            props.showAlert("Team Deleted Success!!","success");
            window.location.reload(true);
        }
    }  
    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
            requestId:currId,
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
                `http://localhost:3001/api/team/newMember`,
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
                <PageHeader title={'MY TEAMS'} curPage={'MYTEAM'} />
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
                                    </li><li className="nav-item " role="presentation">
                                     Creation Date
                                    </li>
                                    <li className="nav-item" role="presentation">
                                     Current Team Size
                                    </li>
                                    <li className="nav-item mx-5" role="presentation">
                                     Request
                                    </li>
                                </ul>
                                {
                                    myTeams.length!==0?(
                                        <>
                                    <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {myTeams.map((val, i) => (
                                                    <tr key={i}>
                                                        <td>{i+1}</td>
                                                        <td><b>{val.teamName}</b></td>
                                                        <td>{getDate(val.date)}</td>
                                                        <td>{val.teamMembers.length}</td>
                                                        <td className="open-team-modal" onClick={(event)=> openModal(val._id,event)} style={{cursor: "Pointer"}}><u>Show Request</u></td>
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
                   <p style={{color: 'black'}}>Request for Joining Teams</p>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{color: 'black'}}>
                            <table className="table">
                                            <tbody>
                                            <tr>
                                                        <td>Index</td>
                                                        <td>Tag</td>
                                                        <td>Team Name</td>
                                                        <td>Current Team Size</td>
                                                        <td>Team Tier</td>                                            
                                            </tr>
                                                {request.map((val, i) => (
                                                    <tr key={i}>
                                                        <td>{i+1}</td>
                                                        <td><b>{val.tag}</b></td>
                                                        <td>{val.teamName}</td>
                                                        <td>{val.teamMembers.length}</td>
                                                        <td>{val.tier}</td>
                                                        <td><input type="checkbox" id="topping" onClick={handleUpload(val._id)}/>Accept</td>
                                                        <td><input type="checkbox" id="topping" onClick={handleDelete(val._id)}/>Reject</td>
                                                    </tr>
                                        ))}
                                    </tbody>
                                </table>
               
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={closeModal}>Close</Button>
                </Modal.Footer>
                </Modal>
            </Fragment>
        </>
    );

};
export default MyTournament;