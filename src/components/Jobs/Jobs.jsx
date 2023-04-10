import React, { useContext } from 'react';
import { CartContext } from '../../App';

const Jobs = () => {
    const [cart, setCart] = useContext(CartContext || [])
    console.log(cart)
    return (
        <div>
            {
                cart.map(job => <li>{job}</li>)
            }
        </div>
    );
};

export default Jobs;