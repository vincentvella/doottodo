import SignInEmail from '~/screens/SignInEmail';
import { unauthenticated } from '../../server/unauthenticated';

export const getServerSideProps = unauthenticated();

export default SignInEmail;
