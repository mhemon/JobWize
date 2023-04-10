import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import headerImg from '../../assets/All Images/Vector.png'
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

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

            <div className='w-3/4 mx-auto'>
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2 pt-20">
                        {/* Job description */}
                        <p><span className='font-bold'>Job Description:</span><small> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</small></p>
                        {/* Job responsibility */}
                        <p className='pt-5'><span className='font-bold'>Job Responsibility:</span><small> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</small></p>
                        {/* Educational Requirements */}
                        <p className='pt-5'><span className='font-bold'>Educational Requirements:</span><small> Bachelor degree to complete any reputational university.</small></p>
                        {/*Experiences Requirements */}
                        <p className='pt-5'><span className='font-bold'>Experiences:</span><small> 2-3 Years in this field.</small></p>
                    </div>
                    {/* sidebar section */}
                    <div class="col-span-1 pt-20">
                        
                        {/* sidebar main container */}
                        <div className='bg-blue-100 px-4 pt-4 rounded-lg'>
                            <h3 className='font-bold pb-4'>Job Details</h3>
                            <div className='border-b border-blue-500'></div>
                            
                            {/* salary */}
                            <div className='flex gap-2 py-4'>
                                <CurrencyDollarIcon className='h-6 text-blue-500' />
                                <p><span className='font-bold'>Salary:</span> {salary}</p>
                            </div>
                           
                            {/* job title */}
                            <div className='flex gap-2 pb-4'>
                                <CalendarDaysIcon className='h-6 text-blue-500' />
                                <p><span className='font-bold'>Job title:</span> {vacancyName}</p>
                            </div>
                            
                            {/* job details */}
                            <h3 className='font-bold pb-4'>Contact Information</h3>
                            <div className='border-b border-blue-500'></div>
                            
                            {/* phone */}
                            <div className='flex gap-2 py-4'>
                                <PhoneIcon className='h-6 text-blue-500' />
                                <p><span className='font-bold'>Phone:</span> 01750-000 000</p>
                            </div>
                           
                            {/* email */}
                            <div className='flex gap-2 pb-4'>
                                <EnvelopeIcon className='h-6 text-blue-500' />
                                <p><span className='font-bold'>Email:</span> info@gmail.com</p>
                            </div>

                            {/* address */}
                            <div className='flex gap-2 pb-4'>
                                <MapPinIcon className='h-6 text-blue-500' />
                                <p><span className='font-bold'>Address:</span> Dhaka, Bangladesh</p>
                            </div>

                        </div>
                        {/* apply now btn */}
                        <div className='my-4 text-center'>
                            <button className='apply-btn'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;