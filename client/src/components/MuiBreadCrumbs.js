import { Box, Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
function MuiBreadCrumbs() {
  return (
    <Box>
      <Breadcrumbs separator={<SkipPreviousOutlinedIcon size='small'/>} maxItems={'3'} itemsAfterCollapse={'2'}>
      <Link underline='hover'>Home</Link>
      <Link underline='hover'>Catalog</Link>
      <Link underline='hover'>Page</Link>
      <Link underline='hover'>Shoes</Link>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadCrumbs
