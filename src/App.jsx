import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


const App = () => {
  return (
    <div className='w-11/12 lg:container mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default App;