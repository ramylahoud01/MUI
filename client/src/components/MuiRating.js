import { Stack ,Rating } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react'
function MuiRating() {
    const [value,setvalue] = useState(null);
    const changehandler = (event,newValue) =>{
        setvalue(newValue)
    }
    console.log(value)
  return (
    <Stack>
      <Rating value={'3'} readOnly onChange={changehandler} precision={'0.5'} size={'large'}  icon={<FavoriteIcon color='success' />} emptyIcon={<FavoriteIcon />}/>
    </Stack>
  )
}

export default MuiRating
