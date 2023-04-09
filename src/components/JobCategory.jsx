import React from 'react';
import img1 from '../assets/Icons/accounts 1.png'
import img2 from '../assets/Icons/business 1.png'
import img3 from '../assets/Icons/social-media 1.png'
import img4 from '../assets/Icons/chip 1.png'

const JobCategory = () => {
    return (
        <div className='my-container'>
                <h1 className='title-common text-center mt-5 lg:mt-20'>Job Category List</h1>
                <p className='text-center mt-4 text-gray-500 px-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                {/* types of job category */}
                <div className='mt-8 flex flex-wrap justify-center gap-6'>
                    {/* category 1 */}
                    <div className='w-44 h-36 bg-blue-50 rounded-lg'>
                        <div className='ml-5 mt-5'>
                            {/* img part */}
                            <div className='w-16 h-16 bg-blue-100 flex justify-center items-center rounded-md'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='my-2'>
                                <h3 className='font-bold text-sm'>Account & Finance</h3>
                                <p className='text-gray-500 text-xs'>300 Jobs Available</p>
                            </div>
                        </div>
                    </div>
                    {/* category 2 */}
                    <div className='w-44 h-36 bg-blue-50 rounded-lg'>
                        <div className='ml-5 mt-5'>
                            {/* img part */}
                            <div className='w-16 h-16 bg-blue-100 flex justify-center items-center rounded-md'>
                                <img src={img2} alt="" />
                            </div>
                            <div className='my-2'>
                                <h3 className='font-bold text-sm'>Creative Design</h3>
                                <p className='text-gray-500 text-xs'>100+ Jobs Available</p>
                            </div>
                        </div>
                    </div>
                    {/* category 3 */}
                    <div className='w-44 h-36 bg-blue-50 rounded-lg'>
                        <div className='ml-5 mt-5'>
                            {/* img part */}
                            <div className='w-16 h-16 bg-blue-100 flex justify-center items-center rounded-md'>
                                <img src={img3} alt="" />
                            </div>
                            <div className='my-2'>
                                <h3 className='font-bold text-sm'>Marketing & Sales</h3>
                                <p className='text-gray-500 text-xs'>150 Jobs Available</p>
                            </div>
                        </div>
                    </div>
                    {/* category 4 */}
                    <div className='w-44 h-36 bg-blue-50 rounded-lg'>
                        <div className='ml-5 mt-5'>
                            {/* img part */}
                            <div className='w-16 h-16 bg-blue-100 flex justify-center items-center rounded-md'>
                                <img src={img4} alt="" />
                            </div>
                            <div className='my-2'>
                                <h3 className='font-bold text-sm'>Engineering Job</h3>
                                <p className='text-gray-500 text-xs'>224 Jobs Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default JobCategory;