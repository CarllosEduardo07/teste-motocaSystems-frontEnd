import { useState } from 'react';
import AplayInput from '../input/aplayInput/aplayInput';
import MainPagesHeader from '../pagesTabelas_de_motos/mainPagesHeader/mainPagesHeader';
export default function Editar() {
  const [codigo, setCodigo] = useState('');
  const [modeloMoto, setModeloMoto] = useState('');
  const [cor, setCor] = useState('');
  const [valor, setValor] = useState('');
  return (
    <div>
      <MainPagesHeader />
      <section className='mt-8'>
        <h1 className='text-2xl font-semibold'>Editar</h1>
      </section>
      <hr className='my-[30px] bg-[#CAC9CD]' />

      <section className=' mt-10 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold text-[#E7E3FC]'>Edite as informações que preferir! 📝</h1>

        <div className='mt-10 space-y-8'>
          <AplayInput name='codigo' label='Código' type='text' value={codigo} setValue={setCodigo} />

          <AplayInput name='modelo da Moto' label='Código' type='text' value={modeloMoto} setValue={setModeloMoto} />
          <AplayInput name='cor' label='Cor' type='text' value={cor} setValue={setCor} />
          <AplayInput name='valor' label='Valor' type='number' value={valor} setValue={setValor} />

          <div className='flex flex-col relative'>
            <label htmlFor='status' className='absolute ml-2 px-2 -top-3 text-sm bg-background-pages'>
              Status
            </label>
            <select id='status' className='w-[400px] h-[50px] pl-3 text-[#CAC9CD] border border-[#CAC9CD] text-base  bg-background-pages outline-none rounded-md'>
              <option value=''></option>
              <option value='Em estoque'>Em estoque</option>
              <option value='Sem estoque'>Sem estoque</option>
              <option value='Em trânsito'>Em trânsito</option>
            </select>
          </div>
          <button className='flex items-center justify-center text-center w-[400px] h-[45px] px-1 text-sm font-semibold text-white bg-[#3BADFB] hover:bg-[#65b0e2] rounded-md'>
            <img src="../../assets/atualizar.svg" alt='' className='mx-1.5' />
            <p>REGISTRAR</p>
          </button>
        </div>
      </section>
    </div>
  );
}
