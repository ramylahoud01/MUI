import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
function MuiBottomNajivation() {
    const[value,setvalue]=useState()
  return (
    <BottomNavigation value={value} onChange={(event,newValue)=>{setvalue(newValue)}} sx={{width:"100%" ,position:"absolute" , bottom:"0"}}>
      <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />}/>
      <BottomNavigationAction label="Favorite" icon={<FavoriteBorderOutlinedIcon />}/>
      <BottomNavigationAction label="Profile" icon={<AccountBoxOutlinedIcon />}/>
    </BottomNavigation>
  )
}

export default MuiBottomNajivation
