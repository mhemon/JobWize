import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const LocalJobCard = ({job}) => {
    const {companyName, companyLogo, vacancyName, jobLocation, salary, jobType, id} = job
    return (
        <div className='shadow-md rounded-lg border-2 my-2 border-gray-100 flex items-center'>
            {/* img part */}
            <div className='w-48 h-48 px-3 py-3'>
                <img className='w-full h-full bg-gray-100 border' src={companyLogo} alt="" />
            </div>
            
            {/* main content part */}
            <div className='flex-grow'>
                <h2 className='font-bold text-base'>{vacancyName}</h2>
                <h2>{companyName}</h2>
                {/* job type */}
                <div className='flex'>
                    {jobType === 'fulltime' ? <button className='job-btn my-2'>On Site</button> : <button className='job-btn my-2'>Remote</button>}
                    <button className='job-btn m-2'>Full Time</button>
                </div>
                {/* location & salary*/}
                <div className='inline-flex w-full justify-start items-center gap-2 pt-2'>
                    <div className='flex'>
                    <MapPinIcon className="h-6 text-gray-500" />
                    {jobLocation}
                    </div>
                   <div className='flex'>
                   <CurrencyDollarIcon className='h-6 text-gray-500'/>
                    <p>Salary: {salary}</p>
                   </div>
                </div>
                
            </div>

            <Link to={`/job-details/${id}`}><button className='btn mr-8'>View Details</button></Link>
            
        </div>
    );
};

export default LocalJobCard;