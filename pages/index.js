import dynamic from 'next/dynamic';
import LoadingPage from '@/components/LoadingPage';
const App = dynamic(() => import('../sections'), {
  ssr: false,
  loading: () => <LoadingPage />,
});

export default function Home() {
  return <App />;
}
