import React from 'react'
import "./Blooddonor.css";

function Blooddonor() {
  return (
    <div className='Blood'>

        <ul className=' bloodDonor'>
            <h3>Blood DONOR</h3>
           <li className='listItem'>
               <span className='BloodItem'>Name</span>
               <span className='BloodItem'>Blood-type</span>
               <span className='BloodItem'>Age</span>
               <span className='BloodItem'>City</span>
               <span className='BloodItem'>Phone</span>
               <span className='BloodItem'>Status</span>
           
           </li>
           </ul>
    </div>
    
    
  )
}

export default Blooddonor