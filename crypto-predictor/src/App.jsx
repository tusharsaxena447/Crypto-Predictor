// import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Search';
import PriceDiv from './components/PriceDiv';
// import CustomizedTables from './components/Table_data';

function App() {
  // const [datas, setDatas] = useState([])
  // useEffect(()=>{
  //   fetch('https://min-api.cryptocompare.com/data/social/coin/latest?coin=BTC&api_key=d274cf3fd9d1aee99d3f2e6de2edd450d4b8e34c0ef6890b82da9266b2f2a61d')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
  // },[])
  // console.log(datas[])
  return (
    <>
    <Navbar/>
    <PriceDiv/>
    {/* <CustomizedTables/> */}
    </>
  )
}

export default App
