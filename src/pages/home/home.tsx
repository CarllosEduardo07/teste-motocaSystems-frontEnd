import MainHeader from '../../components/header/mainHeader';
import ListMotos from '../../components/listMotos/listMotos';
import MainNavBar from '../../components/mainNavBar/mainNavBar';

export default function Home() {
  return (
    // renderizando o componente principal, ele foi fragmentado
    <div>
      <MainHeader />

      <MainNavBar />

      <ListMotos />
    </div>
  );
}
