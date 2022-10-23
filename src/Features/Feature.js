import React from 'react'
import "./Feature.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MoneyTwoToneIcon from '@mui/icons-material/MoneyTwoTone';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
function Feature() {
  return (
    <div className='feature'>
               <div className='featureItem'>
                    <div className='featureIcon'>
                         <span className='featureUserContainer'><AccountCircleIcon className='featureIcon Icon'/></span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>No</span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>Total User</span>
                    </div>
                   
                </div>

                <div className='featureItem'>
                    <div className='featureIcon'>
                         <span className='featureUserContainer'><VolunteerActivismIcon className='featureIcon Icon'/></span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>No</span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>DONOR</span>
                    </div>
                   
                </div>

                <div className='featureItem'>
                    <div className='featureIcon'>
                         <span className='featureUserContainer'><MoneyTwoToneIcon className='featureIcon Icon'/></span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>No</span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>Charity Donor</span>
                    </div>
                   
                </div>

                <div className='featureItem'>
                    <div className='featureIcon'>
                         <span className='featureUserContainer'><BloodtypeIcon className='featureIcon Icon'/></span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>No</span>
                    </div>
                    <div className='featureUser'>
                          <span className='featureUserItem'>BLOOD Donor</span>
                    </div>
                   
                </div>
                 


              
       
       
    
    </div>
  )
}

export default Feature