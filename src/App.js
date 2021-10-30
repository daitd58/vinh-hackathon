import logo from './logo.svg';
import './App.css';
import Header from './layout/header';
import Banner from './layout/banner';
import Entrepreneur from './layout/components/entrepreneur';
import Experts from './layout/components/experts';
import Community from './layout/components/community';
import HowDenWork from './layout/components/howDenWork';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Entrepreneur />
      <Experts />
      <Community />
      <HowDenWork />
    </div>
  );
}

export default App;
