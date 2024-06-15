import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-full flex space-x-4 justify-end items-center'>
      <Link to='/' title='Página Inicial'>
        <img src='/assets/home.svg' alt='home' className='cursor-pointer' />
      </Link>
      <div className='relative cursor-pointer'>
        <img src='/assets/avatar.svg' alt='' />
        <div className='absolute bottom-0 right-2 border-2 border-[#2A233C] h-3 w-3 rounded-full bg-[#04F81C]'></div>
      </div>
    </header>
  );
}
