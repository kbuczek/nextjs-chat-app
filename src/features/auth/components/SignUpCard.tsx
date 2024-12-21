import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SignInFlow } from '../types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

interface SignUpCardProps {
  setCard: (card: SignInFlow) => void;
}
const SignUpCard = ({ setCard }: SignUpCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new account</CardTitle>
        <CardDescription>
          Use your email or 3rd party account to sign up
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <form>
          <div className="flex flex-col  w-full items-center gap-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <Input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="confirmPassword"
              placeholder="Confirm password"
            />
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
            Already have an account?{' '}
            <div
              className="text-blue-500 hover:underline hover:cursor-pointer"
              onClick={() => setCard('signUp')}
            >
              Sign In
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
