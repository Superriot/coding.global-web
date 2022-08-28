/* eslint-disable no-console */
import Link from 'next/link';

const logOutClick = () => {
  localStorage.removeItem('auth');
  console.log('ausgeloggt');
};

const logout = () => {
  return (
    <div className='mt-5 ml-[] '>
      <button className='hover:underline ' onClick={logOutClick}>
        <Link href='./login'>Logout</Link>
      </button>
    </div>
  );
};

export default logout;
