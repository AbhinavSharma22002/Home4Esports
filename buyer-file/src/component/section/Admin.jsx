import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/Admin.css'
import Newgame from '../../assets/images/banner/Newgame.png'
import Newmerch from '../../assets/images/banner/Newmerch.png'
import Blog from "../../assets/images/banner/blog.png"
import Stream from "../../assets/images/banner/stream.png"
import Customer from "../../assets/images/banner/customer.png"
<<<<<<< HEAD
=======

import Tournament from "../../assets/images/banner/customer.png"
>>>>>>> 5d4f840b2e4d7c3a5c734d4b8a83f9f97e0a9d81
import PageHeader from "../layout/pageheader";
import { Fragment } from 'react';
const Admin = () => {
    return (
        <Fragment >
             <PageHeader title={'ADMIN PAGE '} curPage={'admin page'} />
             <br /><br /><br /><br /> <br /><br /><br />
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
<<<<<<< HEAD
=======

                <div className='head-1'>
                    <Link to="/my-tournaments">
                        <img src={Tournament} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/my-customer">
                        <img src={Tournament} alt="logo" />
                    </Link>
                </div>
>>>>>>> 5d4f840b2e4d7c3a5c734d4b8a83f9f97e0a9d81
            </div>
          <br /><br /><br /><br /> <br /><br /><br /><br /><br />
        </Fragment>
    )
}

export default Admin;