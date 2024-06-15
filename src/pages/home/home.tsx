import Header from '../../components/header/header';
import ListMotos from '../../components/listMotos/listMotos';
import NavBar from '../../components/navBar/navBar';

export default function Home() {
  return (
    // renderizando o componente principal, ele foi fragmentado
    <div>
      <Header />

      <NavBar />

      <ListMotos />
    </div>
  );
}
