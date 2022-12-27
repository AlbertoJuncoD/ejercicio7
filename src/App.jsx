import logo from './logo.svg';
import './App.scss';

import Mensajes from './views/Mensajes.view'
import Sesion from './views/Sesion.view';
import { useSelector } from 'react-redux';

export default function App() {
  const sesion = useSelector(state => state.sesion);  // El estado inicial será false
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactJS | Imagina Formación</h1>
        <Sesion></Sesion>
      </header>

      <div className="App-body">
        {sesion ? <Mensajes></Mensajes> : ''}
      </div>
    </div>
  );
}
