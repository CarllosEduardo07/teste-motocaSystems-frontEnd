import { Link } from 'react-router-dom';

export default function MainNavBarComponent() {
  return (
    <div className=''>
      <section className='mt-8 flex justify-between'>
        <h1 className='text-2xl font-semibold'>Tabela de Motos</h1>
        <div className='space-x-4 flex'>
          <div className=' px-2 flex items-center space-x-2 bg-transparent border border-[#CAC9CD] rounded-md'>
            <img src='../../../../public/assets/buscar.svg' alt='busca' className='size-5' />
            <input type='text' placeholder='Buscar por código, nome, cor' className='w-[385px] px-1 py-1.5 text-[#CAC9CD] text-base bg-transparent outline-none' />
          </div>
          <Link to='/registar-motos' className='flex items-center w-[150px] py-1.5 px-1 text-sm font-semibold text-white bg-[#3BADFB] hover:bg-[#65b0e2] rounded-md'>
            <img src='../../../../public/assets/add.svg' alt='' className='mx-1.5' />
            NOVO REGISTRO
          </Link>
        </div>
      </section>
      <hr className='my-6 bg-[#CAC9CD]' />
    </div>
  );
}
