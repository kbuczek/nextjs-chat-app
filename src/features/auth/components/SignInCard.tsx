import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SignInFlow } from '../types';
import { Input } from '@/components/ui/input';
import { Separator } from '@radix-ui/react-separator';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface SignInCardProps {
  setCard: (card: SignInFlow) => void;
}

const SignInCard = ({ setCard }: SignInCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Use your email or 3rd party account to login
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <form>
          <div className="flex flex-col  w-full items-center gap-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full" variant="default">
              Submit
            </Button>
          </div>
        </form>
        <Separator />
        <div className="flex flex-col gap-2">
          <Button variant="outline">Continue with Google</Button>
          <Button variant="outline">Continue with GitHub</Button>
          <div className="flex flex-col items-center text-sm">
            Don't have an account?{' '}
            <div
              className="text-blue-500 hover:underline hover:cursor-pointer"
              onClick={() => setCard('signUp')}
            >
              Sign Up
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
