import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marketplace from './pages/Marketplace';
import Sell from './pages/Sell';
import Contactus from './pages/Contactus';
import Subscribe from './pages/Subscribe';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Registration from './pages/Registration'
import Cart from'./components/Cart'
function App() {
	return (
		<div className='App'>
			<Navbar />
				
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/marketplace' element={<Marketplace />} />
					<Route path='/sell' element={<Sell />} />
					<Route path='/contactus' element={<Contactus />} />
					<Route path='/subscribe' element={<Subscribe />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/registration' element={<Registration/>}/>
					<Route path='/cart' element={<Cart/>}/>
				</Routes>
				<Footer />
		</div>
	);
}


export default App;
