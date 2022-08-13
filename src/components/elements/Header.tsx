import Link from 'next/link';

type Headers = {
  name: string;
};

const Header = (props: Headers) => {
  return (
    <div className='flex items-center justify-between'>
      <Link href='/'>
        <button className='rounded bg-blue-500 font-bold hover:bg-blue-700'>
          Home
        </button>
      </Link>

      <h1 className='text-center font-secondary text-white'>{props.name}</h1>
      <div></div>
    </div>
  );
};

export default Header;
