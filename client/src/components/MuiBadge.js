import { Badge, Stack } from '@mui/material'
import React from 'react'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
function MuiBadge() {
  return (
    <Stack direction={'row'} p={5}>
    <Badge badgeContent={5} color={'primary'}>
      <LocalPostOfficeOutlinedIcon />
    </Badge>
    <Badge variant='dot' color={'primary'}>
      <LocalPostOfficeOutlinedIcon />
    </Badge>
    </Stack>
  )
}

export default MuiBadge
