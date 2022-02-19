import React from 'react';
import Main from '../components/Main';
import { MyPageHeader, MyPageUserInfo } from '../components/MyPage';

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
