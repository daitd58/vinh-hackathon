import Background from './components/Background';
import ComponentTwo from './components/componentTwo/componentTwo';
import Header from './components/Header';
import ComponentOne from './components/componentOne/componentOne';
import ComponentThree from './components/componentThree/componentThree';

function App() {
  return (
    <div style={{display: 'flex', flexDirection:'column'}} >
      <Header />
      <Background/>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      </div>
  );
}

export default App;
