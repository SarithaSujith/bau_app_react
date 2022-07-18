import React from 'react';
import { Link } from 'react-router-dom';

function Registration() {
	return (
		<div>
			<div className='container-fluid mt-2'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-lg-12 col-xl-11'>
						<div className='card text-black'>
							<div className='card-body p-md-5'>
								<div className='row justify-content-center'>
									<div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
										<h1 className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
											Register
										</h1>

										<form className='mx-1 mx-md-4'>
											<div className='d-flex flex-row align-items-center mb-4'>
												<i className='fas fa-user fa-lg me-3 fa-fw'></i>
												<div className='form-outline flex-fill mb-0'>
													<input
														type='text'
														id='form3Example1c'
														className='form-control'
														required
													/>
													<label className='form-label' for='form3Example1c'>
														Company Name
													</label>
												</div>
											</div>

											<div className='d-flex flex-row align-items-center mb-4'>
												<i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
												<div className='form-outline flex-fill mb-0'>
													<input
														type='text'
														id='form3Example3c'
														className='form-control'
														required
													/>
													<label className='form-label' for='form3Example3c'>
														Adress
													</label>
												</div>
											</div>

											<div className='d-flex flex-row align-items-center mb-4'>
												<i className='fas fa-lock fa-lg me-3 fa-fw'></i>
												<div className='form-outline flex-fill mb-0'>
													<input
														type='email'
														id='form3Example4c'
														className='form-control'
														required
													/>
													<label
														className='form-label'
														htmlFor='email'
														for='form3Example4c'
													>
														Email
													</label>
												</div>
											</div>

											<div className='d-flex flex-row align-items-center mb-4'>
												<i className='fas fa-key fa-lg me-3 fa-fw'></i>
												<div className='form-outline flex-fill mb-0'>
													<input
														type='password'
														id='form3Example4cd'
														className='form-control'
														required
													/>
													<label
														className='form-label'
														htmlFor='password'
														for='form3Example4cd'
													>
														Password
													</label>
												</div>
											</div>

											<div className='form-check d-flex justify-content-center mx-4 mb-5'>
												<input
													className='form-check-input me-2'
													type='checkbox'
													value=''
													id='form2Example3c'
												/>
												<label className=' form-check-label ' for='form2Example3'>
													I agree all statements in{' '}
													<a href='#!'>Terms of service</a>
												</label>
                        <lable className='form-label '>
												Already have an account?
											</lable>
											</div>
											
											<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
												<button type='button' className='btn btn-dark btn-lg mx-5'>
													Register
												</button>

												<Link to='/signin'>
													<button
														type='button'
														className='btn btn-dark btn-lg mx-4'
													>
														Signin
													</button>
												</Link>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Registration;
