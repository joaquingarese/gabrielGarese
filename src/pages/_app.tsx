import type { AppProps } from 'next/app';
import Layout from '~/components/layout/Layout';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '~/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-bodyBackground min-h-screen flex flex-col">
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
