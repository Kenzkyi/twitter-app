import React from 'react'
import "./CenterNav.css"
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import Card from './Card';
import {data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15} from "./Data"
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const CenterNav = () => {
  return (
    <div className='centerNav'>
      <div className='top'>
        <nav>E</nav>
        <FaXTwitter/>
        <button>Upgrade</button>
      </div>
      <div className='header'>
        <h6>For you</h6>
        <p>Following</p>
      </div>
      <div className='whats'>
        <div className='inputWhats'>
          <nav>E</nav>
          <input type="text" placeholder='What is happening?!'/>
        </div>
        <div className='icons'>
          <nav>
          <GoFileMedia />
          <MdOutlineGifBox />
          <div>
              <img src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/22084059/grok-chatbot-logo-png_seeklogo-523502.png" alt="" />
            </div>
            <CiCircleList />
            <BsEmojiSmile />
            <RiCalendarScheduleFill />
            <IoLocationOutline />
          </nav>
          <button>Post</button>
        </div>
      </div>
      <Card file = {data1}/>
      <CardTwo file = {data2}/>
      <CardThree file = {data3}/>
      <CardTwo file={data4}/>
      <Card file={data5}/>
      <CardThree file={data6}/>
      <Card file={data7}/>
      <CardThree file={data8}/>
      <CardTwo file={data9}/>
      <CardThree file={data10}/>
      <Card file={data11}/>
      <CardTwo file={data12}/>
      <Card file={data13}/>
      <CardTwo file={data14}/>
      <CardThree file={data15}/>
      <div className='bottomCenterNav'>
        <IoMdHome />
        <IoSearchOutline />
        <nav>
            <img src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/22084059/grok-chatbot-logo-png_seeklogo-523502.png" alt="" />
        </nav>
        <GoBellFill />
        <CiMail />
        <FaUserGroup />
      </div>
    </div>
  )
}

export default CenterNav
