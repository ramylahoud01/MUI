import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const skills=['Html','Css','JavaScript' ,'Java','React']
function MuiAutoComplete() {
    const [value,setValue] = useState(null);
    console.log(value)
    const changeHandler = (event,newValue) =>{
        setValue(newValue)
    }

  return (
    <Stack width='250px' >
      <Autocomplete freeSolo value={value} onChange={changeHandler} options={skills} renderInput={(params) => <TextField {...params} label='Name' />}  />
    </Stack>
  )
}

export default MuiAutoComplete
