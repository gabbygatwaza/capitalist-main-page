import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import PromoSection from '../components/PromoSection';
import  ProductShowcase from "../components/sectionsecond";
import Sectionthird  from "../components/Sectionthird";
import SectionShowRoom from "../components/SectionShowRoom";
import Footer from "../components/Footer";
const Home = () => {
    return (
        <div className="bg-slate-800  ">
            <Header />
            <Navbar />
            <Banner />
            <PromoSection />
            <ProductShowcase />
            <Sectionthird />
            <SectionShowRoom/>
            <Footer />
        </div>
    );
};

export default Home;
