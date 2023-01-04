import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/Admin.css'
import Newgame from '../../assets/images/banner/Newgame.png'
import Newmerch from '../../assets/images/banner/Newmerch.png'
import Blog from "../../assets/images/banner/blog.png"
import Stream from "../../assets/images/banner/stream.png"
import Customer from "../../assets/images/banner/customer.png"
import tour from "../../assets/images/banner/tournament.png"

import Best from "../../assets/images/banner/best.png";
import Users from "../../assets/images/banner/users.png";


import Tournament from "../../assets/images/banner/customer.png"
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
                    <Link to="/streamForm">
                        <img src={Stream} alt="logo" />
                    </Link>
                </div>
                <div className='head-1'>
                    <Link to="/my-tournaments">
                        <img src={tour} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/my-customer">
                        <img src={Users} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/displayForm">
                        <img src={Best} alt="logo" />
                    </Link>
                </div>
            </div>
          <br /><br /><br /><br /> <br /><br /><br /><br /><br />
        </Fragment>
    )
}

export default Admin;