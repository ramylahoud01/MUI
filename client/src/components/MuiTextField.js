import React from 'react'
import {InputAdornment, Stack,TextField} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
function MuiTextField() {
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction={'row'} >
            <TextField label="Name" color="error"variant='standard'></TextField>
            <TextField label="Name" variant='outlined'></TextField>
            <TextField label="Name" variant='filled'></TextField>
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <TextField label="Name" helperText="do nor share" required></TextField>
            <TextField  type="date" />
            <TextField label="Search" variant='outlined' InputProps={{
                endAdornment:<InputAdornment position='end'>
                    <SearchIcon />
                </InputAdornment>
            }}/>
        </Stack>
      </Stack>
    </div>
  )
}

export default MuiTextField
