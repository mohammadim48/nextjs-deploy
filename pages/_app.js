import { ApolloProvider } from '@apollo/client/react';
import { client } from '../lib/apollo';
import 'tailwindcss/tailwind.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './../redux/store/index'; // مسیر store Redux شما

import '../styles/globals.css';
import '../styles/dashboard.css';
import './../public/assets/css/tailwind-built.css';
import './../public/assets/css/slick.css';
import './../public/assets/css/animate.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}> {/* افزودن store به عنوان خصوصیت */}
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
