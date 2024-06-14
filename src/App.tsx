import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Editar from './components/pagesEditar/editar';
import RegistraMoto from './components/pagesRegistra_motos/registraMoto';

function App() {
  return (
    <div className='p-5 h-screen max-w-full md:w-11/12 lg:w-11/12 xl:w-[1250px]'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<RegistraMoto />} path='/registar-motos' />
          <Route element={<Editar />} path='/editar-dados/:codigo' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
