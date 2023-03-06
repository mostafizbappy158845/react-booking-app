import React from 'react';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured z-10 w-full max-w-5xl flex justify-between gap-5'>
            <div className="featuredItem">
                <img className='featuredImg w-full object-cover' src="https://cf.bstatic.com/xdata/images/city/max500/620029.jpg?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o=" alt="" />
                <div className="featuredTitles ">
                    <h1 className='text-3xl font-bold'>Dhaka</h1>
                    <h2 className='text-2xl font-bold'>254 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg w-full object-cover' src="https://cf.bstatic.com/xdata/images/city/max500/619676.jpg?k=d6fff74c6fd1f22c63e757d3e0ed79b22ac5986625f3a4abb7564543e8ea62b5&o=" alt="" />
                <div className="featuredTitles ">
                    <h1 className='text-3xl font-bold'>Dhaka</h1>
                    <h2 className='text-2xl font-bold'>144 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg w-full object-cover' src="https://cf.bstatic.com/xdata/images/city/max500/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=" alt="" />
                <div className="featuredTitles ">
                    <h1 className='text-3xl font-bold'>Dhaka</h1>
                    <h2 className='text-2xl font-bold'>124 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;