import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editar from './pages/editar/editar';
import Home from './pages/home/home';
import RegistraMoto from './pages/registra_motos/registraMoto';

function App() {
  return (
    <div className='p-5 h-screen mx-auto w-full lg:w-11/12 xl:w-[1250px]'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<RegistraMoto />} path='/registar-motos' />
          <Route element={<Editar />} path='/editar-dados/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
