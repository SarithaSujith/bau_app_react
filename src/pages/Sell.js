import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

function Sell() {
	const { data, setData } = useContext(cartContext);
	const addHandler = (item) => {
		const newData = data;
		newData.push(item);
		setData(newData);
	};

	return (
		<div className='col-md-9 mt-4 mx-5 align-items-center w-50'>
			<div className='row'>
				<div className='card'>
					<img src='' className='card-img-top mt-2' alt='' />
					<div className='card-body'>
						<h5 className='card-title'>{name}</h5>
						<h2 className='card-text'>Post an item</h2>
					</div>
					<ul className='list-group list-group-flush mb-2'>
						<li className='list-group-item mb-2'>Price</li>

						<li className='list-group-item mb-2'>qty</li>
					</ul>
					<button className='btn btn-dark mb-2' onClick={()=>addHandler(item)}>Add</button>
					<button className='btn btn-dark mb-2'>Remove</button>
				</div>
			</div>
		</div>
	);
}

export default Sell;
