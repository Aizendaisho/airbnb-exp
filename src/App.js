import Navbar from './componentes/navbar/Navbar';
import Contenido from './componentes/contenido/Contenido'

import './App.css';
import informacion from './componentes/testimonio/Informacion';

function App() {


  return (
    <div className="App">

    
    <Navbar />
    <Contenido />

    <div className='info'>{informacion}</div>

  





   
    </div>
  );
}

export default App;
