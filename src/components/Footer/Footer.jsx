import React from 'react';
import facebook from '../../assets/Icons/facebook.png'
import twitter from '../../assets/Icons/twitter.png'
import insta from '../../assets/Icons/instagram.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-6 my-container px-4 p-2 lg:py-10'>
            <div className='col-span-2 '>
                <h1 className='font-bold text-2xl'>Job Wise</h1>
                <p className='lg:w-3/4 pt-2'><small>Find your dream job today with our job Wize. Register for free and start your job search today!</small></p>
                {/* icons */}
                <div className='flex gap-2 mt-4'>
                    <Link to='/'>
                    <div className='w-11 h-11 bg-white' style={{borderRadius: '50%'}}>
                        <img src={facebook} alt="" />
                    </div>
                    </Link>
                    <Link to='/'>
                    <div className='w-11 h-11 bg-white' style={{borderRadius: '50%'}}>
                        <img src={twitter} alt="" />
                    </div>
                    </Link>
                    <Link to='/'>
                    <div className='w-11 h-11 bg-white' style={{borderRadius: '50%'}}>
                        <img src={insta} alt="" />
                    </div>
                    </Link>
                </div>
            </div>
            {/* company */}
            <div className='mt-4 lg:mt-2'>
                <h3 className='text-1xl'>Company</h3>
                <ul className='pt-2'>
                    <small>
                    <li className='py-1'>
                        <Link to='/'>About us</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/'>Work</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/'>Latest News</Link>
                    </li>
                    <li className='pt-1'>
                        <Link to='/'>Careers</Link>
                    </li>
                    </small>
                </ul>
            </div>

            {/* product */}
            <div className='mt-4 lg:mt-2'>
                <h3 className='text-1xl'>Product</h3>
                <ul className='pt-2'>
                    <small>
                    <li className='py-1'>
                        <Link to='/'>Prototype</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/'>Plans & Pricing</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/'>Customers</Link>
                    </li>
                    <li className='pt-1'>
                        <Link to='/'>Integrations</Link>
                    </li>
                    </small>
                </ul>
            </div>

            {/* support */}
            <div className='mt-4 lg:mt-2'>
                <h3 className='text-1xl'>Support</h3>
                <ul className='pt-2'>
                    <small>
                    <li className='py-1'>
                        <Link to='/'>Help Desk</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/'>Sales</Link>
                    </li>
                    <li className='py-1'>
                        <Link to='/'>Become a Partner</Link>
                    </li>
                    <li className='pt-1'>
                        <Link to='/'>Developers</Link>
                    </li>
                    </small>
                </ul>
            </div>

            {/* contact */}
            <div className='mt-4 lg:mt-2'>
                <h3 className='text-1xl'>Contact</h3>
                <ul className='pt-2'>
                    <small>
                    <li className='py-1'>524 Broadway , NYC</li>
                    
                    <li className='pt-1'>+1 777 - 978 - 5570</li>
                    </small>
                </ul>
            </div>
            
        </div>
        </div>
    );
};

export default Footer;