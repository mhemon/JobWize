import React from 'react';
import manImage from '../assets/All Images/man.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='my-container bg-blue-50 flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 px-4'>
                {/* text part */}
                <h1 className='font-bold text-black text-2xl md:text-5xl lg:leading-tight lg:pt-10'>
                    <span>One Step </span>
                    <span className="hidden md:inline">
                        <br />
                    </span>
                    <span>Closer To Your </span>
                    <span className="hidden md:inline">
                        <br />
                    </span>
                    <span style={{ color: '#7E90FE'}} className='flex justify-center md:inline'>
                    Dream Job
                    </span>
                </h1>
                <p className='text-gray-500 lg:w-3/4 py-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link to='applied-jobs'><div className='text-center lg:text-start'><button className='btn'>Get Started</button></div></Link>
            </div>
            <div className='w-full md:w-1/2 md:ml-4'>
                {/* img part */}
                <img src={manImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;