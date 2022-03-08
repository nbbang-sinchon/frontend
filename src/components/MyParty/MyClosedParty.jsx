import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../../assets/assets';
import { COLORS, HOVER_CURSOR_PONTER } from '../../styles/constants';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;

  svg {
    width: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;

  margin-right: 10px;

  img {
    width: 30px;
  }
`;

const Profile = styled.div`
  width: 30;
  height: 30px;
  overflow: hidden;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  padding: 20px 30px;
  margin-right: 20px;
  font-size: 30px;
  width: 200px;

  background: ${COLORS.GRAY};
  border-radius: 10px;

  ${HOVER_CURSOR_PONTER}

  &:hover {
    opacity: 0.8;
  }

  &:nth-of-type(1) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Text = styled.div`
  font-size: 1px;
  color: ${COLORS.DARK_GRAY};

  margin-top: 5px;
`;

function MyClosedParty({ title }) {
  return (
    <Container>
      <Column>
        <Title>{title}</Title>
      </Column>
      <Column>
        <Row>
          <Column>
            <Profile>
              <img src={images.member1}></img>
            </Profile>
            <img src={images.bread}></img>
          </Column>
          <Column>
            <Profile>
              <img src={images.member2}></img>
            </Profile>
            <img src={images.bread}></img>
          </Column>
          <Column>
            <Profile>
              <img src={images.member3}></img>
            </Profile>
            <img src={images.bread}></img>
          </Column>
        </Row>
        <Text>수고한 파티원에게 빵을 선물하세요!</Text>
      </Column>
    </Container>
  );
}

export default MyClosedParty;

MyClosedParty.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
};
