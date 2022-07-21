import SignUpEmail from '~/screens/SignUpEmail';
import { unauthenticated } from '../../server/unauthenticated';

export const getServerSideProps = unauthenticated();

export default SignUpEmail;
