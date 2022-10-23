import React from 'react'
import "./Home.css";
import Feature from './Features/Feature';
import Money from "./Charity/Money";
import User from "./user/User";
import Charitydetail from './Charitydetail/Charitydetail';
import Blooddonor from './Blood donor/Blooddonor';
import Bloodrequest from './bloodrequest/Bloodrequest';

export default function Home() {
  return (
    <div className='home'>
    <Feature/>
    <Money/>
    <div className='HomeUser'>
      <User/>
    </div>
    <Charitydetail/>
    <Blooddonor/>
    <Bloodrequest/>



    
    </div>
  )
}
