import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FRONT_URL } from '../config';
import Logo2 from './Logo2';
import { COLORS, SIZES } from '../styles/constants';

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

function MyPageHeader() {
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
        <Logo2 />
      </Column>
      <Column>
        <LogOutButton onClick={onClick}>로그아웃</LogOutButton>
      </Column>
    </Container>
  );
}

export default MyPageHeader;
