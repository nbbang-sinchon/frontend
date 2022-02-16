import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../styles/constants';
import { icons } from '../assets/assets';
import HashTags from './HashTags';
import { convertDate, convertPlace } from '../utils/converter';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 300px;
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 180px;
  overflow: hidden;
  padding-left: 5px;

  > svg {
    margin: 0 5px;
    width: 10px;
    height: 13px;

    &:hover {
      cursor: pointer;
    }
`;

const Title = styled.div`
  display: flex;

  padding: 15px;
  margin-bottom: 5px;
  color: ${COLORS.BLACK};
  font-size: 20px;
  font-weight: bolder;
  background: ${COLORS.PRIMARY};
  border-radius: 10px;
  overflow: hidden;
  white-space: nowrap;
`;

const Status = styled.div`
  display: flex;
  align-items: center;

  padding: 0 10px;
  color: ${COLORS.WHITE};
  font-size: 16px;
  background: ${COLORS.PRIMARY};
  border-radius: 10px;
  white-space: nowrap;

  svg {
    margin-left: 5px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;

  svg {
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }

  div {
    margin-right: 8px;
  }
`;

function Party({ title, hashtags, place, createTime }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <InnerContainer>
          <HashTags hashtags={hashtags} />
          <Info>
            <icons.LocationIcon />
            <div>{convertPlace(place)}</div>
            <icons.TimeIcon />
            <div>{convertDate(createTime)}</div>
          </Info>
        </InnerContainer>
        <Status>
          모집중 3/4
          <icons.HeartIcon />
        </Status>
      </Content>
    </Container>
  );
}

Party.propTypes = {
  title: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  place: PropTypes.string.isRequired,
  createTime: PropTypes.string.isRequired,
};

export default Party;
