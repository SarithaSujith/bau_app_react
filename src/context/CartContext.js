import { useState, createContext } from 'react';
import Data from '../data';

export const cartContext = createContext();

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(null);
	const [numCartItems, setNumCartItems] = useState(0);
	const [data, setData] = useState(Data);

	// if (!processing) {
	return (
		<cartContext.Provider
			value={{
				cartItems,
				setCartItems,
				numCartItems,
				setNumCartItems,
				data,
				setData,
			}}
		>
			{children}
		</cartContext.Provider>
	);
	// }
};

export default CartProvider;
