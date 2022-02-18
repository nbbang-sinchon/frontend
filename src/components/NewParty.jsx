import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { icons, images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';

function NewPartyHeader() {
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

function NewParty() {
  const Container = styled.div`
    height: 100vh;
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    min-width: ${SIZES.HEADER_MIN_WIDTH};
    position: sticky;
    top: 0;
    background-color: ${COLORS.WHITE};
  `;

  const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
  `;

  const TitleInput = styled.input`
    font-size: 20px;
    font-weight: 500;
    width: 100%;

    margin-bottom: 30px;

    border-bottom: 1px solid ${COLORS.DARK_GRAY};

    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  `;

  const HashTagInput = styled.input`
    font-size: 10px;
    font-weight: 400;
    width: 100%;

    margin-bottom: 20px;
    border-bottom: 1px solid ${COLORS.DARK_GRAY};

    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  `;

  const ContentInput = styled.textarea`
    font-size: 12px;
    font-weight: 400;
    width: 100%;
    word-wrap: break-word;
    border: none;
    padding-bottom: 400px;
    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  `;

  const Select = styled.div`
    width: 100%;
    display: flex;
    items-align: center;
    margin-bottom: 40px;

    select {
      font-size: 10px;
      padding: 2px 5px;
      background-color: ${COLORS.LIGHT_GRAY};
      color: ${COLORS.DARK_GRAY};
    }

    select option {
      background-color: ${COLORS.WHITE};
      padding: 3px 0;
    }

    input {
      margin-left: 10px;
      font-size: 10px;
      width: 18%;
      border: 1px solid ${COLORS.BLACK};
      background-color: ${COLORS.LIGHT_GRAY};
      color: ${COLORS.DARK_GRAY};
    }
  `;

  return (
    <>
      <Container>
        <InnerContainer>
          <TitleInput placeholder="파티 제목을 입력하세요."></TitleInput>
          <HashTagInput placeholder="#해시태그로 파티 정보를 알려주세요."></HashTagInput>
          <Select>
            <select>
              <option value="SINCHON">신촌동</option>
              <option value="YEONHUI">연희동</option>
              <option value="CHANGCHEON">창천동</option>
            </select>
            <input type="number" placeholder="인원 수"></input>
          </Select>
          <ContentInput placeholder="내용을 입력하세요."></ContentInput>
        </InnerContainer>
      </Container>
    </>
  );
}

export { NewPartyHeader, NewParty };