import React from 'react';
import Main from '../components/Main';

import MyPageHeader from '../components/MyPageHeader';
import MyPageUserInfo from '../components/MyPageUserInfo';

function MyPage() {
  return (
    <>
      <MyPageHeader />
      <Main>
        <MyPageUserInfo />
      </Main>
    </>
  );
}

export default MyPage;
