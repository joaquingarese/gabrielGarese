import type { AppProps } from 'next/app';
import Layout from '~/components/layout/Layout';

import '~/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
