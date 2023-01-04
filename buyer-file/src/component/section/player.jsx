import { Fragment,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const subtitle = "Our Teams";
const title = "Meet Our Squads ";


const PlayerSection = (props)=>{
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
                    let arr = [];
                    for(let i = 0;i<data.teams.length;i++){
                        
                    let date = new Date(data.teams[i].date);
                    var year = date.toLocaleString("default", { year: "numeric" });
                    var month = date.toLocaleString("default", { month: "2-digit" });
                    var day = date.toLocaleString("default", { day: "2-digit" });
                    var formattedDate = year + "-" + month + "-" + day;
                    data.teams[i].date = formattedDate;
                    arr.push(data.teams[i]);
                    }
                        setTierThreeList(arr);
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
    console.log(tierOneList);
    console.log(tierTwoList);
    console.log(tierThreeList);

return(
    <>
    <Fragment>
    <div className="container-fluid">
                   <div className="section-header">
                       <p>{subtitle}</p>
                       <h2>{title}</h2>
                   </div>
{
    (tierThreeList.length!==0?(<>
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
                                           <Link to ={`/team?id=${val._id}`}>
                                           <div className="player-inner-2">
                                               <div className="player-thumb-2">
                                                       <img src={val.image} />
                                               </div>
                                               <div className="player-content-2">
                                                   <h2>{val.teamName}</h2>
                                                   <h2>Date: {val.date}</h2>
                                                   <h2>Tier: {val.tier}</h2>
                                               </div>
                                           </div>
                                           </Link>
                                       </div>
                                   </SwiperSlide>
                               ))}
                           </Swiper>
                       </div>
                   </div>
    </>):(<></>))
}

               </div>
    </Fragment>
    </>

   );
};
export default PlayerSection;
