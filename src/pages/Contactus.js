import React from 'react';
import { Map, Marker } from 'pigeon-maps';

function Contactus() {
	return (
		<div>
			<h1 className='text-center mt-3 mb-4'>Contact Us</h1>
			<div className='container-fluid'>
				<div className='row my-2 align-items-center'>
					<div className='col-md'>
						<div className='mb-2'>
							<label className='form-label '>Your Name *</label>
							<input
								type='email'
								className='form-control mb-3'
								placeholder=' Enter your name'
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Phone Number *</label>
							<input
								type='email'
								className='form-control mb-3'
								placeholder='Phone Number'
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Email address *</label>
							<input
								type='email'
								className='form-control mb-3'
								placeholder='name@example.com'
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Your Company *</label>
							<input
								type='email'
								className='form-control mb-3'
								placeholder='Company Name'
							/>
						</div>
						<div className='mb-3'>
							<label for='exampleFormControlTextarea1' className='form-label'>
								Your Question *
							</label>
							<textarea
								className='form-control mb-3'
								id='exampleFormControlTextarea1'
								rows='3'
							></textarea>
						</div>
						<button className='btn btn-dark mb-3'>Send</button>
					</div>
					<div id='map' className='col-xs-12 col-md-6 my-2'>
						<p>Our Address</p>
						<p>Lorem ipsum dolor</p>

						<Map
							height={300}
							defaultCenter={[48.9471, 9.4342]}
							defaultZoom={11}
						>
							<Marker width={50} anchor={[50.879, 4.6997]} />
						</Map>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contactus;
