import React from 'react'
import "./LeftNav.css"
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";

const LeftNav = () => {
  return (
    <div className='leftNav'>
      <div className='leftSidebar'></div>
      <div className='rightSidebar'>
        <div className='upperSide'>
            <aside><FaXTwitter/></aside>
            <aside className='homey'><IoMdHome className='home' style={{color:"white", border: "black"}}/></aside>
            <aside className='searches'><IoSearchOutline/></aside>
            <aside className='bell'><GoBellFill /></aside>
            <aside className='maily'><CiMail /></aside>
            <div className='grok'>
              <nav>  <img src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/22084059/grok-chatbot-logo-png_seeklogo-523502.png" alt="" /></nav>
            </div>
            <aside className='user'><HiOutlineUser /></aside>
            <aside className='chat'><AiOutlineMessage /></aside>
            <nav className='nav'>
                <img src="https://i1.wp.com/credomobblog.wpengine.com/wp-content/uploads/2018/04/1060_icons_compose-tweet.png?ssl=1" alt="" />
            </nav>
        </div>
        <div className='lowerSide'>
            <div className='lowerSideDiv'><div>E</div></div>
        </div>
      </div>
    </div>
  )
}

export default LeftNav
