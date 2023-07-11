import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton () {

  const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button type="buttpn"
      className="cart_button"
      onClick={()=> setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      { cartItens.length > 0 && <span className="cart-status">{cartItens.length} </span> }
    </button>
    
  );
}

export default CartButton;
