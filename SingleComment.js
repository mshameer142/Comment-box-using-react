 import React from 'react';
  
 
 const SingleComment = (props)=> {
 return(
<div className='comment'> 
  <a href="/" className='avatar'> <img src={props.dp} alt='pic'></img></a>
  <div className='content'> 
<a href="/" className='author'>{props.name}</a>
<div className='metadata'>
<span className='date'>{props.seen}</span></div>
<div className='text'>{props.msg}</div>



</div>
</div>

 )
 }

 export default SingleComment;