import styled from '@emotion/styled';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { icons } from '../../assets/assets';
import useFetch from '../../hooks/useFetch';

const Container = styled.label`
  display: flex;
  align-items: center;

  input {
    display: none;
  }
`;

function ChatUploadImage({ id }) {
  const inputRef = useRef();
  const { customFetch } = useFetch();

  const uploadImage = () => {
    if (!inputRef.current?.files) {
      return;
    }

    const formData = new FormData();
    formData.append('imgFile', inputRef.current.files[0]);

    customFetch(`/chats/${id}/images`, 'POST', formData);
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
