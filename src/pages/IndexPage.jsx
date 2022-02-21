import React from 'react';
import Header from '../components/Header';
import Index from '../components/Index';
import Main from '../components/Main';
import Parties from '../components/Parties';
import Footer from '../components/Footer';

function IndexPage() {
  return (
    <>
      <Header />
      <Index />
      <Main isWhite>
        <Parties parties={[]} />
      </Main>
      <Footer />
    </>
  );
}

export default IndexPage;
