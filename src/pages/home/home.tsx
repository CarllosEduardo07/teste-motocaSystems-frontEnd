import MainPagesHeader from '../../components/header/mainHeader';
import ListMotos from '../../components/listMotos/listMotos';
import MainNavBarComponent from '../../components/mainNavBar/mainNavBar';

export default function Home() {
  return (
    <div>
      <MainPagesHeader />

      <MainNavBarComponent />

      <ListMotos />
    </div>
  );
}
