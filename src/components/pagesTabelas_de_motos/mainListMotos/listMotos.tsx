import { Link } from 'react-router-dom';

export default function ListMotos() {
  return (
    <section className='space-y-6 w-full'>
      <div className=' h-[138px] bg-[#312D4B] flex items-center rounded-xl'>
        <div className='w-[240px] h-full flex items-center justify-center'>
          <p className='text-lg text-[#8C57FF] font-medium leading-6'>#0001</p>
        </div>

        <div className='flex w-full justify-between'>
          <div className='space-y-3'>
            <div className='flex items-center '>
              <h1 className='text-lg font-semibold mr-3 text-[#E7E3FC]'>HONDA POP 110I</h1>
              <p className='bg-[#354546] text-[#56CA00] px-3 p-0.5 rounded-full'>Em estoque</p>
            </div>
            <p className='text-base font-medium'>Valor: R$ 15.000,00</p>
            <p className='text-base font-medium'>Cor: BRANCA</p>
          </div>

          <div className='flex items-center space-x-5 mr-10'>
            <a href='/'>
              <img src='../../../../public/assets/apagar.svg' alt='apagar' />
            </a>
            <Link to='/editar-dados'>
              <img src='../../../../public/assets/editar.svg' alt='editar' />
            </Link>
          </div>
        </div>
      </div>

      <div className=' h-[138px]  bg-[#312D4B] flex items-center rounded-xl'>
        <div className='w-[240px] h-full flex items-center justify-center'>
          <p className='text-lg text-[#8C57FF] font-medium leading-6'>#0002</p>
        </div>

        <div className='flex w-full justify-between'>
          <div className='space-y-3'>
            <div className='flex items-center '>
              <h1 className='text-lg font-semibold mr-3 text-[#E7E3FC]'>HONDA POP 110I</h1>
              <p className='bg-[#55304C] text-[#FF4C51] px-3 p-0.5 rounded-full'>Sem estoque</p>
            </div>
            <p className='text-base font-medium'>Valor: R$ 15.000,00</p>
            <p className='text-base font-medium'>Cor: BRANCA</p>
          </div>

          <div className='flex items-center space-x-5 mr-10'>
            <a href='a'>
              <img src='../../../../public/assets/apagar.svg' alt='apagar' />
            </a>
            <a href='a'>
              <img src='../../../../public/assets/editar.svg' alt='editar' />
            </a>
          </div>
        </div>
      </div>

      <div className=' h-[138px] bg-[#312D4B] flex items-center rounded-xl'>
        <div className='w-[240px] h-full flex items-center justify-center'>
          <p className='text-lg text-[#8C57FF] font-medium leading-6'>#0003</p>
        </div>

        <div className='flex w-full justify-between'>
          <div className='space-y-3'>
            <div className='flex items-center '>
              <h1 className='text-lg font-semibold mr-3 text-[#E7E3FC]'>HONDA POP 110I</h1>
              <p className='bg-[#544146] text-[#FFB400] px-3 p-0.5 rounded-full'>Em trânsito</p>
            </div>
            <p className='text-base font-medium'>Valor: R$ 15.000,00</p>
            <p className='text-base font-medium'>Cor: BRANCA</p>
          </div>

          <div className='flex items-center space-x-5 mr-10'>
            <a href='a'>
              <img src='../../../../public/assets/apagar.svg' alt='apagar' />
            </a>
            <a href='a'>
              <img src='../../../../public/assets/editar.svg' alt='editar' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
