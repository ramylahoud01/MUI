import { Box, Grid, Paper } from '@mui/material'
import React from 'react'

function MuiGrid() {
  return (
    <Paper sx={{bgcolor:"gray"}} elevation={8}>
    <Grid container p={4} spacing={2}>
        <Grid item xs={6} sm={3}>
            <Box  height={"50px"} bgcolor='primary.light'>Item 1</Box>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Box  height={"50px"} bgcolor='primary.light'>Item 2</Box>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Box height={"50px"} bgcolor='primary.light'>Item 3</Box>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Box height={"50px"} bgcolor='primary.light'>Item 4</Box>
        </Grid>
    </Grid>
    </Paper>
  )
}

export default MuiGrid
