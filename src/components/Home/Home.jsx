import React, { useContext, useState } from 'react';
import JobCategory from '../JobCategory';
import Banner from '../Banner';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob';
import { CartContext, JobsContext } from '../../App';


const Home = () => {
    const jobs = useContext(JobsContext || [])
    const [cart, setCart] = useContext(CartContext || [])

    const copyData = [...jobs].slice(0,4)
    const fourData = [...copyData]
    const [data, setData] = useState(false)

    return (
        <div>
            {/* banner part code */}
            <Banner/>
            {/* Job category list */}
            <JobCategory/>
            {/* Featured Jobs */}
            <div>
                <h1 className='title-common text-center mt-5 lg:mt-20'>Featured Jobs</h1>
                <p className='text-center mt-4 text-gray-500 px-2 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                {/*feature jobs container */}
                <div className='grid grid-cols-1 lg:grid-cols-2 md:w-2/3 mx-auto gap-4 pb-5 px-4'>
                {
                    (data ? jobs : fourData).map(job => <SingleJob key={job.id}
                    job={job}></SingleJob>)

                }
                </div>
                {/* see all jobs btn */}
                <div className={`text-center my-6 ${data && 'hidden'}`}>
                    <button className='btn' onClick={() => setData(true)}>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Home;    