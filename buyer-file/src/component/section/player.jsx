import { Fragment,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const subtitle = "Our Teams";
const title = "Meet Our Squads ";


const PlayerSection = (props)=>{
    let index = 1;
    const[tierOneList, setTierOneList] = useState([]);
    const[tierTwoList, setTierTwoList] = useState([]);
    const[tierThreeList, setTierThreeList] = useState([]);

    useEffect(()=>{
        const someFunc = async (tier)=>{
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json' 
                    },
                body: JSON.stringify({tier:tier}),
            };
            const response = await fetch(
                `http://localhost:3001/api/team/getAll`,
                requestOptions
            )
            const data = await response.json();
            if(response.status===200){
                switch (tier) {
                    case 1:
                        setTierOneList(data.teams);
                        break;
                    case 2:
                        setTierTwoList(data.teams);
                        break;
                    case 3:
                        setTierThreeList(data.teams);
                        break;
                    default:
                        break;
                }
            }
    };
            someFunc(1);
            someFunc(2);
            someFunc(3);

    },[]);
    console.log(tierThreeList);
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
                               {
                               
                               tierThreeList.map((val, i) => (
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