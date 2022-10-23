import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmailIcon from '@mui/icons-material/Email';
//array of objects

const SidebarData =
[
    {
      title:"Home",
      icon:<HomeIcon/>,
      link:"/home"

    },
    {
        title:"Donations",
        icon:<VolunteerActivismIcon/>,
        link:"/donations"
  
      },
      {
        title:"Statistics",
        icon:<BarChartIcon/>,
        link:"/statistics"
  
      },
      {
        title:"Members",
        icon:<PeopleAltIcon/>,
        link:"/members"
  
      },
      {
        title:"Events",
        icon:<CampaignIcon/>,
        link:"/event"
  
      },
      {
        title:"Mail",
        icon:<EmailIcon/>,
        link:"/mail",

      }

]

export default SidebarData;
