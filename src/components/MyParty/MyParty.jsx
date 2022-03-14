import styled from '@emotion/styled';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { icons } from '../../assets/assets';
import { COLORS, HOVER_CURSOR_PONTER } from '../../styles/constants';
import HashTags from '../HashTags';
import { convertStatus } from '../../utils/converter';
import useFetch from '../../hooks/useFetch';

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

const Title = styled.div`
  padding: 25px 30px;
  font-size: 18px;
  font-weight: bolder;
  width: 200px;

  background: ${(props) => props.color};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

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

const NotReadChat = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  border-radius: 50%;
  background: red;
  font-size: 10px;
  text-align: center;
  line-height: 20px;

  position: relative;
  bottom: 15px;
  left: 15px;
`;

const Status = styled.div`
  width: 100px;
  margin-left: 10px;

  padding: 25px 10px;
  color: ${COLORS.BLACK};
  font-size: 15px;
  font-weight: bolder;
  text-align: center;

  background: ${(props) => props.color};
  border-radius: 8px;
  margin-bottom: 5px;
`;

const StatusBtn = styled.button`
  margin-left: 10px;

  padding: 8px 10px;
  color: ${(props) => props.color};
  font-size: 12px;
  text-align: center;

  background: ${COLORS.WHITE};
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;
  ${HOVER_CURSOR_PONTER}

  &:hover {
    background-color: ${(props) => props.color};
    color: ${COLORS.WHITE};
  }
`;

const Menu = styled.button`
  width: 100px;

  padding: 8px 10px;
  color: ${(props) => props.color};
  font-size: 12px;

  background: ${COLORS.WHITE};
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;
  ${HOVER_CURSOR_PONTER}

  &:hover {
    background-color: ${(props) => props.color};
    color: ${COLORS.WHITE};
  }
`;

const MenuColumn = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  flex-direction: column;

  position: relative;
  top: 72px;
  left: 1px;
`;

function MyParty({ title, hashtags, joinNumber, goalNumber, status, id, color, notReadNumber, isOwner }) {
  const { customFetch } = useFetch();
  const navigate = useNavigate();

  const [isChangingStatus, setIsChangingStatus] = useState(false);

  const patchStatus = async ({ target }) => {
    const status = target.dataset.status;

    if (!status) {
      return;
    }

    const json = await customFetch(`/parties/${id}/status`, 'PATCH', JSON.stringify({ status }));

    if (json?.statusCode === 200) {
      navigate(`/parties/${id}`);
    }
  };

  return (
    <>
      <Container>
        <Column>
          <Link to={`/chats/${id}`}>
            <Title color={color}>
              {title}
              <NotReadChat notReadNumber={notReadNumber}>{notReadNumber > 99 ? '99+' : notReadNumber}</NotReadChat>
            </Title>
          </Link>
          <Row>
            <HashTagRow>
              <HashTags hashtags={hashtags} color={color} />
            </HashTagRow>
            <Row>
              <Link to={`/parties/${id}`}>
                <icons.DetailIcon />
              </Link>
              <Link to={`/newparty/${id}`}>
                <icons.EditIcon />
              </Link>
              <Link to="/">
                <icons.DeleteIcon />
              </Link>
            </Row>
          </Row>
        </Column>
        <Column>
          <Status color={color}>{convertStatus(status, joinNumber, goalNumber)}</Status>
          <StatusBtn color={color} onClick={() => setIsChangingStatus((prev) => !prev)}>
            {isOwner ? '상태변경' : '방장이 아닙니다'}
          </StatusBtn>
        </Column>
        <MenuColumn visible={isOwner && isChangingStatus} onClick={patchStatus}>
          <Menu data-status="OPEN" color={color}>
            모집 중
          </Menu>
          <Menu data-status="FULL" color={color}>
            모집 완료
          </Menu>
          <Menu data-status="CLOSED" color={color}>
            모집 종료
          </Menu>
        </MenuColumn>
      </Container>
    </>
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
  color: PropTypes.string.isRequired,
  notReadNumber: PropTypes.number,
  isOwner: PropTypes.bool,
};
