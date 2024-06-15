import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Moto, deleteMoto, getMotos } from '../../mock/motoService';
import Modal from '../modal/modal';

export default function ListMotos() {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loadingList, setLoadingList] = useState<boolean[]>([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const fetchedMotos = await getMotos();
        //atualizando o estados de motos, com a lista recebida
        setMotos(fetchedMotos);
        setLoadingList(new Array(fetchedMotos.length).fill(false));
      } catch (error) {
        console.error('Erro ao buscar motos:', error);
      }
    };

    fetchMotos();
  }, []);

  const handleDelete = async (id: string, index: number) => {
    setLoadingList(prevLoadingList => {
      const newList = [...prevLoadingList];
      newList[index] = true;
      return newList;
    });

    //simular um atraso para o loading na excluão da moto
    setTimeout(async () => {
      try {
        await deleteMoto(id);
        setMotos(prevMotos => {
          const updatedMotos = [...prevMotos];
          updatedMotos.splice(index, 1);
          return updatedMotos;
        });
        setModal(true);
      } catch (error) {
        console.error('Erro ao excluir a moto:', error);
      } finally {
        setLoadingList(prevLoadingList => {
          const newList = [...prevLoadingList];
          newList[index] = false;
          return newList;
        });
      }
    }, 1500);
  };

  return (
    <section className='space-y-6 w-full'>
      {motos.map((moto, index) => (
        <div key={moto.codigo} className='h-[138px] bg-[#312D4B] flex items-center rounded-xl'>
          <div className='w-[110px] md:w-[240px] h-full flex items-center justify-center'>
            <p className='text-lg text-[#8C57FF] font-medium leading-6'>#{moto.codigo}</p>
          </div>
          <div className='flex w-full justify-between'>
            <div className='space-y-3'>
              <div className='flex items-center '>
                <h1 className='text-lg font-semibold mr-3 text-[#E7E3FC]'>{moto.modeloMoto}</h1>
                {/* verificando o status da moto e definindo uma cor */}
                <p
                  className={`px-3 p-0.5 rounded-full ${
                    moto.status === 'Em estoque'
                      ? 'bg-[#354546] text-[#56CA00] font-semibold'
                      : moto.status === 'Sem estoque'
                      ? 'bg-[#55304C] text-[#FF4C51] font-semibold'
                      : 'bg-[#544146] text-[#FFB400] font-semibold'
                  }`}
                >
                  {moto.status}
                </p>
              </div>
              <p className='text-base font-medium'>Valor: {moto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <p className='text-base font-medium'>Cor: {moto.cor}</p>
            </div>
            <div className='flex items-center space-x-5 mr-4 md:mr-10'>
              <button
                onClick={() => handleDelete(moto.id, index)}
                disabled={loadingList[index]} // Desativa o botão durante o loading da moto específica
              >
                {loadingList[index] ? <img src='/assets/loading.svg' alt='loading' /> : <img src='/assets/apagar.svg' alt='apagar' />}
              </button>

              <Link to={`/editar-dados/${moto.id}`}>
                <img src='/assets/editar.svg' alt='editar' />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {modal && <Modal mensagem='Item Excluído com Sucesso' onClose={() => setModal(false)} />}
    </section>
  );
}
