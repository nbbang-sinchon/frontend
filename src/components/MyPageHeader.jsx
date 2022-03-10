import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { COLORS, SIZES } from '../styles/constants';
import useFetch from '../hooks/useFetch';
import { LoginStoreContext } from './Stores/LoginStore';

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
  const { customFetch } = useFetch();
  const { setIsLoggedin } = useContext(LoginStoreContext);

  const onClick = async () => {
    await customFetch('/gologout', 'POST');
    navigate('/');
    setIsLoggedin(false);
  };

  return (
    <Container>
      <Column></Column>
      <Column>
        <Logo titleVisible={false} />
      </Column>
      <Column>
        <LogOutButton onClick={onClick}>로그아웃</LogOutButton>
      </Column>
    </Container>
  );
}

export default MyPageHeader;
