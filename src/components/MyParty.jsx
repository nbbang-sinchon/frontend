import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { icons } from '../assets/assets';
import { COLORS, SIZES, HOVER_CURSOR_PONTER } from '../styles/constants';
import HashTags from './HashTags';
import { convertStatus } from '../utils/converter';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;

  svg {
    width: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HashTagRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 180px;
  overflow: hidden;
`;

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: stretch;
`;

const Title = styled.div`
  padding: 20px 30px;
  font-size: 30px;
  width: 200px;

  background: ${COLORS.PRIMARY};
  border-radius: 10px;

  ${HOVER_CURSOR_PONTER}

  &:hover {
    opacity: 0.8;
  }

  &:nth-of-type(1) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Status = styled.div`
  width: 100px;
  margin-left: 10px;

  padding: 20px 10px;
  color: ${COLORS.BLACK};
  font-size: 25px;
  text-align: center;

  background: ${COLORS.PRIMARY};
  border-radius: 5px;
  margin-bottom: 5px;
`;

const StatusBtn = styled.button`
  margin-left: 10px;

  padding: 5px 10px;
  color: ${COLORS.PRIMARY};
  font-size: 15px;
  text-align: center;

  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.PRIMARY};
  border-radius: 5px;
  ${HOVER_CURSOR_PONTER}

  &:hover {
    background-color: ${COLORS.PRIMARY2};
  }

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 5px;
  }
`;

function MyParty({ title, hashtags, joinNumber, goalNumber, status, id }) {
  return (
    <Container>
      <Column>
        <Link to={`parties/${id}`}>
          <Title>{title}</Title>
        </Link>
        <Row>
          <HashTagRow>
            <HashTags hashtags={hashtags} />
          </HashTagRow>
          <Row>
            <Link to={`parties/${id}`}>
              <icons.DeatilIcon />
            </Link>
            <Link to={`newparty/${id}`}>
              <icons.EditIcon />
            </Link>
            <Link to="/">
              <icons.DeleteIcon />
            </Link>
          </Row>
        </Row>
      </Column>
      <Column>
        <StatusColumn>
          <Status>{convertStatus(status, joinNumber, goalNumber)}</Status>
          <StatusBtn>상태변경</StatusBtn>
        </StatusColumn>
      </Column>
    </Container>
  );
}

export default MyParty;

MyParty.propTypes = {
  title: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  joinNumber: PropTypes.number.isRequired,
  goalNumber: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
