import React from 'react';
import styled from 'styled-components';
import ComponentEight from './components/componentEight/componentEight';
import ComponentFive from './components/componentFive/componentFive';
import ComponentFiveMobile from './components/componentFive/componentFiveMobile';
import ComponentFour from './components/componentFour/componentFour';
import ComponentOne from './components/componentOne/componentOne';
import ComponentSeven from './components/componentSeven/componentSeven';
import ComponentSix from './components/componentSix/componentSix';
import ComponentThree from './components/componentThree/componentThree';
import ComponentTwo from './components/componentTwo/componentTwo';
import Footer from './components/footer/footer';
import MobileFooter from './components/footer/mobileFooter';
import Header from './components/header/header';
import Intro from './components/intro/intro';



const App = () => {
  const Wrapper = styled.div`
    width:100%;
    height:100%;
    position:relative;
  `
  return <>
    <Wrapper>
      <Header />
      <Intro />
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
      <ComponentFiveMobile />
      <ComponentSix />
      <ComponentSeven />
      <ComponentEight />
      <Footer />
      <MobileFooter />
    </Wrapper>
  </>;
}

export default App;
