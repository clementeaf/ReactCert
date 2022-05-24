import React, { useState, useEffect } from 'react'
import '../assets/styles/components/Coin.css'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import {setFavorite, deleteFavorite} from '../actions'
import CoinDetails from './CoinDetails'
import Modal from './Modal'
import {AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import useModal from '../custom-hooks/useModal'

const Coin = (props) => {
  const [favorite, setFavorite] = useState(false)
  const {modal, handleCloseModal, handleOpenModal, } = useModal()

  const { data, favoriteCoins } = props;
  const { symbol, image, name, current_price, low_24h, id } = data;

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false)
  };

  const isFavorite = () => {
    const result = favoriteCoins.filter(
      (favoriteCoins) => favoriteCoins.data.id === id,
    )
    if (result.length) {
      setFavorite(true);
    }
  }

  useEffect(() => {
    isFavorite();
  }, [])



  return (
    <div className='coin-card'>
      <div className='image-cont'>
        <img className='coin-image' src={image} alt="Coin" />
      </div>
      {/*  */}
      <div className='card-info'>
        <p className='coin-name'>{name}</p>
        <span>{symbol}</span>
        <span>{current_price}</span>
        <span>{low_24h}</span>
        <div className='options'>
          <AiOutlinePlus className='icon' onClick={() => handleSetFavorite(id)}/>
          <AiOutlineLine className='icon' onClick={() => handleDeleteFavorite(id)}/>
            <p className='more-details' onClick={handleOpenModal}>
              More details...
            </p>
        </div>
        <Modal isOpen={modal} onClose={handleCloseModal}>
          <CoinDetails data={data}/>
      </Modal>
      </div>
    </div>
  )
};

Coin.propTypes = {
  data: propTypes.func,
}

// react-redux native with HOC
const mapStateToProps = (state) => {
  return {
    favoriteCoins: state.favoriteCoins, 
  }
} 

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
} 

//HOC
export default connect(mapStateToProps, mapDispatchToProps)(Coin);

// Alias Component in the browser
Coin.displayName = 'Coin Component'