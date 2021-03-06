import styled from '@emotion/styled';
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { images } from '../../assets/assets';
import { COLORS, SCROLL_PRIMARY } from '../../styles/constants';
import { convertPrice } from '../../utils/converter';
import BreadBoardPrice from './BreadBoardPrice';
import BreadBoardAccount from './BreadBoardAccount';
import BreadBoardStatus from './BreadBoardStatus';
import { LoginStoreContext } from '../Stores/LoginStore';

const Container = styled.div`
  position: absolute;
  top: 200px;
  right: ${(props) => (props.isVisible && '-40px') || '-500px'};
  transition: right ease-in-out 0.3s;
  width: 500px;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 240px;
  z-index: 1;
  margin: 150px 0 0 80px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid ${COLORS.GRAY};
  margin-bottom: 10px;
  padding-bottom: 10px;

  > div:first-of-type {
    font-size: 16px;
  }
`;

const Users = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;

  width: 145%;
  max-height: 200px;
  margin-left: -20%;
  padding-right: 10px;
  overflow-y: auto;
  overflow-x: hidden;

  ${SCROLL_PRIMARY};
`;

const User = styled.div`
  display: flex;
  align-items: center;

  width: 125%;
  padding: 10px 0;
  padding-top: ${(props) => props.isDelivery && `20px`};
  white-space: pre-wrap;

  > img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    border: ${(props) => !props.isDelivery && `1px solid ${COLORS.PRIMARY}`};
    box-sizing: border-box;
  }
`;

const Bar = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.GRAY};
`;

const UserName = styled.div`
  display: flex;
  align-items: center;

  width: 100px;
  padding: 0 10px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  box-sizing: border-box;
  background-color: ${COLORS.GRAY};
  border-radius: 50%;
  font-size: 10px;
  margin-right: 3px;
`;

const TagColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 11%;
`;

function BreadBoard({ isVisible, breadBoard, id }) {
  const [isNbbanged, setIsNbbanged] = useState(true);
  const { loginId } = useContext(LoginStoreContext);

  const getTotal = (breadBoard) =>
    breadBoard?.members?.reduce((total, member) => total + member.price, 0) + breadBoard?.deliveryFee;

  const getPrice = (price) => price + (isNbbanged ? breadBoard.deliveryFee / breadBoard.members.length : 0);

  const getOwnerId = (breadBoard) => breadBoard?.members?.find((member) => member.isOwner).id;

  const sortMember = (memberA, memberB) => {
    if (memberB.id === loginId || (memberB.isOwner && memberA.id !== loginId)) {
      return 1;
    } else if (memberA.id === loginId || (memberA.isOwner && memberB.id !== loginId)) {
      return -1;
    } else {
      return memberA.id - memberB.id;
    }
  };

  return (
    <Container isVisible={isVisible}>
      <Image src={images.breadBoard} />
      <Content>
        <Info>
          <div>TOTAL</div>
          <div>{convertPrice(getTotal(breadBoard))}</div>
        </Info>
        <Info>
          <BreadBoardAccount
            id={id}
            bank={breadBoard?.bank}
            account={breadBoard?.accountNumber}
            disabled={getOwnerId(breadBoard) !== loginId}
          />
        </Info>
        <Users>
          {breadBoard?.members?.sort(sortMember).map((member) => (
            <User key={member.id || member.nickname}>
              <TagColumn>
                {member.id === loginId && <Tag>???</Tag>}
                {member.isOwner && <Tag>??????</Tag>}
              </TagColumn>
              <img src={member.avatar || images.logo} />
              <UserName>
                <div>{member.nickname}</div>
              </UserName>
              <BreadBoardPrice price={getPrice(member.price)} id={id} disabled={member.id !== loginId} />
              <BreadBoardStatus status={member?.isSent} id={id} disabled={member.id !== loginId} />
            </User>
          ))}
        </Users>
        <Bar />
        <User isDelivery>
          <img src={images.delivery} />
          <UserName>?????????</UserName>
          <BreadBoardPrice
            price={breadBoard?.deliveryFee}
            id={id}
            isDelivery
            disabled={getOwnerId(breadBoard) !== loginId}
          />
          <BreadBoardStatus status={isNbbanged} setIsNbbanged={setIsNbbanged} isDelivery />
        </User>
      </Content>
    </Container>
  );
}

BreadBoard.propTypes = {
  isVisible: PropTypes.bool,
  breadBoard: PropTypes.object,
  id: PropTypes.string,
};

export default BreadBoard;
