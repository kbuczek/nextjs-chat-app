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
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useAuthActions } from '@convex-dev/auth/react';

interface SignInCardProps {
  setCard: (card: SignInFlow) => void;
}

const SignInCard = ({ setCard }: SignInCardProps) => {
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState('');

  // const handleSignIn = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setPending(true);

  //   signIn('github', {})
  //     .catch((err) => setError(err))
  //     .finally(() => setPending(false));
  // };

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
            <Button
              onClick={(e) => {
                // handleSignIn(e);
              }}
              className="w-full"
              variant="default"
              disabled={pending}
            >
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
          <Button
            onClick={() => signIn('github')}
            variant="outline"
            disabled={pending}
          >
            <FaGithub />
            Continue with GitHub
          </Button>
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
