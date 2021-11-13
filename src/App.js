import './App.css';
import Header from './layout/header/header';
import ComponentOne from './layout/component/Component1';
import ComponentTwo from './layout/component/component2/Component2';
import ComponentThree from './layout/component/Component3';
import ComponentFour from './layout/component/Component4';
import ComponentFive from './layout/component/Component5';
import ComponentSix from './layout/component/Component6';
import ComponentSeven from './layout/component/Component7';


function App() {
  return (
    <div className="App">
      <Header />
      <ComponentOne />
      <ComponentTwo/>
      <ComponentThree/>
      <ComponentFour/>
      <ComponentFive/>
      <ComponentSix/>
      <ComponentSeven/>
    </div>
  );
}

export default App;
