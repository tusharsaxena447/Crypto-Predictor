import { useEffect, useState } from "react"


export default function PriceDiv() {
    const [datas, setDatas] = useState(0)
    useEffect(()=>{
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
  .then(response => response.json())
  .then(data => setDatas(data))
  .catch(error => console.error(error));
    },[])
    console.log(datas)
  return (
    <>
    <div className="container flex flex-col border-4 mt-7 ms-5 p-5  h-[50%] w-[50%]">
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
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        {/* </div> */}
      </div>
    </div>
        </div>
        <p className="m-1 text-5xl">{datas.USD}</p>
    </div>
    </>
  )
}
