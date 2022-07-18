import React from 'react';
import homeimage1 from '../images/homeimage1.jpg';
import homeimage2 from '../images/homeimage2.jpg';
import homeimage3 from '../images/homeimage3.jpg';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div>
			{/* carosal section */}
			<div
				id='carouselExampleIndicators'
				className='carousel slide'
				data-bs-ride='carousel'
			>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='1'
						aria-label='Slide 2'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='2'
						aria-label='Slide 3'
					></button>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img src={homeimage1} className='d-block w-100' alt='' />
					</div>
					<div className='carousel-item'>
						<img src={homeimage2} className='d-block w-100' alt='' />
					</div>
					<div className='carousel-item'>
						<img src={homeimage3} className='d-block w-100' alt='' />
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
			<div>
				{/* section */}
				<h3 className='text-center  my-3'>Technology-Enabled Shop</h3>
				<div className='container'>
					<p>
						{' '}
						Enable your retail outlet with technology, connect with verified
						Manufactures
					</p>
					<br />

					<Link to='/contactus'>
						<button type='button' className='btn btn-dark mx-1 mt-4 '>
							ContactUs
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
