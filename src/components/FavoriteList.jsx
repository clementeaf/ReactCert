import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/FavoriteList.css'
import Coin from './Coin'
import Empty from './Empty'

const FavoriteList = (props) => {

  const { favoriteCoins } = props;

  return (
    <div className='favoriteList'>
        {!favoriteCoins.length ? (
          <Empty />
        ) : (
          favoriteCoins.map((coin) => (
               <Coin key={coin.data.id} data={coin.data} />
          ))
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      favoriteCoins: state.favoriteCoins,
  };
}

export default connect(mapStateToProps, null)(FavoriteList);