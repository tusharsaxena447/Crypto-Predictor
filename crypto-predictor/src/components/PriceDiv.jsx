import { useEffect, useState } from "react"
import CustomizedTables from "./Table_data";
import Top_news from "./Top_news";
import { Route, Routes } from "react-router-dom";
import Chart from "./Chart";
import coin from '../assets/cryto.json'

export default function PriceDiv() {
    const [datas, setDatas] = useState(0)
    const [curr,setCurr] = useState('USD')
    const [crypto, setCrypto] = useState("BTC")
    const [value, setValue] = useState("")
    const [hidden, setHidden] = useState("hidden")
    
    useEffect(()=>{ 
      fetch(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${curr}`)
  .then(response => response.json())
  .then(data => setDatas(data))
  .catch(error => console.error(error));
    },[curr,crypto])
  function currencyFormat(num) {
    return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
 function handleSubmit(event){
    event.preventDefault()
    if(value in coin){
    setCrypto(value)
      setHidden("hidden")
    }
    else setHidden('flex')
 }
  return (
    <>
    <div className="container flex  ">
    
    <div className=" border-4 overflow-auto border-[#0e1219] mt-7 ms-5 p-5  h-[80vh] lg:w-[75%] ">
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
    <div className="flex justify-center">        
        <div className="relative w-[50%]">
            <input type="search" id="search-dropdown" value={value} onChange={(event)=>{setValue(event.target.value)}} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500" placeholder="Enter Crypto code" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
        <p className={`${hidden} justify-center mt-2 text-sm text-red-600 dark:text-red-500`}><span className="font-medium">Oh, snapp!</span>Please Enter a Valid Crypto Code</p>
</form>
        <div className="crypto flex justify-between">
       
        <div className="price">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="" width={'40px'} />
         
        <p className="m-1 text-xl font-bold">{coin[crypto]}</p>
        
        </div>
        <div>     
      <div className="relative flex m-2 items-center rounded-md shadow-sm">
         <p className="me-2">Currency in</p>
          <select
            id="currency"
            name="currency"
            onChange={e => setCurr(e.target.value)}
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option value={"USD"} >USD</option>
            <option value={"CAD"}>CAD</option>
            <option value={"AED"}>AED</option>
            <option value={"EUR"}>EUR</option>
            <option value={"INR"}>INR</option>
            <option value={"JPY"}>JPY</option>
            <option value={"AUD"}>AUD</option> 
            <option value={"NZD"}>NZD</option> 
          </select>
      </div>
    </div>
        </div>
        <p className="m-1 text-5xl">{datas[curr]? currencyFormat(datas[curr])  : "Please Wait..."}</p>
        <div className="">
    <Routes>
    <Route path="/" element={<CustomizedTables curr={curr} crypto={crypto}/>} />
    <Route path='/chart' element={<Chart curr={curr} crypto={crypto}/>} />   
    </Routes>
    </div>
    </div>
    <div className="overflow-auto  border-4 border-[#0e1219] mt-7 ms-5 h-[80vh] lg:w-[50%] ">
    <div className="flex h-16 justify-center items-center bg-black font-bold text-3xl text-white sticky top-0">Top News</div>
    <Top_news crypto={crypto} />
    </div>   
    </div>   
    </>
  )
}
