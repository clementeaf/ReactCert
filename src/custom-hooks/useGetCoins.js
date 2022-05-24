import { useState } from 'react'
import axios from 'axios'
import { useLocalStorage } from './useLocalStorage';

const useGetCoins = () => {
    const [data, setData] = useLocalStorage("coin", "");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getCoins() {
        try {
          const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
          const result = response.data
          console.log(result);
          setData(result)
          setLoading(false)
          setError(false)
        } catch(error) {
          setLoading(false)
          setError(error)
        }
      };

      return { data, loading, error, getCoins };    
};

export default useGetCoins;
