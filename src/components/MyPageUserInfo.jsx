import styled from '@emotion/styled';
import React from 'react';
import { images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 150px;
  min-width: ${SIZES.HEADER_MIN_WIDTH};
  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
  font-weight: 700;

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: ${COLORS.DARK_GRAY};
    margin: 0px 0px 4px 0px;
  }
`;

const Profile = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 70%;
  border: 2px solid ${COLORS.GRAY};
  overflow: hidden;
  margin: 0px 0px 20px 0px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  h3 {
    font-size: 12px;
    font-weight: 600;
    color: ${COLORS.DARK_GRAY};
    margin: 10px 0px 4px 0px;
  }
  input {
    font-size: 20px;
    font-weight: 600;
    width: 335px;
    height: 13px;
    padding: 13px;
    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  }

  select {
    width: 361px;
    height: 30px;

    padding: 5px 30px 5px 10px;
    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  }

  select option {
    background-color: ${COLORS.WHITE};
    padding: 3px 0;
  }
`;

const SaveButton = styled.div`
  font-size: 15px;
  font-weight: 400;
  font-align: center

  border: 1.5px solid;
  border-radius: 6px;

  color: ${COLORS.WHITE};
  background-color: ${COLORS.PRIMARY};
  padding: 15px 153px;
  margin-top: 30px;

  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8; 
    cursor: pointer;
  }
`;

const SecessionButton = styled.div`
  font-size: 15px;
  font-weight: 400;
  font-align: center

  border: 1.5px solid;
  border-radius: 6px;

  color: ${COLORS.WHITE};
  background-color: ${COLORS.DARK_GRAY};
  padding: 15px 153px;

  margin-top: 30px;

  flex-grow: 0;
  flex-shrink: 0;
  
  &:hover {
    opacity: 0.8; 
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 30px;
  padding-right: 10px;
  @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
    height: 40px;
  }
`;

function MyPageUserInfo() {
  return (
    <>
      <Container>
        <Profile>
          <img src={images.logo}></img>
        </Profile>
        <UserInfo>
          <h3>닉네임</h3>
          <input></input>
          <h3>지역</h3>
          <select>
            <option value="신촌동">신촌동</option>
            <option value="연희동">연희동</option>
            <option value="창천동">창천동</option>
          </select>
          <h3>받은 추천 수</h3>
          <InnerContainer>
            <Image src={images.bread} />
            <h3>10개</h3>
          </InnerContainer>
        </UserInfo>
        <SaveButton>저장하기</SaveButton>
        <SecessionButton>탈퇴하기</SecessionButton>
      </Container>
    </>
  );
}

export default MyPageUserInfo;
