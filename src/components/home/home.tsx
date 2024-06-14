import ListMotos from '../pagesTabelas_de_motos/mainListMotos/listMotos';
import MainNavBarComponent from '../pagesTabelas_de_motos/mainNavBar/mainNavBarComponent';
import MainPagesHeader from '../pagesTabelas_de_motos/mainPagesHeader/mainPagesHeader';

export default function Home() {
  return (
    <div>
      <MainPagesHeader />

      <MainNavBarComponent />

      <ListMotos />
    </div>
  );
}
