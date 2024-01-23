import React from 'react';
import '../style/Who.css';
import me from '../Asssts/me.jpg';



function Who() {
  return (
    <div className='Who'>
    <h1>Welcome to Hirushi's Website.</h1>
    <img src={me} alt='My photo' width='300px' height='300px'/>
    <p>Hello everyone, I am Hirushi Rathnayake and I am a passionate enthusiastic skilled undergraduate from University of Moratuwa, Faculty of Information Technology.
      I schooled at Kandy Girls' High school and my home town is kandy. As a undergraduate my responsibility is to provide valuble things to world. I am a good team player and also a good team leader 
      with solid and friendly leadership qualities. I like to learn many new things using self studies. Geeksforgeeks, Tutorials point are some tutorials which I follows and
      Youtube tutorials also good for learn things. 
    </p>
    </div>
  )
}

export default Who
