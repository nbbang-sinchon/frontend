import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { images } from '../../assets/assets';
import { COLORS } from '../../styles/constants';
import { convertDateToTime } from '../../utils/converter';

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: ${(props) => (props.isNotice && '90%') || '60%'};
  font-size: 14px;
`;

const InnerContent = styled.div`
  height: fit-content;
  background: ${(props) => (props.isNotice ? COLORS.DARK_GRAY : props.isSender ? COLORS.PRIMARY : COLORS.GRAY)};
  padding: ${(props) => (props.isNotice ? '7px 30px' : '7px 15px')};
  color: ${(props) => (props.isNotice || props.isSender) && COLORS.WHITE};
  border-radius: 20px;
  white-space: pre-wrap;
  margin: ${(props) => props.isNotice && '15px 0'};
  opacity: ${(props) => props.isNotice && '0.8'};
  white-space: ${(props) => props.isNotice && 'nowrap'};
`;

const Time = styled.div`
  display: flex;
  align-items: flex-end;

  font-size: 10px;
  color: ${COLORS.DARK_GRAY};
  white-space: nowrap;
  margin: 0 5px;
`;

const Chat = forwardRef(({ chat, isContinuous }, ref) => {
  if (chat.type === 'EXIT' || chat.type === 'ENTER') {
    return (
      <Container isNotice ref={ref}>
        <Content isNotice>
          <InnerContent isNotice>{chat.content}</InnerContent>
        </Content>
      </Container>
    );
  }
  if (isContinuous) {
    return (
      <Container isSender={chat.isSender} isContinuous ref={ref}>
        {!chat.isSender && <Blank />}
        <Content>
          <InnerContent isSender={chat.isSender}>{chat.content}</InnerContent>
        </Content>
        <Time>{convertDateToTime(chat.createTime)}</Time>
      </Container>
    );
  }
  return (
    <Container isSender={chat.isSender} ref={ref}>
      {!chat.isSender && <Image src={chat.sender.avatar || images.logo} />}
      <Content>
        {!chat.isSender && <Nickname>{chat.sender.nickname}</Nickname>}
        <InnerContent isSender={chat.isSender}>{chat.content}</InnerContent>
      </Content>
      <Time>{convertDateToTime(chat.createTime)}</Time>
    </Container>
  );
});

Chat.displayName = 'Chat';
Chat.propTypes = {
  chat: PropTypes.object,
  isContinuous: PropTypes.bool,
};

export default Chat;
