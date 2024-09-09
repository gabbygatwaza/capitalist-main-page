import React from 'react';
import Header from '../components/Header';
import PromoSection from '../components/PromoSection';
import ProductShowcase from "../components/sectionsecond";
import ShippingSection from "../components/Sectionthird";
import SectionShowRoom from "../components/SectionShowRoom";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Banner from "../components/Banner";
import BackToTopButton from '../components/buttons/BackToHome'; 
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <div className="bg-slate-800 overflow-x-hidden">
            <TopBar />
            <Header />
            <Banner />
            <PromoSection />
       {/* Add About Us section */}
            <ProductShowcase />
            <ShippingSection />
            <SectionShowRoom />
            <AboutUs />
            <Footer />
            <BackToTopButton /> {/* Add the BackToTopButton */}
        </div>
    );
};

export default Home;
