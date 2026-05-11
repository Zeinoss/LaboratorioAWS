import './App.css';
import { mul } from './mul';

function App() {
  const resultado = mul(2, 3);

  return (
    <div className="App">
      <h1>Resultado de la multiplicación</h1>
      <p>{resultado}</p>
    </div>
  );
}

export default App;
