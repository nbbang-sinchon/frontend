import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

const MyPageHeader = () => {
  const Logo = () => {
    const Container = styled.div`
      display: flex;
      &:hover {
        cursor: pointer;
      }
    `;

    const Image = styled.img`
      height: 60px;

      @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
        height: 40px;
      }
    `;

    return (
      <Link to="/main">
        <Container>
          <Image src={images.logo} />
        </Container>
      </Link>
    );
  };

  const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    border-bottom: 2px solid ${COLORS.PRIMARY};
    min-width: ${SIZES.HEADER_MIN_WIDTH};
    position: sticky;
    top: 0;
    background-color: white;
    font-weight: 700;
    z-index: 1;
  `;

  const WhiteSpace = styled.div`
    width: 112.6px;
    height: 50.33px;
  `;

  const LogOutButton = styled.div`
    font-size: 20px;
    font-weight: 400;
    border: 1.5px solid;
    border-radius: 15px;
    color: ${COLORS.WHITE};
    background-color: ${COLORS.PRIMARY};
    padding: 9px 18px 9px 18px;

    flex-grow: 0;
    flex-shrink: 0;

    &:hover {
      color: ${COLORS.WHITE};
      background-color: ${COLORS.PRIMARY};
      cursor: pointer;
    }
  `;

  return (
    <Container>
      <WhiteSpace></WhiteSpace>
      <Logo />
      <Link to="/">
        <LogOutButton>로그아웃</LogOutButton>
      </Link>
    </Container>
  );
};

export default MyPageHeader;
