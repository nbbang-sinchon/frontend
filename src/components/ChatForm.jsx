import React, { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../styles/constants';
import { icons } from '../assets/assets';

const Container = styled.div`
  display: flex;

  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${COLORS.GRAY};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${COLORS.DARK_GRAY};
`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;

const Content = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;

  resize: none;
`;

const FormMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormColumn = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    padding: 0 5px;

    &:hover {
      cursor: pointer;
    }
  }

  path {
    fill: ${COLORS.DARK_GRAY};
  }
`;

const ChatCounter = styled.div`
  margin-right: 20px;
  white-space: nowrap;
`;

const Button = styled.input`
  padding: 10px 25px;
  border-radius: 10px;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};

  &:hover {
    cursor: pointer;
  }
`;

function ChatForm() {
  const [chatLength, setChatLength] = useState(0);

  const onChatChange = ({ target }) => {
    setChatLength(target.value.length);
  };

  return (
    <Container>
      <Form>
        <Content placeholder="메세지를 입력해주세요" onChange={onChatChange} />
        <FormMenu>
          <FormColumn>
            <icons.LocationIcon />
            <icons.PictureIcon />
          </FormColumn>
          <FormColumn>
            <ChatCounter>{chatLength + '자'}</ChatCounter>
            <Button type="submit" value="전송" />
          </FormColumn>
        </FormMenu>
      </Form>
    </Container>
  );
}

export default ChatForm;
