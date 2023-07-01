import { Snackbar ,Button,SnackbarContent, Box, Typography} from '@mui/material'
import React, { useState } from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
function MuiSnackBar() {
    const [open,setOpen]=useState(false)
    const HandlerClose =(event)=>{
        setOpen(false)
    }
  return (
    <>    
    <Button onClick={()=> setOpen(true)}>Submit</Button>
    <Snackbar 
      autoHideDuration={4000} 
      open={open} 
      onClose={HandlerClose}
      anchorOrigin={{
        vertical:'top',
        horizontal:'center'
      }}
      
      >
        <SnackbarContent
        message={
            <Box display={'flex'} >
            <CheckCircleOutlineOutlinedIcon sx={{
                marginRight:'20px'
            }} color='success'/>
            <Typography >Message Send Successfully</Typography>
            </Box> 
        } 
        sx={{background:'rgba(149, 165, 166);, 1', color:'white'}}
      />
        </Snackbar>
    </>

  )
}

export default MuiSnackBar
