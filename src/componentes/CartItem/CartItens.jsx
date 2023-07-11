import React, { useContext } from 'react';
import { BsCartDashFill} from 'react-icons/bs';

import './CartItens.css';
import formatCurrency from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function CartItens({data}) {
  
  const { cartItens, setCartItens } = useContext(AppContext);
  const {id, thumbnail, title, price} = data;

  const handleRemoveItem = () => {
    const updatedItens = cartItens.filter((item)=> item.id != id);
    setCartItens(updatedItens);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} 
        alt="imagem do produto" 
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title} </h3>
        <h3 className="cart-item-price ">{formatCurrency(price, 'BRL')} </h3>

        <button 
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }>
            
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItens;

CartItens.propTypes = {
  data: propTypes.object
}.isRequired;
