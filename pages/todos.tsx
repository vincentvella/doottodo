import { GetServerSideProps } from 'next';
import Header from '~/components/Header';
import Todo from '~/screens/Todo';
import { authenticated } from '../server/authenticated';

type Props = {
  seo: { title: string };
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const auth = await authenticated()(ctx);
  return {
    ...auth,
    props: {
      ...auth.props,
      seo: { title: 'Todos' },
    },
  };
};

export default ({ seo }: Props) => {
  return (
    <>
      <Header backEnabled={false} title={seo.title} />
      <Todo />
    </>
  );
};
