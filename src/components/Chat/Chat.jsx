import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { images } from '../../assets/assets';
import { COLORS } from '../../styles/constants';
import { convertDateToTime } from '../../utils/converter';
import ChatContent from './ChatContent';

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isNotice && 'center') || 'flex-start'};
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

const Time = styled.div`
  display: flex;
  align-items: flex-end;

  font-size: 10px;
  color: ${COLORS.DARK_GRAY};
  white-space: nowrap;
  margin: 0 5px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const NotRead = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};

  font-size: 12px;
  color: ${COLORS.PRIMARY};
  margin: 0 5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isSender && 'row-reverse') || 'row'};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Chat = forwardRef(({ chat, isContinuous, isSender }, ref) => {
  if (chat.type === 'EXIT' || chat.type === 'ENTER') {
    return (
      <Container isNotice ref={ref}>
        <ChatContent type={chat.type} content={chat.content} />
      </Container>
    );
  }
  if (isContinuous) {
    return (
      <Container isSender={isSender} isContinuous ref={ref}>
        {!isSender && <Blank />}
        <ChatContent isSender={isSender} content={chat.content} type={chat.type} />
        <InfoColumn>
          <NotRead isSender={isSender}>{chat.notReadNumber || ''}</NotRead>
          <Time>{convertDateToTime(chat.createTime)}</Time>
        </InfoColumn>
      </Container>
    );
  }
  return (
    <Container isSender={isSender} ref={ref}>
      {!isSender && <Image src={chat.sender.avatar || images.logo} />}
      <Wrapper>
        {!isSender && <Nickname>{chat.sender.nickname}</Nickname>}
        <Row isSender={isSender}>
          <ChatContent isSender={isSender} content={chat.content} type={chat.type} />
          <InfoColumn>
            <NotRead isSender={isSender}>{chat.notReadNumber || ''}</NotRead>
            <Time>{convertDateToTime(chat.createTime)}</Time>
          </InfoColumn>
        </Row>
      </Wrapper>
    </Container>
  );
});

Chat.displayName = 'Chat';
Chat.propTypes = {
  chat: PropTypes.object,
  isContinuous: PropTypes.bool,
  isSender: PropTypes.bool,
};

export default Chat;
