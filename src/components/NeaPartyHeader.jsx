import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { icons, images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

function NewPartyHeader({ onClick }) {
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

  const SaveButton = styled.button`
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
        <SaveButton onClick={onClick}>완료</SaveButton>
      </Column>
    </Container>
  );
}

NewPartyHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewPartyHeader;
