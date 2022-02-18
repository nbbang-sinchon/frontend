import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { icons, images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

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
  justify-content: center;
  align-items: center;

  padding: 10px;
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

  svg {
    width: 35px;
    height: 35px;
  }

  &:hover svg {
    opacity: 0.8;
    cursor: pointer;
  }

  &:nth-of-type(2) {
    flex: 2;
  }
`;

const SaveButton = styled.div`
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
    opacity: 0.8;
    cursor: pointer;
  }
`;

function CreatePartyHeader() {
  return (
    <Container>
      <Column>
        <Link to="/main">
          <icons.CancelIcon />
        </Link>
      </Column>
      <Column>
        <Logo />
      </Column>
      <Column>
        <Link to="/main">
          <SaveButton>완료</SaveButton>
        </Link>
      </Column>
    </Container>
  );
}

export default CreatePartyHeader;
