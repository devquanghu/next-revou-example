import '@/styles/globals.css'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react';

// import { AppProps } from "next/app";
// import Head from "next/head";

// export type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// export type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// export default function App({ Component, pageProps }: AppPropsWithLayout) {

//   const getLayout = Component.getLayout ?? ((page) => page)

//   return (
//     <>
//       <Head>
//         <title>{'Dummy Project'}</title>
//       </Head>
//       {getLayout(<Component {...pageProps} />)}
//     </>
//   )
// }

export default function App({ Component, pageProps }: AppProps) {
  
    return (
      <>
        <Head>
          <title>{'Dummy Project'}</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
