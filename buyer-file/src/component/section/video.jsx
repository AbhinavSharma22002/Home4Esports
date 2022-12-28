import { Component,useState,useEffect } from "react";
const subtitle = "OUR LATEST VIDEOS";
const title = "check Our Live Streaming";


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
        <div className="video-section padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
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
                                    <div className="col-lg-6 col-12" key={i}>
                                        <div className="video-item">
                                            <div className="video-inner position-relative">
                                                <div className="video-thumb position-relative video-overlay">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    <div className="video-icon align-item-center">
                                                        <a href={val.videoLink} target="_blank">
                                                            <i className="icofont-play-alt-1"></i>
                                                            <span className="pluse"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-content abs-video-content">
                                                    <a href={val.link}  target="_blank">{val.videoTitle} <i className="icofont-play-alt-1"></i></a>
                                                    <h3>{val.videoGenre}</h3>
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