import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { COLORS, HOVER_CURSOR_PONTER, SCROLL_PRIMARY } from '../../styles/constants';
import ChatUploadImage from './ChatUploadImage';
import useFetch from '../../hooks/useFetch';

const Container = styled.div`
  display: flex;

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
  color: ${COLORS.BLACK};

  resize: none;

  ${SCROLL_PRIMARY};
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
    padding: 0 15px;

    ${HOVER_CURSOR_PONTER};
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

  ${HOVER_CURSOR_PONTER};
`;

function ChatForm({ id }) {
  const [chatLength, setChatLength] = useState(0);
  const chatRef = useRef();
  const submitRef = useRef();
  const { customFetch } = useFetch();

  const onChatChange = ({ target }) => {
    setChatLength(target.value.length);
  };

  const submitChat = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const chat = form.get('chat');

    if (!chat) {
      return;
    }

    customFetch(`/chats/${id}`, 'POST', JSON.stringify(chat));

    if (chatRef.current) {
      chatRef.current.value = '';
    }
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();

      if (submitRef.current) {
        submitRef.current.click();
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={submitChat}>
        <Content
          placeholder="???????????? ??????????????????"
          onChange={onChatChange}
          name="chat"
          ref={chatRef}
          onKeyDown={onKeyDown}
        />
        <FormMenu>
          <FormColumn>
            <ChatUploadImage id={id} />
          </FormColumn>
          <FormColumn>
            <ChatCounter>{chatLength + '???'}</ChatCounter>
            <Button type="submit" value="??????" ref={submitRef} />
          </FormColumn>
        </FormMenu>
      </Form>
    </Container>
  );
}

ChatForm.propTypes = {
  id: PropTypes.string,
};

export default ChatForm;
