import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

function MuiSwitch() {
    const[checked,setchecked]=useState("");
    const changehandler = event =>{
        setchecked(event.target.checked)
        console.log(checked)
    }
    
  return (
    <Box>
      <FormControlLabel control={<Switch checked={checked}/>} onChange={changehandler}label="Dark Mode"/>
    </Box>
  )
}

export default MuiSwitch
