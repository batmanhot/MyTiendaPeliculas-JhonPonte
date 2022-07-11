import logo from './logo.svg';
import './App.css';

function App() {
  const nombre_app='MI TIENDA DE PELICULAS EN REACT- CODERHOUSE'
  return (
    <div className="App">
      <header className="App-header">
        <p>{nombre_app}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web en construccion, estamos trabajando ....
        </p>        
        <p>
          Diseñador Jhon Ponte 
        </p>        
        {/* <a
         className="App-link"         
         href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
        >
        </a>  */}
      </header>
    </div>
  );
}

export default App;
