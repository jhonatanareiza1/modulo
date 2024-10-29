import logo from './logo.svg';
import './App.css';
import Casa from './views/Casa';
import Contactanos from './views/Contactanos.js';
import Quienes from './views/Quienes.js';
import Services from './views/Services.js';
import Beneficios from './views/Beneficios.js';
import Barranav from './Components/Barranav.js'


function App() {
  return (
    <div className="App">
      <Barranav/>
      <Casa/>
      <Beneficios/>
      <Quienes/>
      <Services/>
      <Contactanos/>

    </div>
  );
}

export default App;
