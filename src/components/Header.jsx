import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';
import Logo from './Logo';

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
`;

const HeaderColumn = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  &:nth-of-type(2n) {
    flex: 2;
  }

  > svg {
    margin: 0 5px;
    min-width: 24px;

    &:hover {
      cursor: pointer;
    }

    @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
      width: 24px;
      height: 24px;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;

  width: 100%;
  padding: 5px 8px 5px 20px;
  box-sizing: border-box;
  border: 2px solid ${COLORS.PRIMARY};
  border-radius: 30px;
  color: ${COLORS.PRIMARY};

  @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
    font-size: 8px;
    padding: 3px 5px 3px 10px;
    border-radius: 25px;

    > svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const SearchBarInput = styled.input`
  width: 100%;

  &::placeholder {
    color: ${COLORS.PRIMARY2};
  }
`;

function Header() {
  return (
    <Container>
      <HeaderColumn>
        <Logo />
      </HeaderColumn>
      <HeaderColumn>
        <SearchBar>
          <SearchBarInput placeholder="카테고리명, 음식명 등을 검색하여 원하는 파티을 찾아 보세요!" />
          <icons.SearchIcon />
        </SearchBar>
      </HeaderColumn>
      <HeaderColumn>
        <Link to="/my-party">
          <icons.PartyIcon />
        </Link>
        <Link to="/mypage">
          <icons.ProfileIcon />
        </Link>
        <icons.NotificationIcon />
      </HeaderColumn>
    </Container>
  );
}

export default Header;
