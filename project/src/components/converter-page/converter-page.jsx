import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Converter from '../converter/converter';
import ConverterHistory from '../converter-history/converter-history';
import MainNavigation from '../main-navigation/main-navigation';
import Promo from '../promo/promo';
import Footer from '../footer/footer';

function ConverterPage() {
  return (
    <>
      <header className="header">
        <Logo/>
        <MainNavigation/>
        <UserBlock/>
      </header>
      <main>
        <Promo/>
        <div className="content">
          <Converter/>
          <ConverterHistory/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ConverterPage;
