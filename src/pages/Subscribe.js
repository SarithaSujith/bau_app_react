import React from 'react';
import { Link } from 'react-router-dom';

function Subscribe() {
	return (
		<>
			<h1 classNameName=' mt-5 text-align-center'>Subscribe</h1>
			<div className='container-fluid w-50 '>
				<div className='card mb-4 mt-5 '>
					{/* <ul className='list-group list-group-flush'>
						<li className='list-group-item'>Cras justo odio</li>
						<li className='list-group-item'>Dapibus ac facilisis in</li>
						<li className='list-group-item'>Vestibulum at eros</li>
					</ul> */}
					<div className='input-group-prepend mb-5'>
						<div className='input-group-text'>
							<input
								type='radio'
								aria-label='Radio button for following text input'
							/>
							<label className='custom-file-label mx-4' for='Radio button'>
								Monthly
							</label>
						</div>
					</div>
					<div className='input-group-prepend mb-3'>
						<div className='input-group-text'>
							<input
								type='radio'
								aria-label='Radio button for following text input'
							/>
							<label className='custom-file-label mx-4' for='Radio button'>
								Yearly - Save Up To 100€
							</label>
						</div>
					</div>
					<div className='card-body mt-2  '>
						<Link to='/'>
							<button type='button' className='btn btn-dark mx-4 my-2'>
								{' '}
								Home
							</button>
						</Link>
						<Link to='/registration'>
							<button type='button' class='btn btn-dark mx-4'>
								{' '}
								Registration
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Subscribe;
