// //  import React, { useState } from 'react';
// //  import "../styles/buy.css";
// //  import para from "../images/paracetamol.webp"
// //  import cough from "../images/benadryl.jpg"
// //  import asprin from "../images/aspirin.jpg" 
// //  import metformin from "../images/metformin.jpg"
// //  import glimi from "../images/glimin.webp"
// //  import telme from "../images/telmisartan.jpg"
// //   Sample product data
// //  const products = [
// //    {
// //      id: 1,
// //      name: 'Paracetamol',
// //      description: 'Fever and pain relief',
// //      price: 5.99,
// //      image:para,
// //    },
// //    {
// //      id: 2,
// //      name: 'Cough Syrup',
// //      description: 'Relieves cough and cold',
// //      price: 8.99,
// //      image: cough,
// //    },
// //    {
// //      id: 3,
// //      name: 'Aspirin',
// //      description: 'Pain and inflammation relief',
// //      price: 6.99,
// //      image:asprin,
// //    },
// //    {
// //      id: 4,
// //      name: 'Metformin',
// //      description: 'Maintains blood sugar level',
// //      price: 6.99,
// //      image:metformin,
// //    },
// //    {
// //      id: 5,
// //      name: 'Telmisartin',
// //      description: 'Maintains the blood pressure',
// //      price: 6.99,
// //      image:telme,
// //    },
// //    {
// //      id: 6,
// //      name: 'Glimipride ',
// //      description: ' Treats high blood sugar levels ',
// //      price: 6.99,
// //      image:glimi,
// //    },
// //    {
// //      id: 7,
// //      name: 'Aspirin',
// //      description: 'Pain and inflammation relief',
// //      price: 6.99,
// //      image:asprin,
// //    },
// //    {
// //      id: 8,
// //      name: 'Aspirin',
// //      description: 'Pain and inflammation relief',
// //      price: 6.99,
// //      image:asprin,
// //    },
// //    {
// //      id: 9,
// //      name: 'Aspirin',
// //      description: 'Pain and inflammation relief',
// //      price: 6.99,
// //      image:asprin,
// //    },
// //    {
// //      id: 10,
// //      name: 'Aspirin',
// //      description: 'Pain and inflammation relief',
// //      price: 6.99,
// //      image:asprin,
// //    },];


// //  function Buy() {
// //    const [searchQuery, setSearchQuery] = useState('');
  
// //     Filter products based on search query
// //    const filteredProducts = products.filter(product =>
// //      product.name.toLowerCase().includes(searchQuery.toLowerCase())
// //    );

// //    return (
// //      <div className="medicine-store">
// //        <h1>Medicine Store</h1>

// //        <div className="search-bar">
// //          <input
// //            type="text"
// //            placeholder="Search for products"
// //            value={searchQuery}
// //            onChange={e => setSearchQuery(e.target.value)}
// //          />
// //        </div>

// //        <div className="product-list">
// //          {filteredProducts.map(product => (
// //            <div key={product.id} className="product">
// //              <img src={product.image} alt={product.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
// //              <h3>{product.name}</h3>
// //              <p>{product.description}</p>    
// //              <p>Price: ${product.price}</p>
// //              <button>Add to Cart</button>
// //            </div>
// //          ))}
// //        </div>
// //      </div>
// //    );
// //  }

// //  export default Buy;


// import React, { useState } from 'react';
// import '../styles/buy.css';
// import para from '../images/paracetamol.webp';
// import cough from '../images/benadryl.jpg';
// import asprin from '../images/aspirin.jpg';
// import metformin from '../images/metformin.jpg';
// import glimi from '../images/glimin.webp';
// import telme from '../images/telmisartan.jpg';

// const products = [
//   {
//     id: 1,
//     name: 'Paracetamol',
//     description: 'Fever and pain relief',
//     price: 5.99,
//     image: para,
//   },
//   {
//          id: 2,
//          name: 'Cough Syrup',
//          description: 'Relieves cough and cold',
//          price: 8.99,
//          image: cough,
//        },
//        {
//          id: 3,
//          name: 'Aspirin',
//          description: 'Pain and inflammation relief',
//          price: 6.99,
//          image:asprin,
//        },
//        {
//          id: 4,
//          name: 'Metformin',
//          description: 'Maintains blood sugar level',
//          price: 6.99,
//          image:metformin,
//        },
//        {
//          id: 5,
//          name: 'Telmisartin',
//          description: 'Maintains the blood pressure',
//          price: 6.99,
//          image:telme,
//        },
//        {
//          id: 6,
//          name: 'Glimipride ',
//          description: ' Treats high blood sugar levels ',
//          price: 6.99,
//          image:glimi,
//        },
// ];

// function Buy() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cart, setCart] = useState([]);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <div className="medicine-store">
//       <h1>Medicine Store</h1>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for products"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="product-list">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <button className='btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       <div className="cart">
//         <h2>Shopping Cart</h2>
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Buy;

// import React, { useState } from 'react';
// import '../styles/buy.css';
// import para from '../images/paracetamol.webp';
// import cough from '../images/benadryl.jpg';
// import asprin from '../images/aspirin.jpg';
// import metformin from '../images/metformin.jpg';
// import glimi from '../images/glimin.webp';
// import telme from '../images/telmisartan.jpg';

