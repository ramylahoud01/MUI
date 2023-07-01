import { Button ,ButtonGroup,Box,IconButton,Stack, TextField, Link,ToggleButton, ToggleButtonGroup,MenuItem, FormControlLabel, Switch, Grid, Card, CardContent, CardActions, Accordion, AccordionSummary, AccordionDetails, AccordionActions, AppBar, Toolbar, Drawer, Tooltip, Snackbar, SnackbarContent } from "@mui/material"
import { Typography } from "@mui/material"
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
//import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function Revision() {
    const handleClick = () => {
        toast.warning('Hello world!');
      };
    const [value,setvalue]=useState("");
    const [selectedvalue,setselectedvalue]=useState([])
    const [checked,setChecked]=useState(false);
    const [open , setisOpen]=useState(false)
    const [open1,setisOpen1]=useState(false)
    const Handlerchange =(event,updatedValue)=>{
        setvalue(updatedValue)
        console.log(updatedValue)
    }
  return (
    <div>
    <AppBar position="static">
        <Toolbar>
            <IconButton>
                 <DirectionsCarIcon />
            </IconButton>
            <Typography flexGrow={0.4}>Pokemon</Typography>
            <ButtonGroup color='error' variant='contained' orientation='horizontal'>
        <Button >left</Button>
        <Button >center</Button>
        <Button >right</Button>
        </ButtonGroup>
        </Toolbar>
    </AppBar>
    <IconButton onClick={()=>setisOpen(true)}>
        <MenuIcon />
    </IconButton>
    <Drawer anchor="left" width="350px" open={open} onClose={()=> setisOpen(false)}>
        <Box width="300px">
        <Stack spacing={8} direction={'row'} >
    <ButtonGroup  variant="text" orientation="vertical">
    <Button sx={{marginBottom:'10px'}} color="primary" >Click here</Button> 
    <Button sx={{marginBottom:'10px'}} color="primary">Click Here</Button>
    <Button  color='primary'>CLick Here</Button>
    </ButtonGroup>
    </Stack>
        </Box>
    </Drawer>
    <Typography variant="h4" component="div" align="center">Hello</Typography>
    <Typography variant="h4" component="div" >Hello</Typography>
    <Stack spacing={8} direction={'row'} >
    <ButtonGroup  variant="text" orientation="vertical">
    <Button sx={{marginBottom:'10px'}} color="primary" >Click here</Button> 
    <Button sx={{marginBottom:'10px'}} color="primary">Click Here</Button>
    <Button  color='primary'>CLick Here</Button>
    </ButtonGroup>
    <IconButton color="secondary" variant='contained'>
        <SkipNextIcon/>
        </IconButton>
    </Stack>
   
        <Tooltip title="Delete" placement="top" enterDelay={500} leaveDelay={500}>
            <DeleteIcon />
        </Tooltip>
        <ToggleButtonGroup value={value} onChange={Handlerchange}>
            <ToggleButton value="Bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value="Italic"><FormatItalicIcon/></ToggleButton>
            <ToggleButton value="UnderLine"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
        <TextField variant="standard" type="password" label="Name" helperText="You must enter you're name"/>
        <Box width="200px">
            <TextField fullWidth value={selectedvalue} select onChange={(event)=>setselectedvalue(event.target.value)}  label="Selct Country">
                <MenuItem value="In">India</MenuItem>
                <MenuItem value="Lbn">Lebanon</MenuItem>
                <MenuItem value="Usa">USA</MenuItem>
            </TextField>
        </Box>
        <Box>
            <FormControlLabel value={checked} onChange={(event)=> setChecked(event.target.checked) } control={<Switch  checked={checked} />} label="DarkMode" />
        </Box>
        <Grid container >
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item>
            <Box width={"400px"}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        </Grid>
        <Link href="#">CLick me</Link>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandCircleDownIcon/>}>
                <Typography variant="h5">Click</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="p">Thanks for clicking</Typography>
                <AccordionActions>
                    <Button>Thanks for submit</Button>
                </AccordionActions>
            </AccordionDetails>
        </Accordion>

        <Button onClick={()=>setisOpen1(true)}>Click</Button>
        <Snackbar 
        autoHideDuration={4000}
        open={open1}
        onClose={()=> setisOpen1(false)}
        >
        <SnackbarContent message={
            <Typography>Success</Typography>
        }
        />
        </Snackbar>

        <div>
      <Button onClick={handleClick}>Show Toast</Button>
      <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
    </div>
    </div>
  )
}

export default Revision
