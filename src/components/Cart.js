import { useState, useEffect, useContext } from 'react';
import { cartContext } from '../context/CartContext';

function Cart() {
	const { cartItems, setCartItems } = useContext(cartContext);
	const [price, setPrice] = useState(0);

	const handleRemove = (id) => {
		let arr = cartItems.filter((values) => values.id !== id);
		setCartItems(arr);
		handlePrice();
	};

	const handlePrice = () => {
		let ans = 0;
		cartItems &&
			cartItems.forEach((values) => (ans += values.qty * values.price));
		setPrice(ans);
	};

	useEffect(() => {
		handlePrice();
	});

	const handleChange = (values, d) => {
		console.log(values);
		console.log(d);
		const ind = cartItems.indexOf(values);
		const arr = cartItems;
		arr[ind].qty += d;

		if (arr[ind].qty === 0) arr[ind].qty = 1;
		setCartItems([...arr]);
	};

	return (
		<div>
			<h2 className='text-center mt-2'>Cart Items</h2>
			<div className='container-fluid w-50 mt-4'>
				<div className='row'>
					<div className='col-xs-12 col-sm-6 col-md-9'>
						{cartItems &&
							cartItems.map((values) => (
								<div className='col-md-8 mb-4' key={values.id}>
									<div className='card'>
										<img className='card-img-top' src={values.image} alt='' />
										<div className='card-body'>
											<p className='card-title'>{values.name}</p>

											<button
												className='btn btn-dark my-2 '
												onClick={() => handleChange(values, 1)}
											>
												+
											</button>
											<button className='btn btn-dark mx-2'>
												{values.qty}
											</button>
											<button
												className='btn btn-dark my-2'
												onClick={() => handleChange(values, -1)}
											>
												-
											</button>

											<p className='text-center'>{values.price}</p>
											<button
												className='btn btn-dark mb-2 my-2'
												onClick={() => handleRemove(values.id)}
											>
												Remove
											</button>
										</div>
									</div>
								</div>
							))}
						<div></div>
						<span className='text-center my-2'>Total Price of your Cart</span>
						<span>€ - {price}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
