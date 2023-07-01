import { Box, FormControl, FormLabel,FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React from 'react'

function MuiRadio() {
  return (
    <Box>
        <FormControl>
            <FormLabel>
                Years Of Experiance
            </FormLabel>
            <RadioGroup>
                <FormControlLabel control={<Radio/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio/>} label="2-4" value="2-4"/>
                <FormControlLabel control={<Radio/>} label="4-6" value="4-6"/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadio
