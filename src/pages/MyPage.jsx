import React from 'react';
import Main from '../components/Main';
import MyPageHeader from '../components/MyPageHeader';
import MyProfile from '../components/MyProfile';

function MyPage() {
  return (
    <>
      <MyPageHeader />
      <Main>
        <MyProfile />
      </Main>
    </>
  );
}

export default MyPage;
