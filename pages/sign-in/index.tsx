import SignIn from '~/screens/SignIn';
import { unauthenticated } from '../../server/unauthenticated';

export const getServerSideProps = unauthenticated();

export default SignIn;
