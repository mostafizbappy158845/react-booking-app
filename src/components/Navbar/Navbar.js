import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar h-[50px] bg-[#A760FF] flex justify-center'>
            <div className="navContainer w-full max-w-screen-lg flex items-center justify-between ">
                <span className='logo text-white font-medium'>Bookyourhotel</span>
                <div className="navItems">
                    <button className='navButton ml-5 bg-white text-[#A760FF] border-0 px-2.5 py-1.5 cursor-pointer'>Register</button>
                    <button className='navButton ml-5 bg-white text-[#A760FF] border-0 px-2.5 py-1.5 cursor-pointer'>Login</button>
                </div>
                
            </div>

        </div>
    ); 
};

export default Navbar;