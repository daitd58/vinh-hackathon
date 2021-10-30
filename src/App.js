import ComponentFour from './components/ComponentFour';
import ComponentOne from './components/ComponentOne';
import ComponentThree from './components/ComponentThree';
import ComponentTwo from './components/ComponentTwo';
import Banner from './layout/Banner';
import Header from './layout/Header';

function App() {
  return (
    <div >
      <Header/>
      <Banner />
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
    </div>
  );
}

export default App;
