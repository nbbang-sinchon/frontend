import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../styles/constants';
import { icons } from '../assets/assets';

const RowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  margin: 5px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  flex: auto;
  padding: 15px;
  color: ${COLORS.BLACK};
  font-size: 25px;
  font-weight: bolder;

  background: ${COLORS.PRIMARY};
  border-radius: 10px;
`;

const Status = styled.div`
  display: flex;
  flex: auto;
  padding: 5px;
  margin: 5px;
  color: ${COLORS.WHITE};
  font-size: 20px;
  font-weight: regular;

  background: ${COLORS.PRIMARY};
  border-radius: 5px;
`;

const Tag = styled.div`
  display: flex;
  margin: 2px;
  padding: 1px;
  align-items: flex-start;
  color: ${COLORS.PRIMARY};

  border: 1px solid ${COLORS.PRIMARY};
  border-radius: 2px;
  font-size: 10px;
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  color: ${COLORS.BLACKBLACK};
  font-size: 1px;

  > svg {
    margin: 0 5px;
    width: 10px;
    height: 13px;

    &:hover {
      cursor: pointer;
    }
`;

function Party({ title, hashtags, info }) {
  return (
    <ColumnContainer>
      <Title>{title}</Title>
      <RowContainer>
        <ColumnContainer>
          <TagsContainer>
            {hashtags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </TagsContainer>
          <InnerContainer>
            <Info>
              <icons.LocationIcon />
              {info}
              <icons.TimeIcon />
              방금
            </Info>
          </InnerContainer>
        </ColumnContainer>
        <Status>모집중 3/4</Status>
      </RowContainer>
    </ColumnContainer>
  );
}

Party.propTypes = {
  title: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  info: PropTypes.string.isRequired,
};

export default Party;
