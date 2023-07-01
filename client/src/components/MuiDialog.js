import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
function MuiDialog() {
    const [open,isOpen] =useState(false);
  return (
    <div>
      <Button onClick={()=>isOpen(true)} variant='contained'>Click</Button>
      <Dialog open={open} onClose={()=>isOpen(false)}>
        <DialogTitle>Submit the test ?</DialogTitle>
        <DialogContent>
            <DialogContentText>Are u sure to submit the test ? Once Submit you cannot change you're submission ...</DialogContentText>
            <DialogActions>
                <Button type='contained'>Submit</Button>
                <Button type='contained'>Cancel</Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MuiDialog
