import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import headerImg from '../../assets/All Images/Vector.png'

const JobDetails = () => {
    const data = useLoaderData()
    const { ID } = useParams()
    const singleData = data.find(item => item.id === parseInt(ID))
    const { companyLogo, companyName, id, jobLocation, jobType, salary, vacancyName } = singleData
    return (
        <div>
            {/* extra header section */}
            <div className='bg-blue-50 my-container'>
                {/* header img section */}
                <div className='h-40 flex'>
                    <img className='h-full' src={headerImg} alt="" />
                    <h1 className='font-bold text-lg flex justify-center items-center h-full w-[calc(100vw-400px)]'>Job Details</h1>
                </div>
            </div>



        </div>
    );
};

export default JobDetails;