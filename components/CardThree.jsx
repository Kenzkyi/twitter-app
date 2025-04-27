import React from 'react'
import "./CardThree.css"
import { BsThreeDots } from "react-icons/bs";
import { FaComment,FaRegBookmark } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { LuShare } from "react-icons/lu";

const CardThree = ({file}) => {
  return (
    <div className='cardThree'>
       <div className='leftCardThree'>
              <nav>
                  {file.firstImg}
              </nav>
            </div>
            <div className='rightCardThree'>
              <header>
                  <div>
                  <h5>{file.h5}</h5>
                  <p>{file.header}</p>
                  </div>
                  <BsThreeDots />
              </header>
              <article>{file.article}</article>
              <aside>{file.aside}</aside>
              <section>
                {file.img}
              </section>
              <footer>
                  <nav>
            <p className='comment' ><FaComment />{file.p1}</p>
            <p className='retweet'><FaRetweet />{file.p2}</p>
            <p className='like'><MdFavorite />{file.p3}</p>
            <p className='bar'><RiBarChartFill />{file.p4}</p>
            </nav>
            <div>
                <FaRegBookmark className='sideIcon'/>
                <LuShare className='sideIcon'/>
                  </div>
              </footer>
            </div>
    </div>
  )
}

export default CardThree
