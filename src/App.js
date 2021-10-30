import React from 'react';
import styled from 'styled-components';
import ComponentFive from './components/componentFive/componentFive';
import ComponentFour from './components/componentFour/componentFour';
import ComponentOne from './components/componentOne/componentOne';
import ComponentSix from './components/componentSix/componentSix';
import ComponentThree from './components/componentThree/componentThree';
import ComponentTwo from './components/componentTwo/componentTwo';
import Header from './components/header/header';
import Intro from './components/intro/intro';

// import { Container } from './styles';

function App() {
  return <>
    <Header />
    <Intro />
    <ComponentOne />
    <ComponentTwo />
    <ComponentThree />
    <ComponentFour />
    <ComponentFive />
    <ComponentSix />
  </>;
}

export default App;