// const products = [
//   {
//         id: 1,
//         name: 'Paracetamol',
//         description: 'Fever and pain relief',
//         price: 5.99,
//         image: para,
//       },
//       {
//              id: 2,
//              name: 'Cough Syrup',
//              description: 'Relieves cough and cold',
//              price: 8.99,
//              image: cough,
//            },
//            {
//              id: 3,
//              name: 'Aspirin',
//              description: 'Pain and inflammation relief',
//              price: 6.99,
//              image:asprin,
//            },
//            {
//              id: 4,
//              name: 'Metformin',
//              description: 'Maintains blood sugar level',
//              price: 6.99,
//              image:metformin,
//            },
//            {
//              id: 5,
//              name: 'Telmisartin',
//              description: 'Maintains the blood pressure',
//              price: 6.99,
//              image:telme,
//            },
//            {
//              id: 6,
//              name: 'Glimipride ',
//              description: ' Treats high blood sugar levels ',
//              price: 6.99,
//              image:glimi,
//            },
    
// ];

// function Buy() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cart, setCart] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     setTotalAmount((prevTotalAmount) => prevTotalAmount + product.price);
//   };

//   const handleRemoveFromCart = (product) => {
//     setCart((prevCart) => prevCart.filter((item) => item !== product));
//     setTotalAmount((prevTotalAmount) => prevTotalAmount - product.price);
//   };

//   const proceedToCheckout = () => {
//     // Implement your checkout logic here (e.g., make a payment).
//     // You can use the 'cart' array and 'totalAmount' for further processing.
//     alert(`Total Amount: $${totalAmount}. Proceed to checkout!`);
//   };

//   return (
//     <div className="medicine-store">
//       <h1>Medicine Store</h1>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for products"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="product-list">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="product">
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{ maxWidth: '200px', maxHeight: '200px' }}
//             />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <button className="btn" onClick={() => handleAddToCart(product)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="cart">
//         <h2>Shopping Cart</h2>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//               <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//         <p>Total Amount: ${totalAmount}</p>
//         <button className="checkout-btn" onClick={proceedToCheckout}>
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Buy;



import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import '../styles/buy.css';
import para from '../images/paracetamol.webp';
import cough from '../images/benadryl.jpg';
import asprin from '../images/aspirin.jpg';
import metformin from '../images/metformin.jpg';
import glimi from '../images/glimin.webp';
import telme from '../images/telmisartan.jpg';
import CartPage from './CartPage';

const products = [
  {
            id: 1,
            name: 'Paracetamol',
            description: 'Fever and pain relief',
            price: 5.99,
            image: para,
          },
          {
                 id: 2,
                 name: 'Cough Syrup',
                 description: 'Relieves cough and cold',
                 price: 8.99,
                 image: cough,
               },
               {
                 id: 3,
                 name: 'Aspirin',
                 description: 'Pain and inflammation relief',
                 price: 6.99,
                 image:asprin,
               },
               {
                 id: 4,
                 name: 'Metformin',
                 description: 'Maintains blood sugar level',
                 price: 6.99,
                 image:metformin,
               },
               {
                 id: 5,
                 name: 'Telmisartin',
                 description: 'Maintains the blood pressure',
                 price: 6.99,
                 image:telme,
               },
               {
                 id: 6,
                 name: 'Glimipride ',
                 description: ' Treats high blood sugar levels ',
                 price: 6.99,
                 image:glimi,
               },
               {
                id: 7,
                name: 'Glimipride ',
                description: ' Treats high blood sugar levels ',
                price: 6.99,
                image:glimi,
              },
             
              {
                id: 8,
                name: 'Glimipride ',
                description: ' Treats high blood sugar levels ',
                price: 6.99,
                image:glimi,
              },
              {
                id: 9,
                name: 'Glimipride ',
                description: ' Treats high blood sugar levels ',
                price: 6.99,
                image:glimi,
              },
              {
                id: 10,
                name: 'Glimipride ',
                description: ' Treats high blood sugar levels ',
                price: 6.99,
                image:glimi,
              },
];

function Buy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setTotalAmount((prevTotalAmount) => prevTotalAmount + product.price);
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item !== product));
    setTotalAmount((prevTotalAmount) => prevTotalAmount - product.price);
  };

  const proceedToCheckout = () => {
    // Implement your checkout logic here (e.g., make a payment).
    console.log(`You've bought ${JSON.stringify(cart)} for $${totalAmount}`);


    // You can use the 'cart' array and 'totalAmount' for further processing.
    alert(`Total Amount: $${totalAmount}. Proceed to checkout!`);

  };
  return (
    <div className="medicine-store">
      <h1>Medicine Store</h1>


      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className="btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
        <Link to="/cart">View Cart</Link>
          <CartPage
            cart={cart}
            totalAmount={totalAmount}
            handleRemoveFromCart={handleRemoveFromCart}
            proceedToCheckout={proceedToCheckout}
          />
    </div>
  );
}

export default Buy;
