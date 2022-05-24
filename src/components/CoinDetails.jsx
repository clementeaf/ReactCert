import React from 'react'
import '../assets/styles/components/CoinDetails.css'

const CoinDetails = (props) => {
  const { data } = props;
  const { image, name, circulating_supply, max_supply, last_updated, market_cap_rank, market_cap, market_cap_change_24h, total_volume, total_supply } = data;
  return (
    <div className='box-details'>
        <div className='coin-img-cont'>
            <img className='image-details' src={image} alt="" />
        </div>
        <div className='coin-details-info'>
          <div className='details-content'>
            <h3>Name :</h3><p>{name}</p>
          </div>
          <div className='details-content'>
            <h3>Market Cap Rank :</h3><p>{market_cap_rank}</p>
          </div>
          <div className='details-content'>
            <h3>Market Cap :</h3><p>{market_cap}</p>
          </div>
          <div className='details-content'>
            <h3>Market Cap Change 24h :</h3><p>{market_cap_change_24h}</p>
          </div>
          <div className='details-content'>
            <h3>Circulating Supply :</h3><p>{circulating_supply}</p>
          </div>
          <div className='details-content'>
            <h3>Total Volume :</h3><p>{total_volume}</p>
          </div>
          <div className='details-content'>
            <h3>Total Supply :</h3><p>{total_supply}</p>
          </div>
          <div className='details-content'>
            <h3>Max Supply :</h3><p>{max_supply}</p>
          </div>
          <div className='details-content'>
            <h3>Last Update :</h3><p>{last_updated}</p>
          </div>
        </div>
    </div>
  )
}

export default CoinDetails