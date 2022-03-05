import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  display: flex;

  padding: 3px 0;
`;

const Tag = styled.div`
  display: flex;

  height: 20px;
  margin: 2px;
  padding: 0 7px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
`;

function HashTags({ hashtags, color }) {
  return (
    <Container>
      {hashtags.map((tag) => (
        <Tag key={tag} color={color}>
          {'#' + tag}
        </Tag>
      ))}
    </Container>
  );
}

HashTags.propTypes = {
  hashtags: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
};

export default HashTags;
