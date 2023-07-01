import { Stack,Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

function MuiAvatar() {
  return (
    <Stack direction={'row'}>
      <AvatarGroup max={'3'}>
        <Avatar>RL</Avatar>
        <Avatar>FL</Avatar>
        <Avatar>KL</Avatar>
      </AvatarGroup>
    </Stack>
  )
}

export default MuiAvatar
