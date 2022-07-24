import Todo from '~/screens/Todo';
import { authenticated } from '../server/authenticated';

export const getServerSideProps = authenticated();

export default Todo;
