import React, { useState } from 'react'
import { TextField ,MenuItem,Box} from '@mui/material'

function MuiSelect() {
  const[value,setValue]=useState("")

  const changevaluehandler =(event)=>{
    setValue(event.target.value);
    console.log(event.target.value)
  }
    return (
    <Box width={"150px"}>
    <TextField fullWidth label="select country" select value={value} onChange={changevaluehandler}>
        <MenuItem value="In">India</MenuItem>
        <MenuItem value="Us">USA</MenuItem>
        <MenuItem value="LB">Lebanon</MenuItem>
    </TextField> 
    </Box>
  )
}

export default MuiSelect
