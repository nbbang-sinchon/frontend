import styled from '@emotion/styled';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { icons } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';
import Logo from './Logo';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  box-sizing: border-box;
  border-bottom: 2px solid ${COLORS.PRIMARY};
  min-width: ${SIZES.MIN_WIDTH};
  position: sticky;
  top: 0;
  background-color: white;
  font-weight: 700;
  z-index: 1;
`;

const HeaderColumn = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
  }

  &:nth-of-type(2) {
    flex: 2;
  }

  &:nth-of-type(3) svg {
    min-width: 24px;
    margin-left: 8px;

    &:hover {
      cursor: pointer;
    }

    @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
      margin-left: 5px;
      width: 24px;
      height: 24px;
    }

    @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
      margin-left: 3px;
      width: 20px;
      height: 20px;
    }
  }
`;

const SearchBar = styled.form`
  display: flex;

  width: 100%;
  padding: 5px 8px 5px 20px;
  box-sizing: border-box;
  border: 2px solid ${COLORS.PRIMARY};
  border-radius: 30px;
  color: ${COLORS.PRIMARY};

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 8px;
    padding: 3px 3px 3px 10px;
    border-radius: 25px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    font-size: 6px;
    padding: 2px 2px 2px 10px;
    border-radius: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SearchBarInput = styled.input`
  width: 100%;

  &::placeholder {
    color: ${COLORS.PRIMARY2};
  }
`;

const SearchBarSubmit = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

function Header() {
  const navigate = useNavigate();

  const searchKeyword = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const search = form.get('keyword');

    navigate('/main/' + search);
  };

  return (
    <Container>
      <HeaderColumn>
        <Logo />
      </HeaderColumn>
      <HeaderColumn>
        <SearchBar onSubmit={searchKeyword}>
          <SearchBarInput name="keyword" placeholder="음식명 등을 검색하여 원하는 파티을 찾아 보세요!" />
          <SearchBarSubmit type="submit">
            <icons.SearchIcon />
          </SearchBarSubmit>
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
