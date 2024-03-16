import React from 'react';
import { remotes } from '../config/remote';
const SideBar = () => {
    
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      {
        remotes.routes.map((s)=>{
          return <a href={'/#/'+s.route} style={{fontSize:'12px'}}>
                {s.appName}
            </a>
        })
      }
    </div>
  )
}

export default SideBar
