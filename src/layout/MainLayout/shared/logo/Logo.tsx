import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='flex justify-center items-center w-40 my-4 no-underline'>
      <h1 className='text-black text-2xl'>Logo Here</h1>
    </Link>
  );
};

export default Logo;
