import { Accordion, AccordionDetails, AccordionSummary, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
function MuiAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandCircleDownOutlinedIcon />}>
            <Typography>
                Details 
            </Typography>
        </AccordionSummary>
        <AccordionDetails >
           <Stack  direction={'row'}>
           <TextField color='error' variant='standard' label='Name' sx={{marginLeft:"15px"}}/>
           <TextField variant='standard' label='LastName' sx={{marginLeft:"15px"}}/>
           <TextField variant='standard' label='Passowrd' sx={{marginLeft:"15px"}}/>
           </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandCircleDownOutlinedIcon />}>
            <Typography>
                Details 
            </Typography>
        </AccordionSummary>
        <AccordionDetails >
           <Stack  direction={'row'}>
           <TextField color='error' variant='standard' label='Name' sx={{marginLeft:"15px"}}/>
           <TextField variant='standard' label='LastName' sx={{marginLeft:"15px"}}/>
           <TextField variant='standard' label='Passowrd' sx={{marginLeft:"15px"}}/>
           </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandCircleDownOutlinedIcon />}>
            <Typography>
                Details 
            </Typography>
        </AccordionSummary>
        <AccordionDetails >
           <Stack  direction={'row'}>
           <TextField color='error' variant='standard' label='Name' sx={{marginLeft:"15px"}}/>
           <TextField variant='standard' label='LastName' sx={{marginLeft:"15px"}}/>
           <TextField variant='standard' label='Passowrd' sx={{marginLeft:"15px"}}/>
           </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
