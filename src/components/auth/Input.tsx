/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react';

type AuthInputProps = {
  name: string;
  type: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
};

const AuthInputs = (props: AuthInputProps) => {
  return (
    <div className='mt-5'>
      <label
        htmlFor='exampleEmail0'
        className='form-label mb-2 inline-block text-gray-700'
      />
      {props.name}

      <input
        type={props.type}
        className='w-full rounded-md text-black'
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default AuthInputs;
