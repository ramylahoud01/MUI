import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function MuiDrawer() {
    const [isOpen ,SetisOpen]=useState(false)

  return (
    <>
    <IconButton onClick={()=>SetisOpen(true)}>
        <MenuOutlinedIcon />
    </IconButton>
    <Drawer anchor='left' width="350px" open={isOpen} onClose={()=>{SetisOpen(false)}}>
        <Box textAlign={'center'} p={4}>
            <Typography variant='h4' component={'div'}>Side Panel</Typography>
        </Box>
    </Drawer>
    </>
  )
}

export default MuiDrawer
