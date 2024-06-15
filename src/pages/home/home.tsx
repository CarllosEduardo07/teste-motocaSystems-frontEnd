import Header from '../../components/header/header';
import ListaMotos from '../../components/listMotos/listaMotos';

export default function Home() {
  return (
    // renderizando o componente principal, ele foi fragmentado
    <div>
      <Header />
      <ListaMotos />
    </div>
  );
}
