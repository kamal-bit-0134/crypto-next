'use client'

import Image from 'next/image'
import styles from './page.module.css'
import SearchBar from '@/components/SearchBar'
import { useEffect, useState } from 'react'
import CoinList from '@/components/CoinList'
import Header from '@/components/Header'



export default function Home() {
  let [coinsData,setCoinsData] = useState(null)
  const [ search,setSearch] = useState('')
  let [filteredCoins,setFilteredCoins] = useState(null)

  // if(coinsData){
  //   let temp = coinsData.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()));
  //   setFilteredCoins(temp)
  // }

  const handleChange = e => {
    
    e.preventDefault();
    
    setSearch(e.target.value.toLowerCase());
    let temp = coinsData.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredCoins(temp)

  }


  useEffect(()=>{

    const getServerSideProps = async() => {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en");
    
      const coinsDataVal = await res.json();
      setCoinsData(coinsDataVal)
      setFilteredCoins(coinsDataVal)

    
    }
    getServerSideProps()

  },[])


  return (
    <main className={`${styles.main} ${styles.all}`}>
      <Header/>
      <SearchBar type='text' placeholder='Search' onChange={handleChange} />
      {filteredCoins ?
      <CoinList coinsData={filteredCoins}/>:""}
    </main>
  )
}



