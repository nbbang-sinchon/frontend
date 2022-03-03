import styled from '@emotion/styled';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../assets/assets';
import { FRONT_URL } from '../config';
import { COLORS, HOVER_CURSOR_PONTER, SIZES } from '../styles/constants';

function MyPageHeader() {
  const Logo = () => {
    const Container = styled.div`
      display: flex;

      ${HOVER_CURSOR_PONTER};
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

    padding: 10px 0px;
    border-bottom: 2px solid ${COLORS.PRIMARY};
    min-width: ${SIZES.HEADER_MIN_WIDTH};
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
  `;

  const Column = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;

    &:nth-of-type(2) {
      flex: 2;
    }
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

  const navigate = useNavigate();

  const onClick = () => {
    fetch(`${FRONT_URL}/logout`).then((response) => {
      if (response.status == 200) {
        navigate('/');
      }
    });
  };

  return (
    <Container>
      <Column></Column>
      <Column>
        <Logo />
      </Column>
      <Column>
        <LogOutButton onClick={onClick}>로그아웃</LogOutButton>
      </Column>
    </Container>
  );
}

export default MyPageHeader;
