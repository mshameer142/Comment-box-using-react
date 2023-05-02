/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


/*import React from 'react';
import ReactDOM  from 'react-dom';

const First = () =>{ // jsx style function codes.
  return( 
    <div> <h1 style={{backgroundColor:'black', color:''}}>  Welcome to my website </h1> </div>
       

    
  )
}

ReactDOM.render(
  <First />,
  document.querySelector('#root')
)*/

import React from 'react';
import ReactDOM  from 'react-dom';
import SingleComment from './SingleComment';
import profile2 from './Images/pic.png';
import profile3 from './Images/man.png';
import profile1 from './Images/shameer.png';
import UserCard from './UserCard';

 
 



const First = () => {
return(
<div className='ui comments'>

  <UserCard>
   <div>This is a sample details</div>
    </UserCard>

<UserCard> 
  <SingleComment name ='rohan' dp={profile1} seen='today at 3:00pm' msg ='Hi,'/>
  </UserCard>

  <UserCard> 
  <SingleComment  name = 'ramu' dp={profile2} seen='today at 3:40pm' msg= 'Hello all'/>
  </UserCard>

  <UserCard> 
   <SingleComment  name= 'riyas' dp={profile3} seen='today at 4:00pm' msg= 'Hope everyone is doing great'/>
   </UserCard>
</div>

)
}

ReactDOM.render(
  <First />,
  document.querySelector('#root')
)