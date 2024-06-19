import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';

export default function Chart() {
    const [Row,setRow] = useState(0)
    useEffect(()=>{
        fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10`)
        .then(response => response.json())
        .then((data) => {
          setRow(data)
        })
        .catch(error => console.error(error));
        
      },[])
     const time = []
     const price = []

     Row.Data && Row.Data.map((e)=>{
        let date = new Date(e.time*1000)
        time.push(date)
        price.push(e.close)
      })
    //   const price = Row.Data && Row.Data.map((e)=>{
    //     return e.high
    //   })
      console.log(time)
    //   console.log(price)
        // console.log(Row)
  return (
    <>
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
      width={1500}
      height={300}
    /> 
    </>
  )
}
