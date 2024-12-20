import { SignInFlow } from '../types';

interface SignInCardProps {
  setCard: (card: SignInFlow) => void;
}

const SignInCard = ({ setCard }: SignInCardProps) => {
  return <div>Sign In Card</div>;
};

export default SignInCard;
