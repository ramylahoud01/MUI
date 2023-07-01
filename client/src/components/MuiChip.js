import { Chip } from '@mui/material'
import React from 'react'

function MuiChip() {
  return (
    <div>
      <Chip label='Chip' variant='outlined' color='primary'/>
      <Chip label="Delete" color="error" onDelete={()=>{alert("Delete handler")}}/>
    </div>
  )
}

export default MuiChip
