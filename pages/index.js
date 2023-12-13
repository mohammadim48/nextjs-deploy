import Footer from '../components/footer/Layout';
import Header from '../components/header';
import Banner from '../components/Banner';
import Links from '../components/Links'
import News from '../components/news';
import React from 'react';
import { useSelector } from 'react-redux';
import LanguageWrapper from '../components/locales/LanguageWrapper';

export default function Home({ posts }) {
  const { texts } = useSelector((state) => state);

  return (
    <LanguageWrapper>
    <div dir={texts.Dir}>
      <Header></Header>
      <Banner></Banner>
      <Links></Links>
      <News/>
      <Footer></Footer>
    </div>
    </LanguageWrapper>
  )
}
