import React from 'react';
import './Home.css'
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homecontainer mt-12 flex flex-col items-center gap-7">
                <Featured/>
                <h1 className='homeTitle text-xl font-bold'>Browse by property type</h1>
                
            <PropertyList/>
            <h1 className='homeTitle text-xl font-bold'>Home guest love</h1>
            <FeaturedProperties/>
            <MailList/>
            </div>
        </div>
    );
};

export default Home;