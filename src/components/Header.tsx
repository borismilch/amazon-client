import React from 'react'
import { useHistory } from 'react-router-dom';
import { MenuIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline'
import HeaderList from './header/HeaderList';
import DownHeader from './header/DownHeader';

const Header: React.FC = () => {

  const history = useHistory()

  const pushHistory = () => history.push('/')

  return (
    <>
    <div className='h-[113px] md:h-[116px]' />
    <header className='fixed top-0 left-0 w-full z-50'>
      <div className='flex items-center bg-amazon_blue p-2 flex-grow py-3'>

        <div className='items-center mt-2 flex flex-grow sm:flex-grow-0 mr-3'>

          <img
           src="https://links.papareact.com/f90" 
           width={100}
           height={20}
           onClick={pushHistory}
           alt="amazon"
           className='cursor-pointer' 
          />

        </div>

        {/* serscch  */}

        <div className='hidden relative bg-yellow-400 overflow-hidden md:flex cursor-pointer hover:bg-yellow-500 rounded-md flex-grow'>

          <input
            className='p-2 w-6 flex-grow focus:outline-none'

           type="text" 
            
          />
          <SearchIcon className='h-12 p-4' />

        </div>

        <HeaderList />

      </div>

      <DownHeader />

    

    </header>
    </>
  );
};

export default Header
