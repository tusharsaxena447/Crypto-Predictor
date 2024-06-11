
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
// import { data } from 'autoprefixer';

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





export default function CustomizedTables() {
  function createData(date, high, low, open, close, volume) {
    return {date, high, low, open, close, volume };
  }
  const [Row,setRow] = useState(0)
  useEffect(()=>{
    fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=7')
    .then(response => response.json())
    .then((data) => {
      setRow(data)
    })
    .catch(error => console.error(error));
    
  },[])
    

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
  
  // console.log(col)
  const tabledata = Row && Row.Data.map((e)=>{
   let date = new Date(e.time*1000)
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

   return createData( `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}` ,e.high,e.low,e.open,e.close,e.volumefrom)
})
// console.log(tabledata)
// console.log(Row.Data)
  return (
    <div className=' w-[50%] m-5'>
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
  );
}
