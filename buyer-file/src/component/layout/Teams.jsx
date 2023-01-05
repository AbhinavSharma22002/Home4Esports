
import { Link } from "react-router-dom";

const func = (props)=>{
    return (
        <>
         <div className="col-lg-4 col-sm-6 col-12">
            <div className="player-item-2 text-center">
            <Link to ={`/team?id=${props.val._id}`}>
                                    
                <div className="player-inner-2">
                    <div className="player-thumb-2">
                        <img src={`${props.val.image}`} alt='hello' />
                    </div>
                    <div className="player-content-2">
                    <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                        <a href ="#">
                            {props.val.teamName}
                        </a>
                    </ul>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        </>
    );
}
export default func;