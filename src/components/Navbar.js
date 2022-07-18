import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marketplace from '../pages/Marketplace';

function Navbar() {
	
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark'>
				<div className='container-fluid'>
					<Link className='logo' to='/'>
						Bau M
					</Link>
          
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<Link to='/'>
								<li className='nav-item nav-link'>Home</li>
							</Link>
							<Link to='/marketplace'>
								<li className='nav-item nav-link'>Marketplace</li>
							</Link>
							<Link to='/sell'>
								<li className='nav-item nav-link'>Sell</li>
							</Link>
							<Link to='/contactus'>
								<li className='nav-item nav-link'>ContactUs</li>
							</Link>
						<Link to='/cart'>
							<li className='nav-item'>
								<i className='bi bi-cart nav-item nav-link'>0</i>
							</li>
							</Link>

							<Link to='/subscribe' className='nav-link'>
								Subscribe
							</Link>
							<Link to='/signin' className='nav-link'>
								SignIn
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
