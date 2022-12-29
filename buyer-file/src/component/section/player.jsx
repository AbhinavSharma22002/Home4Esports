import { Fragment,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const subtitle = "Our Teams";
const title = "Meet Our Squads ";


const PlayerSection = (props)=>{
    const [PlayerList,setPlayerList] = useState([]);

    // function getID(){
    //     let pair = window.location.search.substring(1).split("=");
    //     return pair[1];
    // }
    useEffect(()=>{
        const someFunc = async (props)=>{
            let array = [];
                const requestOptions = {
                method: "GET"
            };
            const response = await fetch(
                `http://localhost:3001/api/team/getAll`,
                requestOptions
            )
           
            if(response.status===200){
                const data = await response.json();
                console.log(data);

                for(let i = 0;i<data.teams.length;i++){
                    array.push({
                        img: `${data.teams[i].image}`,
                        name: `${data.teams[i].teamName}`,
                        Date: `${data.teams[i].date}`,
                        to: `${data.teams[i].team._id}`
                    });
                }
            }
            setPlayerList(array);
    };
            someFunc();
    },[]);


//   array.push({
//         image: `${data[i].image}`,
//         teamName: `${data[i].teamName}`,
//         author: `${data[i].author}`,
//         date: `${data[i].date}`,
//         to: `${data[i]._id}`
//     });
return(
    <>
    <Fragment>
    <div className="container-fluid">
                   <div className="section-header">
                       <p>{subtitle}</p>
                       <h2>{title}</h2>
                   </div>
                   <div className="section-wrapper">
                       <div className="player-slider">
                           <Swiper
                               spaceBetween={20}
                               slidesPerView={2}
                               loop={'true'}
                               autoplay={{
                                   delay: 5000,
                                   disableOnInteraction: false,
                               }}
                               modules={[Autoplay]}
                               breakpoints={{
                                   0: {
                                       width: 0,
                                       slidesPerView: 1,
                                   },
                                   768: {
                                       width: 768,
                                       slidesPerView: 2,
                                   },
                                   1200: {
                                       width: 1200,
                                       slidesPerView: 3,
                                   },
                               }}
                           >
                               {PlayerList.map((val, i) => (
                                   <SwiperSlide key={i}>
                                       <div className="player-item-2 text-center" style={{backgroundImage: `url({${val.image}})`}}>
                                           <div className="player-inner-2">
                                               <div className="player-thumb-2">
                                                   <Link to="/">
                                                       <img src={val.image} />
                                                   </Link>
                                               </div>
                                               <div className="player-content-2">
                                                   <Link to="/"><h2>{val.teamName}</h2></Link>
                                                   <h2>Date: {val.date}</h2>
                                                   <h2>Tier: {val.tier}</h2>
                                               </div>
                                           </div>
                                       </div>
                                   </SwiperSlide>
                               ))}
                           </Swiper>
                       </div>
                   </div>
               </div>
    </Fragment>
    </>

   );
};
export default PlayerSection;