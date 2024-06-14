import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Importe o hook useNavigate e useParams
import MainPagesHeader from '../../components/header/mainHeader';
import AplayInput from '../../components/input/aplayInput/aplayInput';
import { getMotoByCodigo, updateMoto } from '../../mock/motoService'; // Importe as funções necessárias do mock

export default function Editar() {
  const { codigo } = useParams(); // Receba o parâmetro 'codigo' da URL
  const navigate = useNavigate(); // Hook para navegação

  const [modeloMoto, setModeloMoto] = useState('');
  const [cor, setCor] = useState('');
  const [valor, setValor] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const moto = getMotoByCodigo(Number(codigo));
    if (moto) {
      setModeloMoto(moto.modeloMoto);
      setCor(moto.cor);
      setValor(moto.valor.toString());
      setStatus(moto.status);
    }
  }, [codigo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedMoto = {
      codigo: Number(codigo),
      modeloMoto,
      cor,
      valor: parseFloat(valor),
      status, // Ajuste conforme necessário
    };

    updateMoto(updatedMoto); // Atualiza a moto

    navigate('/'); // Redireciona para a página inicial após a atualização
  };

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
          <AplayInput name='modelo da Moto' label='Código' type='text' value={modeloMoto} setValue={setModeloMoto} />
          <AplayInput name='cor' label='Cor' type='text' value={cor} setValue={setCor} />
          <AplayInput name='valor' label='Valor' type='number' value={valor} setValue={setValor} />

          <div className='flex flex-col relative'>
            <label htmlFor='status' className='absolute ml-2 px-2 -top-3 text-sm bg-background-pages'>
              Status
            </label>
            <select
              id='status'
              value={status}
              onChange={e => {
                setStatus(e.target.value);
              }}
              className='w-[400px] h-[50px] pl-3 text-[#CAC9CD] border border-[#CAC9CD] text-base  bg-background-pages outline-none rounded-md'
            >
              <option value=''></option>
              <option value='Em estoque'>Em estoque</option>
              <option value='Sem estoque'>Sem estoque</option>
              <option value='Em trânsito'>Em trânsito</option>
            </select>
          </div>
          <button className='flex items-center justify-center text-center w-[400px] h-[45px] px-1 text-sm font-semibold text-white bg-[#3BADFB] hover:bg-[#65b0e2] rounded-md' onClick={handleSubmit}>
            <img src='../../assets/atualizar.svg' alt='' className='mx-1.5' />
            <p>ATUALIZAR</p>
          </button>
        </div>
      </section>
    </div>
  );
}
