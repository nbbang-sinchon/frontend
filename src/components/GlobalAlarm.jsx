import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalAlarm from '../hooks/useGlobalAlarm';
import { COLORS } from '../styles/constants';
import { convertDateToTime } from '../utils/converter';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InnerContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  bottom: 200px;

  z-index: 2;
`;

const Alarm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 270px;
  margin: 5px 0;
  margin-right: -10px;
  padding: 8px 30px 8px 15px;
  box-sizing: border-box;
  background-color: ${COLORS.GREEN};
  color: ${COLORS.WHITE};
  border-radius: 15px;
  font-size: 12px;

  &:hover {
    background-color: ${COLORS.LIGHT_GREEN};
  }

  animation-name: show;
  animation-duration: 0.5s;

  @keyframes show {
    from {
      transform: translate(300px);
    }
    to {
      transform: translate(0);
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 5px;

  > span {
    white-space: nowrap;
  }

  > span:first-of-type {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Content = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

function GlobalAlarm() {
  const alarms = useGlobalAlarm();

  return (
    <Container>
      <InnerContainer>
        {alarms.map((alarm) => (
          <Link to={`/chats/${alarm?.party.id}`} key={alarm.id}>
            <Alarm>
              <Title>
                <span>{alarm.party.title}</span>
                <span>{convertDateToTime(alarm.createTime)}</span>
              </Title>
              <Content>
                {alarm.sender.nickname} : {alarm.type === 'IMAGE' ? '(사진)' : alarm.content}
              </Content>
            </Alarm>
          </Link>
        ))}
      </InnerContainer>
    </Container>
  );
}

export default GlobalAlarm;
