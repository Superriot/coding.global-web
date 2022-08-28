import Link from 'next/link';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';

type propAuthButton = {
  title: string;
};

const AuthButton = (props: propAuthButton) => {
  return (
    <>
      <h2 className='text-center text-white'>{props.title}</h2>

      <div className='flex w-full justify-between '>
        <Link href='./register'>
          <button className='mt-3 h-10 w-32 cursor-pointer rounded-md border-2 bg-transparent'>
            <div className='mt-1 flex items-center justify-center '>
              <BiLogIn size={30} />
              register
            </div>
          </button>
        </Link>
        <Link href='./login'>
          <button className='mt-3 h-10 w-32 cursor-pointer rounded-md border-2 bg-transparent'>
            <div className='mt-1 flex items-center justify-center'>
              <AiOutlineUserAdd size={30} /> Login
            </div>
          </button>
        </Link>
      </div>
      <div>
        <div className='relative mt-10'>
          <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300'>
            <p className='m-auto mx-4 mb-0 text-center font-semibold'>OR</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthButton;
