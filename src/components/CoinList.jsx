import React, {useEffect} from 'react'
import '../assets/styles/components/CoinList.css'
import Coin from '../components/Coin'
import useGetCoins from '../custom-hooks/useGetCoins'
import Error from './Error'
import Loader from './Loader'

const CoinList = () => {

  const { data, loading, error, getCoins } = useGetCoins();

  useEffect(() => {
    getCoins()
  }, [])


  return (
    <div className='coin-list'>
       {loading ? (
         <Loader />
       ): error ? (
         <Error />
       ): (
        data.map((crypto) => 
          (<Coin key={crypto.id} data={crypto}/>)
        )
       )}  
    </div>
  )
}

export default CoinList