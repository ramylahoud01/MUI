import { AppBar, IconButton, Toolbar, Typography ,Stack,Button, Menu, MenuItem} from '@mui/material'
import React from 'react'
import CatchingPokemonOutlinedIcon from '@mui/icons-material/CatchingPokemonOutlined';
function MuiNavBar() {
  return (
   <AppBar position='static'>
    <Toolbar>
        <IconButton edge='start' color='inherit'>
            <CatchingPokemonOutlinedIcon/>
        </IconButton>
        <Typography sx={{flexGrow:'1'}}>Pokemon</Typography>
    <Stack direction={'row'} spacing={1} >
        <Button color='inherit'>Features</Button>
        <Button color='inherit'>Price</Button>
        <Button color='inherit'>Shop</Button>
        <Button color='inherit'>AboutUS</Button>
    </Stack>
    </Toolbar>
    <Menu>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
    </Menu>
   </AppBar>
  )
}

export default MuiNavBar
