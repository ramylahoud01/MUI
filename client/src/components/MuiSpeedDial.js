import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
function MuiSpeedDial() {
  return (
    <SpeedDial
  ariaLabel="SpeedDial openIcon example"
  sx={{ position: 'absolute', bottom: 16, right: 16 }}
  icon={<SpeedDialIcon  />}>
    <SpeedDialAction icon={<ContentCopyOutlinedIcon />} tooltipTitle={'Copy'}/>
    <SpeedDialAction icon={<LocalPrintshopOutlinedIcon/>} tooltipTitle={'Print'}/>
    </SpeedDial>
  )
}

export default MuiSpeedDial
