import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteMoto, getMotos } from '../../mock/motoService';

export default function ListMotos() {
  const [motos, setMotos] = useState(getMotos());

  const handleDelete = (codigo: number) => {
    deleteMoto(codigo);
    setMotos(getMotos());
  };

  useEffect(() => {
    setMotos(getMotos());
  }, []);

  return (
    <section className='space-y-6 w-full'>
      {motos.map(moto => (
        <div key={moto.codigo} className='h-[138px] bg-[#312D4B] flex items-center rounded-xl'>
          <div className='w-[240px] h-full flex items-center justify-center'>
            <p className='text-lg text-[#8C57FF] font-medium leading-6'>#{moto.codigo}</p>
          </div>
          <div className='flex w-full justify-between'>
            <div className='space-y-3'>
              <div className='flex items-center '>
                <h1 className='text-lg font-semibold mr-3 text-[#E7E3FC]'>{moto.modeloMoto}</h1>
                <p
                  className={`px-3 p-0.5 rounded-full ${
                    moto.status === 'Em estoque' ? 'bg-[#354546] text-[#56CA00]' : moto.status === 'Sem estoque' ? 'bg-[#55304C] text-[#FF4C51]' : 'bg-[#544146] text-[#FFB400]'
                  }`}
                >
                  {moto.status}
                </p>
              </div>
              <p className='text-base font-medium'>Valor: R$ {moto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <p className='text-base font-medium'>Cor: {moto.cor}</p>
            </div>
            <div className='flex items-center space-x-5 mr-10'>
              
              <button onClick={() => handleDelete(moto.codigo)}>
                <img src='../../../../public/assets/apagar.svg' alt='apagar' />
              </button>
              <Link to={`/editar-dados/${moto.codigo}`}>
                <img src='../../../../public/assets/editar.svg' alt='editar' />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
