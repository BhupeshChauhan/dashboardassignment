import { useState } from 'react';
import { Search } from 'lucide-react';
import logo from '../../../assets/imgs/codegigslogo.png'
import { Link } from 'react-router-dom';
import { PiArticleMediumFill } from 'react-icons/pi';

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  return (
    <nav className='navbar'>
      <Link to='/' className='flex-none w-28'>
        <img src={logo} alt='CodeGigs Logo' className='w-full' />
      </Link>
      <div
        className={
          'absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ' +
          (searchBoxVisibility ? 'show' : 'hide')
        }
      >
        <input
          type='text'
          placeholder='Search'
          className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12 placeholder:text-lg'
        />
        <div className='absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2'>
          <Search size={15} />
        </div>
      </div>
      <div className='flex items-center gap-3 md:gap-6 ml-auto'>
        <button
          className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center text-xl'
          onClick={() => setSearchBoxVisibility((prev) => !prev)}
        >
          <Search size={15} />
        </button>
        <Link to='/editor' className='hidden md:flex gap-2 link items-center justify-center'>
          <PiArticleMediumFill /> Write
        </Link>
        <Link to='/signin' className='btn-dark py-2'>
          Sign In
        </Link>
        <Link to='/signup' className='hidden md:block btn-light py-2'>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
