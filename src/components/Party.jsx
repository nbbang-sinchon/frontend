import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../styles/constants';
import { icons } from '../assets/assets';
import HashTags from './HashTags';
import { convertDate, convertPlace, convertStatus } from '../utils/converter';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 300px;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.PRIMARY2};
  }
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
  justify-content: space-between;

  padding: 15px;
  margin-bottom: 5px;
  color: ${COLORS.BLACK};
  font-size: 18px;
  font-weight: bolder;
  background: ${COLORS.PRIMARY};
  border-radius: 10px;
`;

const TitleColumn = styled.div`
  align-items: center;

  &:nth-of-type(1) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100px;
  padding: 0 10px;
  color: ${COLORS.WHITE};
  font-size: 14px;
  font-weight: 500;
  background: ${COLORS.PRIMARY};
  border-radius: 10px;
  white-space: nowrap;

  div {
    text-align: center;
  }
  div:nth-of-type(1) {
    flex: 1;
  }
  div:nth-of-type(2) {
    flex: 2;
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

function Party({ title, hashtags, place, createTime, joinNumber, goalNumber, status }) {
  return (
    <Container>
      <Title>
        <TitleColumn>{title}</TitleColumn>
        <TitleColumn>
          <icons.HeartIcon />
        </TitleColumn>
      </Title>
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
          <div>
            {joinNumber} / {goalNumber}
          </div>
          <div>{convertStatus(status)}</div>
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
  joinNumber: PropTypes.number.isRequired,
  goalNumber: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default Party;
