import React from 'react';


import Header from '../components/header';
import Carosel from '../components/carosel';
import Center from '../components/center';
import Services from '../components/services';
import Contact from '../components/contact'
import Footer from '../components/footer';
import "../styles/main.scss";


const Index=()=> {
  return (
   
   <div>    <Header />
    <Carosel/>
    <Center />
    <Services />
    <Contact />
    <Footer />
   </div>
      
   
     
  )
}
export default Index
