import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../../styles/constants';

const Container = styled.div`
  display: flex;

  max-width: ${(props) => (props.type === 'NOTICE' ? '90%' : '60%')};
  font-size: 14px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;

  background: ${(props) =>
    props.type === 'NOTICE' ? COLORS.DARK_GRAY : props.isSender ? COLORS.PRIMARY : COLORS.GRAY};
  padding: ${(props) => (props.type === 'NOTICE' ? '7px 30px' : props.type === 'IMAGE' ? '5px' : '7px 15px')};
  color: ${(props) => (props.type === 'NOTICE' || props.isSender) && COLORS.WHITE};
  border-radius: 20px;
  white-space: pre-wrap;
  margin: ${(props) => props.type === 'NOTICE' && '10px 0'};
  opacity: ${(props) => props.type === 'NOTICE' && '0.8'};

  img {
    height: 150px;
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
    border-radius: 15px;
  }
`;

function ChatContent({ isSender, content, type }) {
  const convertType = (type) => (type === 'EXIT' || type === 'ENTER' ? 'NOTICE' : type);

  const shrinkHeight = ({ target }) => {
    target.style.height = 'fit-content';
  };

  return (
    <Container type={convertType(type)}>
      <Content type={convertType(type)} isSender={isSender}>
        {type === 'IMAGE' ? <img src={content} onLoad={shrinkHeight} /> : content}
      </Content>
    </Container>
  );
}

ChatContent.propTypes = {
  isSender: PropTypes.bool,
  content: PropTypes.string,
  type: PropTypes.string,
};

export default ChatContent;
