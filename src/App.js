import logo from './logo.svg';
import './App.css';
import Header from './layout/header';
import Banner from './layout/banner';
import Entrepreneur from './layout/components/entrepreneur';
import Experts from './layout/components/experts';
import Community from './layout/components/community';
import HowDenWork from './layout/components/howDenWork';
import ButFirst from './layout/components/butfirst';
import WhatPeople from './layout/components/whatpeople';
import Upcoming from './layout/components/upcoming';
import Footer from './layout/components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Entrepreneur />
      <Experts />
      <Community />
      <HowDenWork />
      <ButFirst />
      {/* <WhatPeople /> */}
      {/* <Upcoming /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
