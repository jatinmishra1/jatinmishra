import React,{useEffect, useState} from 'react'

const Video = () => {
  const [value,setValue]=useState(true);
  const stop=()=>{
const marquee=document.getElementById("marquee");
if(value===false){
marquee.start();
setValue(true)
}
else if(value===true){
  marquee.stop();
  setValue(false)
}
  }
  useEffect(()=>{
    const marquee=document.getElementById("marquee");
    // marquee.stop();
  },[])
  return (
    <div className='header'>
<video   autoPlay  loop  onClick={stop} className="video" muted plays-inline>
          <source src="images/video.mp4" type="video/mp4"></source>
        </video>
        <div className='message'>
        <marquee id="marquee" className="marquee">Hi this is Jatin mishra welocme you all to my news channel</marquee>
        </div>
         </div>
  )
}

export default Video