import { useEffect, useState } from "react"


export default function Social_media() {
    const [datas,setDatas] = useState(0)
    useEffect(()=>{
    fetch('https://min-api.cryptocompare.com/data/social/coin/latest?coin=BTC&api_key=d274cf3fd9d1aee99d3f2e6de2edd450d4b8e34c0ef6890b82da9266b2f2a61d')
  .then(response => response.json())
  .then(data => setDatas(data))
  .catch(error => console.error(error));
    },[])
    console.log(datas)
  return (
    <>
    <div className="container">
        <div className="heading flex justify-center items-center bg-black text-white h-10 mt-5 text-2xl">
          <span>What&apos;s Going On Social Media</span>  
        </div>
        

<div className="flex m-5 justify-evenly">
<div className="card">
<img src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png" alt="" />
  <svg viewBox="0 0 24 24" xmlns="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div className="card__content">
    <p className="card__title">Twitter
    </p><p className="card__description"><span className="font-bold">Points</span>: {datas && datas.Data.Twitter.Points} <br /><span className="font-bold">Account Created</span>: {datas && datas.Data.Twitter.account_creation} <br /><span className="font-bold">Followers</span>: {datas && datas.Data.Twitter.followers} <br /><span className="font-bold">Following</span>: {datas && datas.Data.Twitter.following} <br /><span className="font-bold">Lists</span>: {datas && datas.Data.Twitter.lists}</p>
  </div>
</div>
<div className="card">
<img src="https://logowik.com/content/uploads/images/reddit-icon2825.logowik.com.webp" alt="" />
  <svg viewBox="0 0 24 24" xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJk69iN6ZOn7krG0d_wtH01MR0CIjDuTAGg&s"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div className="card__content">
  {/* <p className="card__title mt-0">Twitter</p> */}
    <p className="card__description"><span className="font-bold">Points</span>: {datas && datas.Data.Reddit.Points} <br /><span className="font-bold">Active Users</span>: {datas && datas.Data.Reddit.active_users} <br /><span className="font-bold">Comments Per Day</span>: {datas && datas.Data.Reddit.comments_per_day} <br /><span className="font-bold">Comments Per Hour</span>:{datas && datas.Data.Reddit.comments_per_hour} <br /><span className="font-bold">Community Creation</span>: {datas && datas.Data.Reddit.community_creation} <br /><span className="font-bold">Posts Per Day</span>: {datas && datas.Data.Reddit.posts_per_day} <br /><span className="font-bold">Posts Per Hour</span>: {datas && datas.Data.Reddit.posts_per_hour} <br /><span className="font-bold">Subscribers</span>: {datas && datas.Data.Reddit.subscribers}</p>
  </div>
</div>
<div className="card">
<img src="https://c1.tablecdn.com/pa/pa-logo.png" alt="" />
  <svg viewBox="0 0 24 24" xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJk69iN6ZOn7krG0d_wtH01MR0CIjDuTAGg&s"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div className="card__content">
    <p className="card__title">Crypto Compare
    </p><p className="card__description"><span className="font-bold">Points</span>: {datas && datas.Data.CryptoCompare.Points} <br /><span className="font-bold">Comments</span>: {datas && datas.Data.CryptoCompare.Comments} <br /><span className="font-bold">Followers</span>: {datas && datas.Data.CryptoCompare.Followers} <br /><span className="font-bold">Page Views</span>:{datas && datas.Data.CryptoCompare.PageViews} <br /><span className="font-bold">Posts</span>: {datas && datas.Data.CryptoCompare.Posts} </p>
  </div>
</div>

</div>

    </div>
    
      
    </>
  )
}
