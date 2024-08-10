import React from 'react';
import Header from '../components/Header/Header';
import Accelerator from '../components/Accelerator/Accelerator';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer'
import Integrations from '../components/Integration/Integrations'
import NavigationBar from '../components/NavigationBar/NavigationBar';
import '../styles/Landingpage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <NavigationBar />
      <Header />
      <Services/>
      <Accelerator />
      <Integrations />
      <Footer/> 
    </div>
  );
};

export default LandingPage;