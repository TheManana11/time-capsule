import React, { useState } from 'react'
import './Dashboard.css'
import { Outlet, Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { MdMenuOpen } from "react-icons/md";


const Dashboard = () => {

  const[sideBar, setSideBar] = useState(true);

  return (
    <div className='dashboard'>
      <div className="side-bar">
        <MdMenuOpen className='dashboard-icon' onClick={() => { setSideBar(!sideBar) }}/>
        <Link className='side-links' to={"user-profile"}><CiUser />  {sideBar ? "User Profile" : ""}</Link>
        <Link className='side-links' to={"edit-user"}> <LiaUserEditSolid /> {sideBar ? "Edit Profile" : ""}</Link>
        <Link className='side-links' to={"add-capsule"}> <IoIosAddCircleOutline /> {sideBar ? "Add Capsule" : ""}</Link>
        <Link className='side-links' to={"user-capsules"}> <ImBooks /> {sideBar ? "All Capsules" : ""}</Link>
      </div>
      {/* <div className="side-bar-mobile">
        <Link className='side-links' to={"user-profile"}><CiUser /></Link>
        <Link className='side-links' to={"edit-user"}> <LiaUserEditSolid /></Link>
        <Link className='side-links' to={"add-capsule"}> <IoIosAddCircleOutline /></Link>
        <Link className='side-links' to={"user-capsules"}> <ImBooks /></Link>
      </div> */}
      <Outlet />
    </div>
  )
}

export default Dashboard