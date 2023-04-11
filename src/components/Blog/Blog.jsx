import React from 'react';

const Blog = () => {
    return (
        <div className='my-container pb-10'>
            <div className='max-w-screen-xl sm:mx-auto mt-10'>
                <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            When use Context API?
                            </p>
                            <p className='text-gray-700'>
                            Context API can be use when we need to pass data into many level or if we need to send data in many child elements or if we try to avoid many props drilling.
                                <br />
                                <br />
                                For example, we could use the Context API to manage the user's authentication state, the user's preferred theme, or language settings that need to be accessed by different parts of the app.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            what is useRef() and it uses? 
                            </p>
                            <p className='text-gray-700'>
                            In react, useRef() hook return a mutable object you can change the value anytime and it does not require a re render when data updated unlike useState. 
                                <br />
                                <br />
                                Some uses:-
                                <br />
                                1) it can be accessing DOM elements directly
                                <br />
                                2) it can be store value that is persists when data updated.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            What is Custom hook?
                            </p>
                            <p className='text-gray-700'>
                            Custom hook is a reuseable components in react application, it can be reused by many times from the different components of react application, custom hook is regular javascript function that is start with word "use".
                                <br />
                                <br />
                                In react library, there are some predefine custom hooks available, such as useState(), useEffect(), useLoaderData(), useContext() etc. 
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            what is useMemo() and it uses? 
                            </p>
                            <p className='text-gray-700'>
                            In react, useMemo() hook can be used for optimizing the performance. this hook use for memoizes the result of a function so that it only re render when its dependencies have changed. 
                                <br />
                                <br />
                                useMemo() hook take two argument:-
                                <br />
                                <br />
                                1) First argument is for function which result has to be memorised
                                <br />
                                2) Second argument is for dependencies array, If any of the dependencies change, the memoized value will be recomputed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;