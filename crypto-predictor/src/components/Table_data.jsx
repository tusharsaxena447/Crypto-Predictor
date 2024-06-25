import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


// eslint-disable-next-line react/prop-types
export default function CustomizedTables({curr,crypto}) {
  function createData(date, high, low, open, close, volume) {
    return {date, high, low, open, close, volume };
  }
  const [Row,setRow] = useState(0)
  const [limit, setLimit] =useState(5);

  const handleChange = (event) => {
    setLimit(event.target.value);
  };
  useEffect(()=>{
    fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${crypto}&tsym=${curr}&limit=${limit-1}`)
    .then(response => response.json())
    .then((data) => {
      setRow(data)
    })
    .catch(error => console.error(error));
    
  },[curr,limit,crypto])
    

  const tabledata = Row.Data && Row.Data.map((e)=>{
   let date = new Date(e.time*1000)
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

   return createData( `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}` ,e.high,e.low,e.open,e.close,e.volumefrom)
})

  return (
    <>
    <div className='container  flex m-5 items-center justify-between'>
    {<h2 className='text-2xl font-bold'>Bitcoin Historical Data</h2>}
    <FormControl sx={{ minWidth: 120, marginRight : "20px" }} size='small'>
        <InputLabel id="demo-simple-select-helper-label">Limit</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={limit}
          label="Limit"
          onChange={handleChange}
        >         
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={92}>3 Months</MenuItem>
          <MenuItem value={182}>6 Months</MenuItem>
          <MenuItem value={366}>1 Year</MenuItem>
        </Select>       
      </FormControl>
    </div>
    <div className='overflow-auto'>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">High</StyledTableCell>
            <StyledTableCell align="right">Low</StyledTableCell>
            <StyledTableCell align="right">Open</StyledTableCell>
            <StyledTableCell align="right">Close</StyledTableCell>
            <StyledTableCell align="right">Volume</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledata && tabledata.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.high}</StyledTableCell>
              <StyledTableCell align="right">{row.low}</StyledTableCell>
              <StyledTableCell align="right">{row.open}</StyledTableCell>
              <StyledTableCell align="right">{row.close}</StyledTableCell>
              <StyledTableCell align="right">{row.volume}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
