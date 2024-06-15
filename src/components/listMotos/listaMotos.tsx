import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Moto, deleteMoto, getMotos } from '../../mock/motoService';
import Modal from '../modal/modal';

export default function ListaMotos() {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loadingList, setLoadingList] = useState<boolean[]>([]);
  const [modal, setModal] = useState(false);
  const [searchText, setSearchText] = useState<string>('');

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

  // Filtragem das motos com base no texto da barra de pesquisa
  const filteredMotos = motos.filter(moto =>
    `${moto.codigo} ${moto.modeloMoto} ${moto.cor}`.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    // barra de pesquisa
    <div>
      <div>
        <section className='mt-8 flex flex-col md:flex md:flex-row md:justify-between'>
          <h1 className='mb-8 md:mb-0 text-center text-2xl font-semibold'>Tabela de Motos</h1>

          <div className='space-y-5 md:space-y-0 md:space-x-4 flex flex-col md:flex md:flex-row md:items-center'>
            <div className=' px-2 flex items-center space-x-2 bg-transparent border border-[#CAC9CD] rounded-md'>
              <img src='/assets/buscar.svg' alt='busca' className='size-5' />
              <input type='text'  onChange={e => setSearchText(e.target.value)} placeholder='Buscar por código, nome e cor' className='w-[370px] px-1 py-1.5 text-[#CAC9CD] text-base bg-transparent outline-none' />
            </div>

            <Link to='/registar-motos' className='flex items-center justify-center w-full md:w-[150px] h-9 px-1 text-sm font-semibold text-white bg-[#3BADFB] hover:bg-[#65b0e2] rounded-md'>
              <img src='/assets/add.svg' alt='adicionar' className='mx-1.5' />
              NOVO REGISTRO
            </Link>
          </div>
        </section>
        <hr className='my-6 bg-[#CAC9CD]' />
      </div>

    {/* lista de motos */}
      <section className='space-y-6 w-full pb-5'>
      {filteredMotos.map((moto, index) => (
          <div key={moto.codigo} className='h-[138px] bg-[#312D4B] flex items-center rounded-xl'>
            <div className='w-[70px] md:w-[240px] h-full flex items-center justify-center'>
              <p className='text-sm md:text-lg text-[#8C57FF] font-medium leading-6'>#{moto.codigo}</p>
            </div>
            <div className='flex w-full justify-between'>
              <div className='space-y-3'>
                <div className='flex items-center '>
                  <h1 className='text-xs md:text-lg font-semibold mr-2 text-[#E7E3FC]'>{moto.modeloMoto}</h1>
                  <p
                    className={` px-2 md:px-3 p-0.5 text-xs md:text-base text-center rounded-full ${
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
                <p className='text-xs md:text-base font-medium'>Valor: {moto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className='text-xs md:text-base font-medium'>Cor: {moto.cor}</p>
              </div>
              <div className=' flex flex-col justify-center items-center space-y-5 md:space-y-0 md:flex-row md:flex md:space-x-5 mx-4 md:mr-10'>
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

        {modal && <Modal status='excluir' mensagem='Item Excluído com Sucesso' onClose={() => setModal(false)} />}
      </section>
    </div>
  );
}
