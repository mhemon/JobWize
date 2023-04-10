import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../App';
import headerImg from '../../assets/All Images/Vector.png'
import LocalJobCard from '../LocalJobCard';

const Jobs = () => {
    const [cart, setCart] = useContext(CartContext || [])
    const [data, setData] = useState(false)
    const handleOptionClick = (event) => {
        // console.log(event.target.value)
        const isFilter = event.target.value
       
        if(isFilter === 'onsite'){
            const remain = cart.filter(job => job.jobType === 'fulltime')
            setData(remain)
        }

        if(isFilter === 'remote'){
            const remain = cart.filter(job => job.jobType === 'remote')
            setData(remain)
        }
        
    }

    
    return (
        <div>
            {/* extra header section */}
            <div className='bg-blue-50 my-container'>
                {/* header img section */}
                <div className='h-40 flex'>
                    <img className='h-full' src={headerImg} alt="" />
                    <h1 className='font-bold text-lg flex justify-center items-center h-full w-[calc(100vw-400px)]'>Applied Jobs</h1>
                </div>
            </div>

            <div className='w-3/4 mx-auto'>
                {/* dropdown menu */}
                <div className="relative inline-block flex justify-end mt-20">
                    <select className="appearance-none border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={handleOptionClick}>
                        <option value="">Filter By</option>
                        <option value='onsite'>Onsite Job</option>
                        <option value='remote'>Remote Job</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z" />
                        </svg>
                    </div>
                </div>

                {/* from local storage */}
                <div className='mt-4 mb-10'>
                {
                    (data ? data : cart).map(job => <LocalJobCard
                    job={job}
                    key={job.id}></LocalJobCard>)
                }
                </div>
            </div>

        </div>
    );
};

export default Jobs;