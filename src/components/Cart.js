import React,{useState, useEffect} from 'react'

function Cart({cartItems, setCartItems, handleChange}) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id)=>{
    let arr = cartItems.filter((values) => values.id !== id);
    setCartItems(arr)
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cartItems.map((values) => (ans += values.amount * values.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className='container -fluid mx-2'>
    <div className='row mt-5 mx-2'>
      {cartItems.map((values) => (
        <div className='card' key={values.id}>
          <div className='card-img-top'>
            <img src={values.image} alt="" />
            <p className='card-title'>{values.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(values, 1)}>+</button>
            <button>{values.qty}</button>
            <button onClick={() => handleChange(values, -1)}>-</button>
          </div>
          <div>
            <span>{values.price}</span>
            <button onClick={() => handleRemove(values.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div >
        <span>Total Price of your Cart</span>
        <span>€ - {price}</span>
      </div>
    </div>

    </div>
  )
}

export default Cart