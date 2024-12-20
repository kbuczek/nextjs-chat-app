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

interface SignInCardProps {
  setCard: (card: SignInFlow) => void;
}

const SignInCard = ({ setCard }: SignInCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Use your email or 3rd party account to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col  w-full items-center gap-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full" variant="default">
              Submit
            </Button>
          </div>
        </form>

        {/* <div className="flex flex-col gap-4">
          <Input type="password" placeholder="Password" />
          
        </div> */}
        <Separator />
        <div className="flex flex-col gap-[20px]">
          <Button variant="outline">Continue with Google</Button>
          <Button variant="outline">Continue with GitHub</Button>
          <div>
            Don't have an account?{' '}
            <div onClick={() => setCard('signUp')}>Sign Up</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
