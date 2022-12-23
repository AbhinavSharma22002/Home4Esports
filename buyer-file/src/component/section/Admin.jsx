import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/Admin.css'
import Newgame from '../../assets/images/banner/Newgame.png'
import Newmerch from '../../assets/images/banner/Newmerch.png'
import Setting from "../../assets/images/banner/settinglogo.jpg"
import { Fragment } from 'react';
const Admin = () => {
    return (
        <Fragment >
        <div>
            <div className='container-1'>
                <div className='head-1'>
                    <Link to="/Schedule">
                        <img src={Newgame} alt="logo" />
                
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/Mgmt">
                        <img src={Newmerch} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/Customer">
                        <img src={Setting} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/createBlog">
                        <img src={Setting} alt="logo" />
                    </Link>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Admin;
