import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { images } from '../assets/assets';
import { COLORS } from '../styles/constants';
import { convertDateToTime } from '../utils/converter';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.isSender && 'row-reverse') || 'row'};

  margin: 10px 0;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:last-of-type {
      justify-content: flex-end;
    }
  }
`;

const Profile = styled.div`
  font-size: 10px;
`;

const Content = styled.div`
  max-width: 50%;
  font-size: 14px;
  margin-left: 10px;
  padding: 10px 15px;
  background: ${(props) => (props.isSender && COLORS.PRIMARY) || COLORS.GRAY};
  color: ${(props) => props.isSender && COLORS.WHITE};
  border-radius: 20px;
`;

const Time = styled.div`
  font-size: 10px;
  color: ${COLORS.DARK_GRAY};
  white-space: nowrap;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${COLORS.PRIMARY};
`;

function Chat({ chat, isSender }) {
  return (
    <Container isSender={isSender}>
      {!isSender && (
        <Profile>
          <Image src={images.logo} />
          <div>{chat.sender.nickname}</div>
        </Profile>
      )}
      <Content isSender={isSender}>{chat.content}</Content>
      <Time>{convertDateToTime(chat.createTime)}</Time>
    </Container>
  );
}

Chat.propTypes = {
  chat: PropTypes.object,
  isSender: PropTypes.bool,
};

export default Chat;
