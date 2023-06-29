'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './Coin.module.css'
import Header from '@/components/Header'

const Coin = ({params}) => {

    const[coin,setCoin] = useState(null)

    useEffect(()=>{

        const getServerSideProps = async() => {
          const res = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`);
        
          const coinsDataVal = await res.json();
          console.log(coinsDataVal)
          setCoin(coinsDataVal)
          
    
        
        }
        getServerSideProps()
    
      },[])

      if(coin==null) return null
      
  return (
    
<div className={`${styles.main}`} style={{paddingTop:'0'}} >
    <Header/>
    <div className={styles.coin__page}>
    <div className={styles.coin__container}>
        <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin__image}
        />
        <h1 className={styles.coin__name}>{coin.name}</h1>
        <p className={styles.coin__ticker}>{coin.symbol}</p>
        <p className={styles.coin__current}>
            {coin.market_data.current_price.usd}
        </p>
    </div>
    </div>
    </div>
    )
}

export default Coin