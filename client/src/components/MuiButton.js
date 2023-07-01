import React from 'react'
import {Button,ButtonGroup,IconButton,Stack, ToggleButton, ToggleButtonGroup} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { useState } from 'react';
function MuiButton() {
  const [format,setFormat] = useState([]);

  const changehandler =(event,updatedFormat) =>{
    console.log(updatedFormat)
    setFormat(updatedFormat);
  }
  return (    
    <Stack spacing={4} >
      <p>Variant</p>
      <Stack spacing={4} direction='row'>
      <Button variant='text' >Text</Button>
      <Button variant="contained" >contained</Button>
      <Button variant="outlined" >Outlined</Button>
      </Stack>
      <p>Color</p>
      <Stack spacing={4} direction='row'>
      <Button variant="outlined" color='primary' >contained</Button>
      <Button variant="contained" color='secondary' >contained</Button>
      <Button variant="contained" color='error' >contained</Button>
      <Button variant="outlined" color='warning' >contained</Button>
      <Button variant="contained" color='info' >contained</Button>
      <Button variant="contained" color='success' size='small'>contained</Button>
      </Stack> 
      <p>Size</p>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='error' size='large'>Large</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='small'>Small</Button>
      </Stack>
      <p>Icons</p>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='error' startIcon={<SendIcon />}>Send</Button>
        <Button variant='contained'  color='error'  endIcon={<SendIcon />}>Send</Button>
        <IconButton color='error' onClick={()=> alert("Clicked")}><SendIcon /></IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup color='error' variant='contained' orientation='horizontal'>
        <Button >left</Button>
        <Button >center</Button>
        <Button >right</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
      <ToggleButtonGroup value={format} onChange={changehandler} exclusive>
        <ToggleButton value="underline"><FormatUnderlinedIcon/></ToggleButton>
        <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
        <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
      </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton
