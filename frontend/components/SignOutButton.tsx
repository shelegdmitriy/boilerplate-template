import * as React from 'react';

type Props = {
  accountId: string;
  onClick: React.MouseEventHandler;
};

const SignOutButton = ({ accountId, onClick }: Props) => {
  return (
    <button className='py-2 px-3 bg-sky-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none' style={{ float: 'right' }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
};

export default SignOutButton;
