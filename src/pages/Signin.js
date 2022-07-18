import React from 'react';

function Signin() {
	return (
		<div>
			<h1 className='text-center secondary-link mb-4 mt-4'>Sign In</h1>
			<form className=' container-fluid w-50 '>
				{/* <!-- Email input --> */}
				<div className='form-outline mb-4 '>
					<input type='email' id='form1Example1' className='form-control' />
					<label className='form-label'  htmlFor='email'for='form1Example1'>
						Email address
					</label>
				</div>

				{/* <!-- Password input --> */}
				<div className='form-outline mb-4'>
					<input type='password' id='form1Example2' className='form-control' />
					<label className='form-label'  htmlFor='password' for='form1Example2'>
						Password
					</label>
				</div>

				{/* <!-- 2 column grid layout for inline styling --> */}
				<div className='row mb-4'>
					<div className='col d-flex justify-content-center'>
						{/* <!-- Checkbox --> */}
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='form1Example3'
								checked
							/>
							<label className='form-check-label' for='form1Example3'>
								{' '}
								Remember me{' '}
							</label>
						</div>
					</div>

					<div className='col'>
						{/* <!-- Simple link --> */}
						<a href='#!'>Forgot password?</a>
					</div>
				</div>

				{/* <!-- Submit button --> */}
				<button type='submit' className='btn btn-dark btn-block'>
					Sign in
				</button>
			</form>
		</div>
	);
}

export default Signin;
