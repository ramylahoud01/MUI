import { CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

function MuiProgress() {
  return (
    <div>
      <CircularProgress color='success'/>
      <LinearProgress variant='determinate' value={60}/>
    </div>
  )
}

export default MuiProgress
