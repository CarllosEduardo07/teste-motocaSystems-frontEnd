import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPagesHeader from '../../components/header/header';
import AplayInput from '../../components/input/aplayInput';
import { createMoto } from '../../mock/motoService';

export default function RegistraMoto() {
  const [codigo, setCodigo] = useState('');
  const [modeloMoto, setModeloMoto] = useState('');
  const [cor, setCor] = useState('');
  const [valor, setValor] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMoto = {
      id: Date.now().toString(),
      codigo: parseInt(codigo),
      modeloMoto,
      cor,
      valor: parseFloat(valor),
      status,
    };
    await createMoto(newMoto);
    navigate('/');
  };

  return (
    <div className=' pb-20 md:pb-5'>
      <MainPagesHeader />
      <section className='mt-8'>
        <h1 className='text-2xl font-semibold'>Registro de Motos</h1>
      </section>
      <hr className='my-[30px] bg-[#CAC9CD]' />

      <section className='mt-10 flex flex-col justify-center items-center'>
        <h1 className='text-center text-xl md:text-2xl font-semibold text-[#E7E3FC]'>Preencha as informações abaixo para registrar uma Moto 🏍️</h1>

        <form onSubmit={handleSubmit} className='w-full md:w-auto mt-10 space-y-8'>
          <AplayInput name='codigo' label='Código' type='number' value={codigo} setValue={setCodigo} />
          <AplayInput name='modelo da Moto' label='Modelo da Moto' type='text' value={modeloMoto} setValue={setModeloMoto} />
          <AplayInput name='cor' label='Cor' type='text' value={cor} setValue={setCor} />
          <AplayInput name='valor' label='Valor' type='number' value={valor} setValue={setValor} />
          <div className='flex flex-col relative'>
            <label htmlFor='status' className='absolute ml-2 px-2 -top-3 text-sm font-medium bg-background-pages'>
              Status
            </label>
            <select
              id='status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              required
              className='w-[350px] md:w-[400px] h-[50px] pl-3 text-[#CAC9CD] border border-[#CAC9CD] text-base bg-background-pages outline-none rounded-md'
            >
              <option value=''></option>
              <option value='Em estoque'>Em estoque</option>
              <option value='Sem estoque'>Sem estoque</option>
              <option value='Em trânsito'>Em trânsito</option>
            </select>
          </div>
          <button className=' w-[350px] md:w-[400px] h-[45px] flex items-center justify-center text-center px-1 text-sm font-semibold text-white bg-[#3BADFB] hover:bg-[#65b0e2] rounded-md'>
            <img src='../../assets/add.svg' alt='' className='mx-1.5' />
            <p>REGISTRAR</p>
          </button>
        </form>
      </section>
    </div>
  );
}
