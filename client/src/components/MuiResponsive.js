import React from 'react'
import { Box, Grid, Stack, Typography} from '@mui/material'
function MuiResponsive() {
  const Items = [
    {name:'item1'},
    {name:'item2'},
    {name:'item3'},
    {name:'item4'},
    {name:'item5'},
    {name:'item6'},
    {name:'item7'}
  ]
  const width='200px'
  return (
    <>
    <Stack direction={'row'} spacing={5} >
      {Items.map((item,index)=>
      <Typography key={index} component={'div'}  width={width}>{item.name}</Typography>
      )}
    </Stack>

    <Grid container>
      <Grid item xs={6} sm={9}>item1</Grid>
      <Grid item xs={6} sm={3}>item1</Grid>
    </Grid>
    </>
  )
}

export default MuiResponsive