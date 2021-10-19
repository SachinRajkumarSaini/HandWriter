import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  )
}

export default React.memo(Home);
