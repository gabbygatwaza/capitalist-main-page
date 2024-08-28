import React from 'react';
import { Briefcase, Handshake, ShieldCheck, Cpu } from 'lucide-react';
import Navbar from '../components/Navbar';
const ServiceCard = ({ image, icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <img src={image} alt={title} className="w-16 h-16 mb-4 object-cover rounded-full" />
    <Icon className="w-12 h-12 text-red-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

const CPLabConsultancy = () => {
  return (
<>
<Navbar/>
<div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-red-600 text-white py-12 relative">
        <img src="/public/capitalistlogo.png" alt="Consultancy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">CP Lab Consultancy</h1>
          <p className="text-xl">Navigating complexities, enhancing operations, achieving growth</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              image="/investment.jpeg"
              icon={Briefcase}
              title="Investment Promotion"
              description="Identifying opportunities, advising on incentives, and facilitating investments in Rwanda and East Africa."
            />
            <ServiceCard 
              image="/matchmaking.jpeg"
              icon={Handshake}
              title="Matchmaking"
              description="Connecting local businesses with international partners for strategic alliances and growth."
            />
            <ServiceCard 
              image="/intelctualproperty.jpeg"
              icon={ShieldCheck}
              title="Intellectual Property"
              description="Protecting and registering your innovations, trademarks, and creative works."
            />
            <ServiceCard 
              image="/technology.jpeg"
              icon={Cpu}
              title="Technology Integration"
              description="Guiding digital transformation and implementing cutting-edge technologies for your business."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us?</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="list-disc list-inside space-y-4 text-gray-800">
              <li>Deep understanding of local and regional markets</li>
              <li>Extensive network of business and government contacts</li>
              <li>Proven track record of successful projects and partnerships</li>
              <li>Customized solutions tailored to your specific needs</li>
              <li>Commitment to ethical business practices and sustainable growth</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4 text-center">Ready to take your business to the next level? Get in touch with our expert consultants today.</p>
            <div className="text-center">
              <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CP Lab Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </div>
</>
  );
};

export default CPLabConsultancy;
