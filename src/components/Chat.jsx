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

  margin-top: ${(props) => (props.isContinuous && '5px') || '15px'};
  width: 100%;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${COLORS.PRIMARY};
  margin-right: 10px;
  box-sizing: border-box;
`;

const Blank = styled.div`
  width: 36px;
  height: 30px;
  margin-right: 10px;
`;

const Nickname = styled.div`
  font-size: 12px;
  padding: 5px;
  padding-top: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 50%;
  font-size: 14px;
`;

const InnerContent = styled.div`
  height: fit-content;
  background: ${(props) => (props.isSender && COLORS.PRIMARY) || COLORS.GRAY};
  padding: 7px 15px;
  color: ${(props) => props.isSender && COLORS.WHITE};
  border-radius: 20px;
`;

const Time = styled.div`
  display: flex;
  align-items: flex-end;

  font-size: 10px;
  color: ${COLORS.DARK_GRAY};
  white-space: nowrap;
  margin: 0 5px;
`;

function Chat({ chat, isSender, isContinuous }) {
  if (isContinuous) {
    return (
      <Container isSender={isSender} isContinuous={isContinuous}>
        {!isSender && <Blank />}
        <Content>
          <InnerContent isSender={isSender}>{chat.content}</InnerContent>
        </Content>
        <Time>{convertDateToTime(chat.createTime)}</Time>
      </Container>
    );
  }
  return (
    <Container isSender={isSender}>
      {!isSender && <Image src={images.logo} />}
      <Content>
        {!isSender && <Nickname>{chat.sender.nickname}</Nickname>}
        <InnerContent isSender={isSender}>{chat.content}</InnerContent>
      </Content>
      <Time>{convertDateToTime(chat.createTime)}</Time>
    </Container>
  );
}

Chat.propTypes = {
  chat: PropTypes.object,
  isSender: PropTypes.bool,
  isContinuous: PropTypes.bool,
};

export default Chat;
