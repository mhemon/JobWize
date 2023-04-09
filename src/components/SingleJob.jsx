import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const SingleJob = ({job}) => {
    const {companyName, companyLogo, vacancyName, jobLocation, salary, jobType} = job
    return (
        <div className='border-2 border-gray-300 rounded-lg pl-4 pb-2'>
            {/* img container */}
            <div className='w-28 h-20 mt-2'>
                <img className='w-full' src={companyLogo} alt="" />
            </div>
            {/* job name */}
            <h2 className='font-bold text-base'>{vacancyName}</h2>
            {/* company name */}
            <p className='text-gray-500'>{companyName}</p>
            {/* job type */}
            <div className='flex'>
                {jobType === 'fulltime' ? <button className='job-btn my-2'>On Site</button> : <button className='job-btn my-2'>Remote</button>}
                <button className='job-btn m-2'>Full Time</button>
            </div>
            {/* location and salary container */}
            <div className='flex gap-2 text-sm flex-wrap'>
                {/* location */}
                <div className='flex justify-center items-center gap-1'>
                    <MapPinIcon class="h-6 text-gray-500" />
                    {jobLocation}
                </div>
                {/* salary */}
                <div className='flex justify-center items-center gap-2'>
                    <CurrencyDollarIcon className='h-6 text-gray-500'/>
                    <p>Salary: {salary}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;