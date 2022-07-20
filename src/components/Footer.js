import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div>
			<div className='card-body bg-dark text-light mt-5 py-4'>
				<h5 className='card-title'>Our Products and Services</h5>
				<p className='card-text'>Subscribe to....</p>
				<Link to='/subscribe'><button className='btn btn-dark'>
					 Click here to Subscribe
          </button>
				</Link>
				<p className='sm'>Copyright &copy; 2022 @BauM.com</p>
			</div>
			<div className='card-footer text-muted'>
				<a href='#' target='_blank'>
					<i className='bi bi-facebook bg-dark text-light '></i>
				</a>
				<a href='#' target='_blank'>
					<i className='bi bi-envelope-fill mx-3 bg-dark text-light'></i>
				</a>
				<a href='#' target='_blank'>
					<i className='bi bi-instagram mx-3 bg-dark text-light'></i>
				</a>
			</div>
		</div>
	);
}

export default Footer;
