import * as React from 'react';
import Home from '~/screens/Home';
import Landing from '~/screens/Landing';
import { User } from '@supabase/auth-helpers-nextjs';
import { dual } from '../server/dual';

type Props = {
  user: User | null;
};

const Index: React.FC<Props> = ({ user }) => (user ? <Home /> : <Landing />);

export const getServerSideProps = dual;

export default Index;
