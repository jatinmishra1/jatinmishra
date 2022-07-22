import React from "react"

import {Link} from 'react-router-dom'
function Home() {
const clicked=()=>{
  const sidebar=document.querySelector(".sidebar");
  console.log(sidebar)
  sidebar.classList.toggle("small-sidebar")
  const container=document.querySelector(".container");
  container.classList.toggle("large-container")
}
  return (
    <>
      
    {/* NAVBAR */}
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img src='/images/menu.png' className='menu-icon' onClick={clicked}/>
        <img src='/images/logo.png' className='logo'/>
      </div>
      <div className='nav-middle flex-div'>
      <div className='search-box flex-div'>
        <input type="text" placeholder="search"/>
        <img src="/images/search.png"/>
      </div>
      <img className='mic-icon' src="/images/voice-search.png"/>
      </div>
      <div className='nav-right flex-div'>
      <img src='/images/upload.png'/>
      <img src='/images/more.png'/>
      <img src='/images/notification.png'/>
      <img src='/images/Jack.png' className='user-icon'/>
      </div>
    </nav>
    {/* SIDEBAR */}
    <div className='sidebar'>
      <div className='shortcut-link'>
        <a href='' > <img src='/images/home.png'/><p>HOME</p></a>
        <a href='' > <img src='/images/explore.png'/><p>EXPLORE</p></a>
        <a href='' > <img src='/images/subscriprion.png'/><p>SUBSCRIPTION</p></a>
        <a href='' > <img src='/images/library.png'/><p>LIBRARY</p></a>
        <a href='' > <img src='/images/history.png'/><p>HISTORY</p></a>
        <a href='' > <img src='/images/playlist.png'/><p>PLAYLIST</p></a>
        <a href='' > <img src='/images/messages.png'/><p>MESSAGES</p></a>
        <a href='' > <img src='/images/show-more.png'/><p>SHOW-MORE</p></a>
      
      </div>
      <div className='subscribed-list'>
        <h3>SUBSCRIBED</h3>
        <a href='' > <img src='/images/Jack.png'/><p>Jack NIcho</p></a>
        <a href='' > <img src='/images/simon.png'/><p>SIMON</p></a>
        <a href='' > <img src='/images/tom.png'/><p>Tom</p></a>
        <a href='' > <img src='/images/megan.png'/><p>Megan</p></a>
        <a href='' > <img src='/images/cameron.png'/><p>CAmeron</p></a>
      </div>
    </div>
    {/* MAIN PAGE */}
    <div className='container'>
      <div className='banner'>
        <img src='/images/banner.png'/>
      </div>
      <div className='list-container'>
        <div className='vid-list'>
          <Link  to="/video">  <img src="/images/thumbnail1.png" className='thumbnail'/></Link>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
        <div className='vid-list'>
          <a>  <img src="/images/thumbnail2.png" className='thumbnail'/></a>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
        <div className='vid-list'>
          <a>  <img src="/images/thumbnail3.png" className='thumbnail'/></a>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
        <div className='vid-list'>
          <a>  <img src="/images/thumbnail4.png" className='thumbnail'/></a>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
        <div className='vid-list'>
          <a>  <img src="/images/thumbnail5.png" className='thumbnail'/></a>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
        <div className='vid-list'>
          <a>  <img src="/images/thumbnail6.png" className='thumbnail'/></a>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
        <div className='vid-list'>
          <a>  <img src="/images/thumbnail7.png" className='thumbnail'/></a>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
         <div className='vid-list'>
          <a>  <img src="/images/thumbnail8.png" className='thumbnail'/></a>
          <div className='flex-div'>
            <img src="/images/Jack.png"/>
            <div className='vid-info'>
              <a href="">Best channel</a>
              <p>Easy</p>
              <p>15K views &bull; 2 days</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </>
  );
}

export default Home;
