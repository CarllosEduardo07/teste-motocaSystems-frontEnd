import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <section className='mt-8 flex flex-col md:flex md:flex-row md:justify-between'>
        <h1 className='mb-8 md:mb-0 text-center text-2xl font-semibold'>Tabela de Motos</h1>

        <div className='space-y-5 md:space-y-0 md:space-x-4 flex flex-col md:flex md:flex-row md:items-center'>
          <div className=' px-2 flex items-center space-x-2 bg-transparent border border-[#CAC9CD] rounded-md'>
            <img src='/assets/buscar.svg' alt='busca' className='size-5' />
            <input type='text' placeholder='Buscar por código, nome e cor' className='w-[370px] px-1 py-1.5 text-[#CAC9CD] text-base bg-transparent outline-none' />
          </div>

          <Link to='/registar-motos' className='flex items-center justify-center w-full md:w-[150px] h-9 px-1 text-sm font-semibold text-white bg-[#3BADFB] hover:bg-[#65b0e2] rounded-md'>
            <img src='/assets/add.svg' alt='adicionar' className='mx-1.5' />
            NOVO REGISTRO
          </Link>
        </div>
      </section>
      <hr className='my-6 bg-[#CAC9CD]' />
    </div>
  );
}
