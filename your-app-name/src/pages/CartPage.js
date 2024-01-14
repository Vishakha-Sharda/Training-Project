// import React from 'react';

// function CartPage({ cart, totalAmount, handleRemoveFromCart, proceedToCheckout }) {
//   return (
//     <div className="cart-page">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p>Total Amount: ${totalAmount}</p>
//       <button className="checkout-btn" onClick={proceedToCheckout}>
//         Place Order
//       </button>
//     </div>
//   );
// }

// export default CartPage;


import React from 'react';

function CartPage({ cart, totalAmount, handleRemoveFromCart, proceedToCheckout }) {
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart && cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <p>Total Amount: ${totalAmount}</p>
      <button className="checkout-btn" onClick={proceedToCheckout}>
        Place Order
      </button>
    </div>
  );
}

export default CartPage;
