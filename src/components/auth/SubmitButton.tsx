import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const AuthButton = () => {
  return (
    <div className='flex w-full justify-between'>
      <div className='mt-3 h-10 w-32 rounded-md border-2 bg-transparent'>
        <div className='mt-1 flex items-center justify-center'>
          <BsFacebook size={30} />
        </div>
      </div>
      <div className='mt-3 h-10 w-32 rounded-md border-2 bg-transparent'>
        <div className='mt-1 flex items-center justify-center'>
          <BsTwitter size={30} />
        </div>
      </div>
      <div className='mt-3 h-10 w-32 rounded-md border-2 bg-transparent'>
        <div className='mt-1 flex items-center justify-center'>
          <BsGithub size={30} />
        </div>
      </div>
    </div>
  );
};

export default AuthButton;
