import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function MuiBreakpoints() {
  const theme = useTheme();
  const extraSmallScreen = useMediaQuery(theme.breakpoints.between('xs','sm'))
  const smallScreen = useMediaQuery(theme.breakpoints.between('sm','md'));
  const mediumScreen = useMediaQuery(theme.breakpoints.between('md','lg'))
  const largeScreen = useMediaQuery(theme.breakpoints.between('lg','xl'))
  const exraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'))
  console.log(`theme.breakpoints.up('xs') matches: ${extraSmallScreen}`)
  console.log(`theme.breakpoints.up('sm') matches: ${smallScreen}`)
  console.log(`theme.breakpoints.up('md') matches: ${mediumScreen}`)
  console.log(`theme.breakpoints.up('lg') matches: ${largeScreen}`)
  console.log(`theme.breakpoints.up('xl') matches: ${exraLargeScreen}`)

  return (
    <div>
        
    </div>
  )
}
export default MuiBreakpoints