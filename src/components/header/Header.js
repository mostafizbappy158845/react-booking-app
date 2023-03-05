import React, { useState } from 'react';
import './Header.css'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBed, faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    }
    return (
        <div className='header relative bg-[#A760FF] text-white flex justify-center'>
            <div className="headerContainer  w-full max-w-screen-lg mt-5 mb-20">
                <div className="headerList mb-12 flex gap-10">
                    <div className="headerListItem active flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle text-3xl font-medium">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc my-5">Get rewarded at your travels - Unlock instant savings 10% or more with a free hotel account</p>
                <button className='headerBtn bg-white text-[#A760FF] p-2.5 border-0 font-medium cursor-pointer'>Sign in / Register</button>
                <div className="headerSearch h-[30px]  w-full max-w-screen-lg bg-white flex items-center justify-around py-5 rounded-md absolute bottom-[-25px]">
                    <div className="headerSearchItem text-gray-400 flex items-center gap-2.5">
                        <FontAwesomeIcon className='headerIcon ' icon={faBed} />
                        <input className='headerSearchInput border-0 outline-0' type="text" placeholder='Where are you going?' />
                    </div>
                    <div className="headerSearchItem text-gray-400 flex items-center gap-2.5">
                        <FontAwesomeIcon className='headerIcon' icon={faCalendarDays} />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText cursor-pointer'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date absolute top-12'
                        />}
                    </div>
                    <div className="headerSearchItem text-gray-400 flex items-center gap-2.5">
                        <FontAwesomeIcon className='headerIcon ' icon={faPerson} />
                        <span onClick={() =>setOpenOptions(!openOptions)} className='headerSearchText cursor-pointer'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                        {openOptions &&
                        <div className="options absolute top-12 bg-white rounded-md">
                            <div className="optionItem">
                                <span className='optionText'>Adult </span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} className='optionCounterButton border-2 px-1'>-</button>
                                    <span className='optionCounterNumber'>{options.adult}</span>
                                    <button onClick={() => handleOption("adult", "i")} className='optionCounterButton border-2 px-1'>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className='optionText'>Children </span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} onClick={() => handleOption("children", "d")} className='optionCounterButton border-2 px-1'>-</button>
                                    <span className='optionCounterNumber'>{options.children}</span>
                                    <button onClick={() => handleOption("children", "i")} className='optionCounterButton border-2 px-1'>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className='optionText'>Room </span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")} className='optionCounterButton border-2 px-1'>-</button>
                                    <span className='optionCounterNumber'>{options.room}</span>
                                    <button onClick={() => handleOption("room", "i")} className='optionCounterButton border-2 px-1'>+</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerBtn  bg-[#A760FF] text-white p-2 border-0 font-medium cursor-pointer'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;