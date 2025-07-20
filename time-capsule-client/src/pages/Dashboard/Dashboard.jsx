import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import axios from 'axios';
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { MdMenuOpen } from "react-icons/md";


const Dashboard = () => {

  const backend_url = "http://127.0.0.1:8000/api";

  const navigate = useNavigate();

  const user_local = localStorage.getItem("user");
  const token = JSON.parse(user_local)?.token;
  const id = JSON.parse(user_local)?.id;

  const getUser = async() => {
    try {
      const response = await axios.get(`${backend_url}/user/users/${id}`, {headers: { Authorization: `Bearer ${token}` }});
    } catch (error) {
      navigate("/login-signup");
    }
  }
  useEffect(() => {
    getUser();
  }, [])
  
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