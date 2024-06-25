import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Chart({curr,crypto}) {
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
     const time = []
     const price = []

     Row.Data && Row.Data.map((e)=>{
        let date = new Date(e.time*1000)
        time.push(date)
        price.push(e.close)
      })

  return (
    <>
    <div className='container  flex m-5 items-center justify-end'>
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
     <LineChart
      xAxis={[{ data:  time,
      scaleType: 'time',
        valueFormatter: (date) => `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`.toString(),
       }]}
      series={[
        {
          label : 'Price:',  
          data: price,
          min : 40000,
          area: true,
          showMark: false
        },
      ]}
      width={850}
      height={300}
    /> 
    </>
  )
}
