import {useState,useEffect } from "react";
import { Link } from "react-router-dom";


const btnText ="Watch Now";

const BannerSection = (props)=>{
    const [bannerList,setBannerList] = useState([]);
    useEffect(()=>{
        const someFunc = async ()=>{
            let array = [];
                const requestOptions = {
                method: "GET"
            };
            const response = await fetch(
                `http://localhost:3001/api/display/getAll`,
                requestOptions
            )
           
            if(response.status===200){
                let data = await response.json();
                data= data.display;

                for(let i = 0;i<data.length;i++){
                    array.push({
                        title: `${data[i].title}`,
                        tournamentLogo: `${data[i].tournamentLogo}`,
                        team1logo: `${data[i].team1Logo}`,
                        team2logo: `${data[i].team2Logo}`,
                        videoLink: `${data[i].videoLink}`,
                        to: `${data[i]._id}` 
                    });
                }
            }
            setBannerList(array);
    };
            someFunc();
    },[]);
        return (<>
        {
            (bannerList.length!==0)?(<>
        <div className="banner-section" style={{ backgroundImage: "url(/assets/images/banner/bg.jpg)"}}>
                                {bannerList.map((val, i) => (
                                    <div className="container" key={i}>
                                    <div >
                                        <div className="banner-content text-center">
                                            <h4 className="fw-normal theme-color mb-4">{`${val.title}`}</h4>
                                            
                                            <img src={`${val.tournamentLogo}`} alt="banner text thumb" className="mb-4" />
                                            <br />
                                            <a href={`${val.videoLink}`} className="default-button reverse-effect" target="_blank"><span>{btnText} <i className="icofont-play-alt-1"></i></span> </a>
                                        </div>
                                        <div className="banner-thumb d-flex flex-wrap justify-content-center justify-content-between align-items-center align-items-lg-end">
                                            <div className="banner-thumb-img ml-xl-50-none">
                                                <Link to="/team-single"><img src={`${val.team1logo}`} alt="banner-thumb" /></Link>
                                            </div>
                                            <div className="banner-thumb-vs">
                                                <img src="assets/images/banner/vs.png" alt="banner-thumb" />
                                            </div>
                                            <div className="banner-thumb-img mr-xl-50-none">
                                                <Link to="/team-single"><img src={`${val.team2logo}`} alt="banner-thumb" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                 </div>
                            
            </>):(<>
            </>)
        }
        </>
    );
}
            
        

export default BannerSection;