import React from 'react'
import "./index.css";
import {SidebarData} from "./SidebarData.js";


function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        {SidebarData.map((val,key)=> {
          return (
               <li key={key}
                className="row"
                onClick={()=> 
                {window.location.pathname=val.link}}
                
                > 
                {" "}
                <div id="icon">
                 {val.icon}
                </div>{" "}
                 <div id="title">
                    {val.title}
                 </div>
           </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Sidebar;

