'use client';

import { useState } from 'react';
import { SignInFlow } from '../types';
import SignInCard from './SignInCard';
import SignUpCard from './SignUpCard';

const AuthPage = () => {
  const [card, setCard] = useState<SignInFlow>('signIn');

  return (
    <div className="h-full bg-red-500 flex items-center justify-center">
      <div>
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
