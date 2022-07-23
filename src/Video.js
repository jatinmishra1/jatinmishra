import React,{useEffect, useState} from 'react'
import Sadata from './Sadata';
var link;
const Video = () => {
  const [curr,setcurr]=useState();
  const [seti,setii]=useState(0);
// useEffect(()=>{
//   console.log(curr);
// setcurr(link);
// },[myfun])






function myfun(){
setcurr(curr=>Sadata[seti].link)
console.log(curr);
// setcurr((curr)=>{
//   curr=Sadata[i].link;
//   console.log(curr);
 
// });

// console.log(curr);
setii(seti=>seti+1);
// console.log(link);

if(seti==Sadata.length){
  console.log(seti);
  clearInterval(setmyInt)
}
}

const setmyInt=setInterval(myfun,4000)

return (   
     
  <div className='header'>
    {link}
<video   autoPlay  loop  className="video" muted plays-inline>    
 <source src={curr} type="video/mp4"></source>
      </video>
      <div className='message'>
      <marquee id="marquee" className="marquee">Hi this is Jatin mishra welocme you all to my news channel</marquee>
      </div>
       </div>
)

}

export default Video