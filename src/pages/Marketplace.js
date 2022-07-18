import React, { useState } from 'react';
import Data from '../data';
import Cart from '../components/Cart';

function Marketplace() {
	const [data, setdata] = useState(Data);
	const [query, setQuery] = useState('');
	// const [itemCount, setItemCount] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	// const [show, setShow] = useState(true);
	// const onAdd = (item) => {
	//   const exist = cartItems.find((x) => x.id === item.id);
	//   if (exist) {
	//     setCartItems(
	//       cartItems.map((x) =>
	//         x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
	//       )
	//     );
	//   } else {
	//     setCartItems([...cartItems, { ...item, qty: 1 }]);
	//   }
	// };
	const handleClick = (values) => {
		console.log(values);
		// cartItems.push(values)
		if (cartItems.indexOf(values !== -1)) return;
		setCartItems([...cartItems, values]);
		console.log(setCartItems);
	};
	const handleChange = (values, d) => {
		const ind = cartItems.indexOf(values);
		const arr = cartItems;
		arr[ind].qty += d;

		if (arr[ind].qty === 0) arr[ind].qty = 1;
		setCartItems([...arr]);
	};
	const filterResult = (item) => {
		const result = Data.filter((currData) => {
			return currData.category === item;
		});
		setdata(result);
	};
	return (
		<>
			<div className='input-group rounded mt-2 mx-3 w-50'>
				<input
					type='search'
					className='form-control rounded'
					placeholder='Search'
					aria-label='Search'
					aria-describedby='search-addon'
					onChange={(event) => setQuery(event.target.value)}
				/>
				<span className='input-group-text border-0' id='search-addon'>
					<i className=' input-group bi bi-search'></i>
				</span>
			</div>
			<div className='container-fluid mx-2'>
				<div className='row mt-5 mx-2'>
					<div className='col-md-3'>
						<button
							className='btn btn-dark w-100 mb-4'
							onClick={() => setdata(Data)}
						>
							All
						</button>
						<button
							className='btn btn-dark w-100 mb-4'
							onClick={() => filterResult('sand')}
						>
							Sand
						</button>
						<button
							className='btn btn-dark w-100 mb-4'
							onClick={() => filterResult('wood products')}
						>
							Wood products
						</button>
						<button
							className='btn btn-dark w-100 mb-4'
							onClick={() => filterResult('pipes')}
						>
							Pipes
						</button>
						<button
							className='btn btn-dark w-100 mb-4 '
							onClick={() => filterResult('cement')}
						>
							cement
						</button>
					</div>
					<div className='col-md-9'>
						<div className='row'>
							{data
								.filter((values) => {
									if (query === '') {
										return values;
									} else if (
										values.name.toLowerCase().includes(query.toLowerCase())
									) {
										return values;
									}
								})
								.map((values) => {
									const { id, name, price, image } = values;
									return (
										<>
											<div className='col-md-4 mb-4' key={id}>
												<div className='card'>
													<img src={image} className='card-img-top' alt='' />
													<div className='card-body'>
														<h5 className='card-title'>{name}</h5>
														<p>Price: €{price}</p>
														<button
															// onClick={() => setItemCount(itemCount + 1)}
															onClick={() => handleClick(values)}
															className='btn btn-dark'
														>
															Add Cart
														</button>
														<div>
															<i
																className='bi bi-cart'
																
															>
																items:
															</i>
														</div>
													</div>
												</div>
											</div>
										</>
									);
								})}
							<div>
								<Cart
									cartItems={cartItems}
									setCartItems={setCartItems}
									handleChange={handleChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Marketplace;
