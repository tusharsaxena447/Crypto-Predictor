import { useEffect, useState } from "react"
import CustomizedTables from "./Table_data";
import Top_news from "./Top_news";


export default function PriceDiv() {
    const [datas, setDatas] = useState(0)
    const [curr,setCurr] = useState('USD')
    
    
    useEffect(()=>{ 
      fetch(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${curr}`)
  .then(response => response.json())
  .then(data => setDatas(data))
  .catch(error => console.error(error));
    },[curr])
  //   setInterval(()=>{
  //   fetch(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${curr}`)
  // .then(response => response.json())
  // .then(data => setDatas(data))
  // .catch(error => console.error(error));
  // }
  //   ,7000)
  //   console.log(datas)
    
  return (
    <>
    <div className="container flex  ">
    <div className=" border-4 overflow-auto border-[#0e1219] mt-7 ms-5 p-5  h-[80vh] lg:w-[75%] ">
        <div className="crypto flex justify-between">
        <div className="price">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="" width={'40px'} />
        <p className="m-1 text-xl font-bold">Bitcoin</p>
        </div>
        <div>     
      <div className="relative flex m-2 items-center rounded-md shadow-sm">
        {/* <input
         
        /> */}
        {/* <div className="absolute inset-y-0 right-0 flex items-center"> */}
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
        {/* </div> */}
      </div>
    </div>
        </div>
        <p className="m-1 text-5xl">{datas[curr]? datas[curr] : "Please Wait..."}</p>
        <div className="">
    <CustomizedTables curr={curr}/>
    </div>
    </div>
    <div className="overflow-auto  border-4 border-[#0e1219] mt-7 ms-5 h-[80vh] lg:w-[50%] ">
    <div className="flex h-16 justify-center items-center bg-black font-bold text-3xl text-white sticky top-0">Top News</div>
    <Top_news curr={curr}/>
    </div>
    
    </div>
    
    </>
  )
}
