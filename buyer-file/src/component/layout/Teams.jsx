
import { Link } from "react-router-dom";

const func = (props)=>{
    return (
        <>
        <div className="col-lg-4 col-sm-6 col-12">
            <div className="player-item">
            <Link to ={`/team?id=${props.val._id}`}>
                <div className="player-inner">
                    <div className="player-thumb">
                        <img src={`${props.val.image}`} alt="hello_thumbnail" />
                    </div>
                    <div className="player-content text-center">
                        <div className="player-info-list">
                            
                            <h3 className="mb-0">{props.val.teamName}</h3>
                            
                        </div>
                    </div>
                </div>
            </Link>
            </div>
        </div>
        </>
    );
}
export default func;