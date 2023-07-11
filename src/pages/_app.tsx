import Router from 'next/router';
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';

import Layout from '~/components/layout/Layout';
import '~/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <div className="bg-bodyBackground min-h-screen flex flex-col">
      <Layout>
        <ToastContainer />
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10">
            <BeatLoader size={50} />
          </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
