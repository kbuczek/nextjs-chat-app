import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [pending, setPending] = useState<boolean>(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new account</CardTitle>
        <CardDescription>
          Use your email or another service to sign up
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form>
          <div className="flex flex-col  w-full items-center gap-2">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              disabled={pending}
              required
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              disabled={pending}
              required
            />
            <Input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="confirmPassword"
              placeholder="Confirm password"
              disabled={pending}
              required
            />
            <Button className="w-full" variant="default" disabled={pending}>
              Submit
            </Button>
          </div>
        </form>
        <Separator />
        <div className="flex flex-col gap-2">
          <Button variant="outline" disabled={pending}>
            <FcGoogle className="size-5" />
            Continue with Google
          </Button>
          <Button variant="outline" disabled={pending}>
            <FaGithub />
            Continue with GitHub
          </Button>
          <div className="flex flex-col items-center text-sm">
            Already have an account?{' '}
            <div
              className="text-blue-500 hover:underline hover:cursor-pointer"
              onClick={() => setCard('signIn')}
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
