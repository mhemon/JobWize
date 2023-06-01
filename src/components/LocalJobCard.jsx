import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const LocalJobCard = ({ job }) => {
    const { companyName, companyLogo, vacancyName, jobLocation, salary, jobType, id } = job
    return (
        <div className='shadow-md rounded-lg border-2 my-2 border-gray-100 flex flex-col md:flex-row md:items-center mx-4'>
            {/* img part */}
            <div className='md:w-48 h-48 px-3 py-3'>
                <img className='w-full h-full bg-gray-100 border' src={companyLogo} alt="" />
            </div>

            {/* main content part */}
            <div className='flex-grow px-2'>
                <h2 className='font-bold text-base'>{vacancyName}</h2>
                <h2>{companyName}</h2>
                {/* job type */}
                <div className='flex flex-wrap'>
                    {jobType === 'fulltime' ? <button className='job-btn my-2 md:mr-2'>On Site</button> : <button className='job-btn m-2 md:mr-2'>Remote</button>}
                    <button className='job-btn m-2 md:mr-2'>Full Time</button>
                </div>
                {/* location & salary*/}
                <div className='flex flex-wrap md:flex-nowrap md:items-center md:justify-between pt-2'>
                    <div className='flex items-center md:mr-4'>
                        <MapPinIcon className="h-6 text-gray-500" />
                        <span className='ml-1'>{jobLocation}</span>
                    </div>
                    <div className='flex items-center md:ml-4'>
                        <CurrencyDollarIcon className='h-6 text-gray-500' />
                        <p className='ml-1'>Salary: {salary}</p>
                    </div>
                </div>

            </div>

            <Link to={`/job-details/${id}`}><button className='btn mt-4 md:mt-0 md:mr-8 ms-2'>View Details</button></Link>

        </div>
    );
};

export default LocalJobCard;