import styled from '@emotion/styled';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { icons } from '../../assets/assets';
import { SERVER_URL } from '../../config';

const Container = styled.label`
  display: flex;
  align-items: center;

  input {
    display: none;
  }
`;

function ChatUploadImage({ id }) {
  const inputRef = useRef();

  const uploadImage = () => {
    if (inputRef.current?.files) {
      return;
    }

    fetch(`${SERVER_URL}/chats/${id}/images`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'image/*' },
      body: inputRef.current?.files[0],
    });
  };

  return (
    <Container>
      <icons.PictureIcon />
      <input type="file" accept="image/*" ref={inputRef} onInput={uploadImage} />
    </Container>
  );
}

ChatUploadImage.propTypes = {
  id: PropTypes.string,
};

export default ChatUploadImage;
