import { Box,Card, CardContent, Typography,Grid, CardActions, Button,Paper, CardMedia } from '@mui/material'
import React from 'react'
import image from "../image/img.jpg"
function MuiCard() {
  return (
    <Grid container p={2}>       
        <Grid item xs='6' sm='4'>
        <Box p={4} width={'250px'} height={'400px'}>
        <Paper elevation={4}>
        <Card >
            <CardMedia component={'img'} height={'100px'} image={image}/>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Paper>
        </Box>
        </Grid>
        <Grid item xs={'6'} sm='4'>
        <Box p={4} width={'250px'} height={'400px'}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item xs={'6'} sm='4'>
        <Box p={4} width={'250px'} height={'400px'}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item xs={'6'} sm='4'>
        <Box p={4} width={'250px'} height={'400px'}>
        <Card>
            <CardContent>
                <Typography variant='h2' component={'div'}>React</Typography>
                <Typography variant='p' component={'p'}>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
        </Box>
        </Grid>
    </Grid>
  )
}

export default MuiCard
