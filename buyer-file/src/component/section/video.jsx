import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
const subtitle = "our LATEST VIDEOS";
const title = "Check Our Live Streaming";

const VideoTestimonial = (props)=>{
    const [videoList,setVideoList] = useState([]);
    useEffect(()=>{
        const someFunc = async ()=>{
            let array = [];
                const requestOptions = {
                method: "GET"
            };
            const response = await fetch(
                `http://localhost:3001/api/video/getAll`,
                requestOptions
            )
           
            if(response.status===200){
                const data = await response.json();

                for(let i = 0;i<data.length;i++){
                    array.push({
                        imgUrl: `${data[i].image}`,
                        videoTitle: `${data[i].title}`,
                        videoGenre: `${data[i].genre}`,
                        link: `${data[i].link}`,
                        to: `${data[i]._id}`
                    });
                }
            }
            setVideoList(array);
    };
            someFunc();
    },[]);

    return (<>
        {
            (videoList.length!==0)?(<>
    <div className="video-section padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
        <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="video-top">
                                    <div className="row g-4 justify-content-center">
                                    {videoList.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="video-item">
                                                    <div className="video-inner position-relative">
                                                        <div className="video-thumb position-relative video-overlay">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                            <div className="video-icon">
                                                                <a href={val.link} target="_blank">
                                                                    <i className="icofont-play-~alt-1"></i>
                                                                    <span className="pluse"></span>
                                                                    </a>
                                                                    <div className="video-content text-center p-3">
                                                <Link to="/"><h5 className="video-title">{val.videoTitle}</h5></Link>
                                                <h5 className="product-price"><b>Genre: </b>{val.videoGenre}</h5>
                                                </div>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    ))}
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
        </>
    );
}

export default VideoTestimonial;