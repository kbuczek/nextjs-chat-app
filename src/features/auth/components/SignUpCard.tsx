import { SignInFlow } from '../types';

interface SignInCardProps {
  setCard: (card: SignInFlow) => void;
}

const SignUpCard = ({ setCard }: SignInCardProps) => {
  return <div>Sign Up Card</div>;
};

export default SignUpCard;
