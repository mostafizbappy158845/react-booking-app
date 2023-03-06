import React from 'react';
import './MailList.css'

const MailList = () => {
    return (
        <div className='mail w-full mt-12 gap-5 p-12 bg-[#7f19fb] text-white flex items-center flex-col'>
            <h1 className="mailTitle text-2xl">Save time, save money!</h1>
            <span className="mailDesc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input className='text-black w-[300px] h-[40px] p-2.5 border-0 mr-2.5 rounded-[3px]' type="text" placeholder='Your Email' />
                <button className='text-white bg-[#CA82FF] h-[40px] px-4 font-medium border-0 rounded-[3px] cursor-pointer'>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;