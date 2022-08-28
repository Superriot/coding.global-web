import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  const logOutClick = () => {
    localStorage.removeItem('auth');
    router.push('/auth/login');
  };

  return (
    <div className='mt-5'>
      <button className='cursor-pointer hover:underline' onClick={logOutClick}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
