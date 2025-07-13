import React from 'react'
import './Dashboard.css'
import { Outlet, Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ImBooks } from "react-icons/im";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="side-bar">
        <Link className='side-links' to={"user-profile"}><CiUser /> User Profile</Link>
        <Link className='side-links' to={"edit-user"}> <LiaUserEditSolid /> Edit Profile</Link>
        <Link className='side-links' to={"add-capsule"}> <IoIosAddCircleOutline /> Add Capsule</Link>
        <Link className='side-links' to={"user-capsules"}> <ImBooks /> All Capsules</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard