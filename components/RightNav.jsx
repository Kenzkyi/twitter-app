import React, {useState} from 'react'
import "./RightNav.css"
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoReloadCircleOutline } from "react-icons/io5";
import { LuMailPlus } from "react-icons/lu";
import { BsChevronDoubleUp } from "react-icons/bs";


const RightNav = () => {
        const [isFocused,setIsFocused] = useState(false);

        const handleFocus = () =>{
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(false);
        }
  return (
    <div className='rightNav'>
        <div className='holder'>
            <div className='searchDiv'>
            <input onFocus={handleFocus} onBlur={handleBlur} style={{borderColor: isFocused?"#1D9BF0":"black"}} className='search' type="text" placeholder='Search' />
            <IoSearchOutline style={{color: isFocused?"#1D9BF0":""}} className='searchIcon'/>
            </div>
            <div className='premium'>
                <h3>Suscribe to Premium</h3>
                <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                <button>Subscribe</button>
            </div>
            <div className='happening'>
                <h3>What's happening</h3>
                <aside className='live'>
                    <div>
                        <img src="https://pbs.twimg.com/semantic_core_img/1874110387446001664/r5Oi9C0Z?format=jpg&name=240x240" alt="" />
                    </div>
                    <article>
                        <h3>Kings World Cup Nations</h3>
                        <p>LIVE</p>
                    </article>
                </aside>
                <nav>
                    <div>
                        <p>Trending</p>
                        <h6>Paws</h6>
                        <p>29.6k posts</p>
                    </div>
                    <BsThreeDots />
                </nav>
                <nav>
                    <div>
                        <p>Trending in Nigeria</p>
                        <h6>Data Analysis</h6>
                        <p>4,555 posts</p>
                    </div>
                    <BsThreeDots />
                </nav>
                <nav>
                    <div>
                        <p>Trending in Nigeria</p>
                        <h6>The Big 6</h6>
                        <p>7,785 posts</p>
                    </div>
                    <BsThreeDots />
                </nav>
                <nav>
                    <div>
                        <p>Entertainment . Trending</p>
                        <h6>Mrs Beast</h6>
                    </div>
                    <BsThreeDots />
                </nav>
                <p style={{color:"#1A8CD8"}}>Show more</p>
            </div>
            <div className='follow'>
                <h3>Who to follow</h3>
                <nav>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/1600168780008677379/2nqm8TVq_400x400.jpg" alt="" />
                    </div>
                    <article>
                        <h6>Finalbosu</h6>
                        <p>@finalbosuX</p>
                    </article>
                    <button>Follow</button>
                </nav>
                <nav>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/1811413224031490048/ww-TJT4Q_400x400.jpg" alt="" />
                    </div>
                    <article>
                        <h6>NBC Sports</h6>
                        <p>@NBCSports</p>
                    </article>
                    <button>Follow</button>
                </nav>
                <nav>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/1868978067135197184/l1_C7IQM_400x400.jpg" alt="" />
                    </div>
                    <article>
                        <h6>CryptoRank.io</h6>
                        <p>@CryptoRank_io</p>
                    </article>
                    <button>Follow</button>
                </nav>
                <p className='p'>Show more</p>
            </div>
            <div className='terms'>
                <ol>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                </ol>
                <ul>
                    <li>Accessibility</li>
                    <li>Ads info</li>
                    <li>More<BsThreeDots /></li>
                    <li><IoReloadCircleOutline />2025 X Corp.</li>
                </ul>
            </div>
        </div>
        <div className='bottom'>
            <h3>Messages</h3>
            <nav>
            <div className='mail'><LuMailPlus /></div>
            <div className='double'><BsChevronDoubleUp /></div>
            </nav>
        </div>
    </div>
  )
}

export default RightNav
