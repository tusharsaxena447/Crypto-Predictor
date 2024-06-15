import { useEffect, useState } from "react"


export default function Top_news({curr}) {
  const[datas,setDatas] =  useState(0)
  const[limit,setLimit] = useState(10)
  const[loading,setLoading] = useState(true)
  function addmore(){
   limit<50 ? setLimit(limit+10) : ""
    console.log(limit)

  }
  useEffect(()=>{
  fetch(`https://min-api.cryptocompare.com/data/news/?categories=BTC`)
  .then(response => response.json())
  .then(data => {setDatas(data.slice(0,limit))
    setLoading(false)
  })
  .catch(error => console.error(error));
  },[limit])
  // console.log(datas && datas[0].body.split("").splice(0,20).join(""))
  return (
    <>
  {  loading ? <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" /> :
    <div className="container overflow-auto p-5 flex flex-wrap gap-2">
    {datas && datas.map((e)=>(
      <a href={e.url} target="_blank" key={e.id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={e.imageurl} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title.split("").splice(0,50).join("")}...</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.body.split("").splice(0,100).join("")}...</p>
    </div>
</a>
    ))}
    
    {limit <50 ? <button type="button" className="text-white justify-center w-[100%] bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
    onClick={()=>addmore()}
    >
Load More
</button> : 
<button type="button" className="text-white w-[100%] bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Load More</button>
}
    </div>
   }   
    </>
  )
}
