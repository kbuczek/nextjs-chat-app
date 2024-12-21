'use client';

import { useState } from 'react';
import { SignInFlow } from '../types';
import SignInCard from './SignInCard';
import SignUpCard from './SignUpCard';

const AuthPage = () => {
  const [card, setCard] = useState<SignInFlow>('signIn');

  return (
    <div className="h-full flex items-center justify-center bg-black">
      <div className=" md:w-[420px]">
        {card === 'signIn' ? (
          <SignInCard setCard={setCard} />
        ) : (
          <SignUpCard setCard={setCard} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
