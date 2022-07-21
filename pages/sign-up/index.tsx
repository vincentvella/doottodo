import SignUp from '~/screens/SignUp';
import { unauthenticated } from '../../server/unauthenticated';

export const getServerSideProps = unauthenticated();

export default SignUp;
