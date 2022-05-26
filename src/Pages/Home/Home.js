import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Reviews />
            <BusinessSummary />
            <FAQ />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;