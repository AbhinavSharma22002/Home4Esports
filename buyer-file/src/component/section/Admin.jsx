import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/Admin.css'
import Newgame from '../../assets/images/banner/Newgame.png'
import Newmerch from '../../assets/images/banner/Newmerch.png'
import Blog from "../../assets/images/banner/blog.png"
import Stream from "../../assets/images/banner/stream.png"
import Customer from "../../assets/images/banner/customer.png"
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
                        <img src={Customer} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/createBlog">
                        <img src={Blog} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/streamForm">
                        <img src={Stream} alt="logo" />
                    </Link>
                </div>


            </div>
        </div>
        </Fragment>
    )
}

export default Admin;
