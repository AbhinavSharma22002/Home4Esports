

const func = (props)=>{
    return (
        <>
        <div className="col-lg-4 col-sm-6 col-12">
            <div className="player-item">
                <div className="player-inner">
                    <div className="player-thumb">
                        <img src={`${props.val.v.image}`} alt="hello_thumbnail" />
                    </div>
                    <div className="player-content text-center">
                        <div className="player-info-list">
                            <h3 className="mb-0">{props.val.v.teamName}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default func;