import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'
import "../App.css"
const table =[{
    "id": 1,
    "first_name": "Randie",
    "last_name": "Rebeiro",
    "email": "rrebeiro0@bizjournals.com",
    "gender": "Male",
    "ip_address": "62.132.49.187"
  }, {
    "id": 2,
    "first_name": "Kate",
    "last_name": "Racher",
    "email": "kracher1@home.pl",
    "gender": "Female",
    "ip_address": "215.101.243.106"
  }, {
    "id": 3,
    "first_name": "Jobey",
    "last_name": "Corps",
    "email": "jcorps2@census.gov",
    "gender": "Female",
    "ip_address": "217.155.225.156"
  }, {
    "id": 4,
    "first_name": "Lennard",
    "last_name": "Tern",
    "email": "ltern3@cbsnews.com",
    "gender": "Polygender",
    "ip_address": "56.63.108.247"
  }, {
    "id": 5,
    "first_name": "Rock",
    "last_name": "Mateo",
    "email": "rmateo4@arizona.edu",
    "gender": "Male",
    "ip_address": "92.186.20.39"
  }, {
    "id": 6,
    "first_name": "Erastus",
    "last_name": "Condliffe",
    "email": "econdliffe5@list-manage.com",
    "gender": "Male",
    "ip_address": "136.27.53.158"
  }, {
    "id": 7,
    "first_name": "Gerardo",
    "last_name": "Lytton",
    "email": "glytton6@qq.com",
    "gender": "Male",
    "ip_address": "39.126.107.38"
  }, {
    "id": 8,
    "first_name": "Bethena",
    "last_name": "Pledge",
    "email": "bpledge7@discuz.net",
    "gender": "Female",
    "ip_address": "35.237.2.76"
  }, {
    "id": 9,
    "first_name": "Trace",
    "last_name": "McCrann",
    "email": "tmccrann8@yahoo.com",
    "gender": "Male",
    "ip_address": "54.79.131.21"
  }, {
    "id": 10,
    "first_name": "Eal",
    "last_name": "Wrightson",
    "email": "ewrightson9@indiegogo.com",
    "gender": "Male",
    "ip_address": "114.166.54.20"
  }]
  
function MuiTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell align='center'>Ip Adress</TableCell>
        </TableRow>
        <TableBody>
            {table.map(table => 
            <TableRow className='tb' key={table.id} sx={{ 
                '&:nth-of-type(odd)': { 
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
                '&:hover': { 
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  }
              }}>
                <TableCell>{table.id}</TableCell>
                <TableCell>{table.first_name}</TableCell>
                <TableCell>{table.last_name}</TableCell>
                <TableCell>{table.email}</TableCell>
                <TableCell>{table.gender}</TableCell>
                <TableCell align='center'>{table.ip_address}</TableCell>
            </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTable
