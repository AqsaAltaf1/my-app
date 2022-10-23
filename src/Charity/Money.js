import React from 'react'
import "./Charity.css";
import BloodtypeTwoToneIcon from '@mui/icons-material/BloodtypeTwoTone';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';

function Money() {
  return (
    <div className='Money'>
             <div className='Charity'>
                    <div className='CharityItem'>
                         <span className='CharityLogo'><BloodtypeTwoToneIcon className='CharityItem Icon'/></span>
                    </div>
                    <div className='CharityTotalRequest'>
                          <span className='TotalBlood'>Amount</span>
                    </div>
                    <div className='CharityBlood'>
                          <span className='BloodRequest'>Blood Request</span>
                    </div>
                   
                </div>


                <div className='Charity'>
                    <div className='CharityItem'>
                         <span className='CharityLogo'><CurrencyExchangeTwoToneIcon className="CharityItem Icon"/></span>
                    </div>
                    <div className='CharityTotalRequest'>
                          <span className='TotalBlood'>Amount</span>
                    </div>
                    <div className='CharityBlood'>
                          <span className='BloodRequest'>Charity Request</span>
                    </div>
                   
                </div>
    </div>
  )
}

export default Money