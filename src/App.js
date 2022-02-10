import './App.css';
import Eventos from './components/Eventos'
import Contador from './components/Contador'
import Listas from './components/Listas'
import Formulario from './components/Formulario'

function App() {
  return (
    <>
      <div className='container mt-5'>
        <h1>CURSO</h1>  
        <Eventos />
        <Contador />
        <Listas />
        <Formulario />
      </div>
    </>
  );
}

export default App;
